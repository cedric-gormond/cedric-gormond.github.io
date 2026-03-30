---
title: "Projects"
layout: "single"
url: "/projects/"
summary: "ML Projects — Cédric Gormond"

---

### Identification of Novel Smartphone-Based Digital Biomarkers to Characterize Lower and Upper Limb Motor Functions in Patients with Duchenne Muscular Dystrophy
*[Ad Scientiam](https://www.adscientiam.com) · 2024 · Published in [Neurology (P3-11.005)](https://doi.org/10.1212/WNL.0000000000204969)*

**Objective:** To assess the feasibility of smartphone-based digital biomarkers (dBMKs) to objectively measure lower and upper limb motor functions in patients with Duchenne muscular dystrophy (DMD).

**Background:** DMD is a severe muscular dystrophy characterized by progressive muscle atrophy and weakness. Current clinical measures have limitations (e.g., inter-rater variability) and are infrequent, which could impede patient care. These challenges could be overcome with smartphone-based dBMKs that offer innovative approaches to track the progression of functional parameters from the patient's home.

**Design/Methods:** A literature review and interviews with 11 experts (neuropaediatricians, physiotherapists, occupational therapists) was performed to identify and prioritize meaningful health concepts and candidate dBMKs. A Proof-of-Concept study was conducted at a myology institute with 2 physiotherapists simulating different degrees of disease severity (mild, moderate, severe). Feasibility of the measurement process was assessed for a Timed-up-and-Go (TUG) test and upper limb motor (ULM) test using accelerometer, gyroscope, and camera-based keypoint detection.

**Results:** Ambulation, balance, and transition tasks were prioritized as main health concepts. 11 candidate dBMKs derived from accelerometer and gyroscope were selected for TUG, with feasibility confirmed at a MAE of **1.6 ± 1s** for automatic transition detection (MAE 0.8s mild vs. 2.1s severe phenotypes). The ULM test confirmed feasibility using automated keypoint detection to measure arm function and compensation strategies.

**Conclusions:** These insights pave the way for a smartphone-based measurement device to collect dBMKs in people living with DMD, and may provide clinicians with objective data from the patient's home to support medical decisions.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin: 0.5em 0 1.5em;">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white">
  <img src="https://img.shields.io/badge/Azure_ML-0078D4?style=flat-square&logo=microsoftazure&logoColor=white">
</div>

---

### Influence of Photometric Data Augmentation
*[LACROIX Impulse](https://www.lacroix-electronics.com) · 2021 · [ResearchGate](https://www.researchgate.net/publication/354496627_Influence_of_Photometric_Data_Augmentation)*

This research paper explores the influence of Photometric Data Augmentation within a complete Data Augmentation pipeline in the context of Advanced Driver-Assistance Systems. Several object detection convolutional neural networks (CNN) were trained with color augmentation techniques, their performances measured on a validation dataset, and strategies compared through a sensitivity analysis. Experimental results indicate that photometric augmentation increases CNN detection performances.

**Key results:**
- **16 MobileNet-SSD networks** trained with distinct PDA pipelines on a 28k-image proprietary ADAS dataset (6 classes: person, car, bicycle, motorcycle, truck, bus)
- All 4 photometric methods (contrast, brightness, hue, saturation) individually improve mAP over baseline (23.9%)
- **Best single method: brightness** (+1.6% mAP); optimal with 2 combined methods (**+1.1% average gain**)
- RGB-space methods outperform HSV; applying all 4 simultaneously degrades performance (images too altered)
- Model optimized for embedded deployment via ONNX: **50% memory reduction** with only 2% mAP drop

<div style="display:flex; flex-wrap:wrap; gap:4px; margin: 0.5em 0 1.5em;">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white">
  <img src="https://img.shields.io/badge/ONNX-005CED?style=flat-square&logo=onnx&logoColor=white">
  <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white">
</div>

---

### Slow Movers Demand Forecasting
*[SymphonyAI](https://www.symphonyai.com) · Dec 2022 · 🏆 Hackathon Winner — $5,000 Award*

*Team "La team Roquette": C. Coussinet, C. Gormond, M. Piolat*

**Problem:** "Slow movers" are retail SKUs with very few sales over a long period and high demand variance — making them notoriously difficult to forecast accurately with standard approaches.

**Approach:** End-to-end forecasting pipeline including feature engineering (polynomial and interaction features, temporal variables), followed by a systematic benchmark of statistical (WMA, SES, Croston), ML (Random Forest, XGBoost), and DL (Stacked LSTM, AE-LSTM) approaches. All models were validated with **10-fold blocking cross-validation** to respect time-series structure and avoid lookahead bias.

**Result:** The Random Forest with error correction (**ADD**) was the best-performing model — **WMAPE 56%, R² 0.33** — outperforming all statistical baselines and deep learning models on this intermittent demand task.

<div style="display:flex; flex-wrap:wrap; gap:4px; margin: 0.5em 0 1.5em;">
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white">
  <img src="https://img.shields.io/badge/XGBoost-189fca?style=flat-square&logo=xgboost&logoColor=white">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white">
</div>
