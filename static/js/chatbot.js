/* ── constants ── */
var MAX_HISTORY     = 6;
var MAX_STORED      = 20;
var STORAGE_HISTORY = "cb_history";
var STORAGE_OPEN    = "cb_open";
var STORAGE_MSGS    = "cb_msgs";
var GREETING        = "Hi! Ask me anything about Cédric's experience, skills or projects.\n" +
                      "Bonjour\u00a0! Posez-moi vos questions sur le parcours de Cédric.";

/* ── state ── */
var cbHistory = [];
var cbOpen    = false;

/* ── elements ── */
var cbWidget, cbBubble, cbMessages, cbInput, cbSend;

document.addEventListener("DOMContentLoaded", function () {
  cbWidget   = document.getElementById("cb-widget");
  cbBubble   = document.getElementById("cb-bubble");
  cbMessages = document.getElementById("cb-messages");
  cbInput    = document.getElementById("cb-input");
  cbSend     = document.getElementById("cb-send");

  cbSend.addEventListener("click", cbSendMessage);
  cbInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); cbSendMessage(); }
  });

  cbRestore();
});

/* ── toggle ── */
function cbToggle() {
  cbOpen = !cbOpen;
  cbWidget.classList.toggle("cb-widget--open", cbOpen);
  cbBubble.classList.toggle("cb-bubble--hidden", cbOpen);
  if (cbOpen) cbInput.focus();
  cbSaveState();
}

/* ── append a bubble and return it ── */
function cbAppend(role, text) {
  var div = document.createElement("div");
  div.className = "cb-msg cb-msg--" + (role === "user" ? "user" : "bot");
  div.textContent = text;
  cbMessages.appendChild(div);
  cbMessages.scrollTop = cbMessages.scrollHeight;
  return div;
}

/* ── save / restore via localStorage ── */
function cbSaveState() {
  try {
    localStorage.setItem(STORAGE_OPEN, cbOpen ? "1" : "0");
  } catch (e) {}
}

function cbSaveHistory() {
  try {
    // Keep last MAX_STORED messages for display restoration
    var msgs = Array.from(cbMessages.querySelectorAll(".cb-msg")).map(function (el) {
      return {
        role: el.classList.contains("cb-msg--user") ? "user" : "bot",
        text: el.textContent
      };
    }).slice(-MAX_STORED);
    localStorage.setItem(STORAGE_MSGS, JSON.stringify(msgs));
    localStorage.setItem(STORAGE_HISTORY, JSON.stringify(cbHistory));
  } catch (e) {}
}

function cbRestore() {
  try {
    var storedMsgs    = localStorage.getItem(STORAGE_MSGS);
    var storedHistory = localStorage.getItem(STORAGE_HISTORY);
    var storedOpen    = localStorage.getItem(STORAGE_OPEN);

    if (storedMsgs) {
      var msgs = JSON.parse(storedMsgs);
      if (msgs.length > 0) {
        msgs.forEach(function (m) { cbAppend(m.role, m.text); });
      } else {
        cbAppend("bot", GREETING);
      }
    } else {
      cbAppend("bot", GREETING);
    }

    if (storedHistory) cbHistory = JSON.parse(storedHistory);

    if (storedOpen === "1") cbToggle();

  } catch (e) {
    cbAppend("bot", GREETING);
  }
}

/* ── clear ── */
function cbClear() {
  cbHistory = [];
  cbMessages.innerHTML = "";
  cbAppend("bot", GREETING);
  try {
    localStorage.removeItem(STORAGE_HISTORY);
    localStorage.removeItem(STORAGE_MSGS);
  } catch (e) {}
}

/* ── send ── */
function cbSendMessage() {
  var message = cbInput.value.trim();
  if (!message) return;

  cbInput.value = "";
  cbAppend("user", message);
  cbSend.disabled  = true;
  cbInput.disabled = true;
  cbSend.textContent = "⏳";

  var thinking = cbAppend("bot", "⏳ Thinking…");

  fetch(window.CHATBOT_API_URL + "/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message, history: cbHistory }),
  })
    .then(function (res) {
      if (res.status === 429) throw new Error("rate_limit");
      if (!res.ok) throw new Error("http_" + res.status);
      return res.json();
    })
    .then(function (data) {
      thinking.textContent = data.response;
      cbHistory.push({ role: "user",      content: message       });
      cbHistory.push({ role: "assistant", content: data.response });
      if (cbHistory.length > MAX_HISTORY) cbHistory = cbHistory.slice(-MAX_HISTORY);
      cbSaveHistory();
    })
    .catch(function (err) {
      thinking.textContent = err.message === "rate_limit"
        ? "⚠️ Too many requests — please wait a moment."
        : "⚠️ Assistant is waking up (cold start ~30s). Please try again.";
      cbSaveHistory();
    })
    .finally(function () {
      cbSend.disabled  = false;
      cbInput.disabled = false;
      cbSend.textContent = "Send →";
      cbInput.focus();
    });
}
