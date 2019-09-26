# Propriétés du langage JAVA

## Les annotations

Les annotations fournissent des informations sur des entités : elles n'ont pas d'effets directs sur les entités qu'elles concernent. Les annotations utilisent leur propre syntaxe. Une annotation s'utilise avec le caractère `@` suivi du nom de l'annotation : elle doit obligatoirement précéder l'entité qu'elle annote. Par convention, les annotations s'utilisent sur une ligne dédiée.

Les utilisations des annotations concernent plusieurs fonctionnalités :

- Utilisation par le compilateur pour détecter des erreurs ou ignorer des avertissements
- Documentation
- **Génération de code**
- **Génération de fichiers**

## Les mots clés

### Accès à une entité (private, public, protected)

De nombreux langages orientés objet introduisent des attributs de visibilité pour réglémenter **l'accès aux classes et aux objets, aux méthodes et aux données.**

Il existe 3 modificateurs qui peuvent être utilisés pour définir les attributs de visibilité des entités (classes, méthodes ou attributs) : `public`, `private` et `protected`. Leur utilisation permet de définir des niveaux de protection différents (présentés dans un ordre croissant de niveau de protection offert) :

| Modificateur                    | Rôle                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| `public`                        | Une variable, méthode ou classe déclarée public est visible par tous les autres objets. Dans la philosophie orientée objet aucune donnée d'une classe ne devrait être déclarée publique : **il est préférable d'écrire des méthodes pour consulter et modifier les attributs** |
| par défaut : `package friendly` | Il n'existe pas de mot clé pour définir ce niveau, qui est le **niveau par défaut** lorsqu'aucun modificateur n'est précisé. Cette déclaration permet à une entité (classe, méthode ou variable) d'être visible par toutes les classes se trouvant **dans le même package**. |
| `protected`                     | Si une méthode ou une variable est déclarée protected, seules les méthodes présentes dans le même package que cette classe ou ses sous-classes pourront y accéder. On ne peut pas qualifier une classe avec protected. |
| `private`                       | C'est le niveau de protection le plus fort. **Les composants ne sont visibles qu'à l'intérieur de la classe** : ils ne peuvent être modifiés que par des méthodes définies dans la classe et prévues à cet effet. Les méthodes déclarées private ne peuvent pas être en même temps déclarées abstract car elles ne peuvent pas être redéfinies dans les classes filles. |

### Le mot clé static

Les variables d'instance sont des variables propres à un objet. Il est possible de définir **une variable de classe qui est partagée entre toutes les instances d'une même classe** : elle n'existe donc qu'une seule fois en mémoire. Une telle variable permet de stocker une constante ou une valeur modifiée tour à tour par les instances de la classe. Elle se définit avec le mot clé static.

```java
public class Cercle {

	static float pi = 3.1416f;
	float rayon;

	public Cercle(float rayon) { this.rayon = rayon; }
	public float surface() { return rayon * rayon * pi;}

}
```

Une méthode static est une méthode qui n'agit pas sur des variables d'instance mais uniquement sur des variables de classe. Ces méthodes peuvent être utilisées sans instancier un objet de la classe. Les méthodes ainsi définies peuvent être appelées avec la notation **classe.methode()** au lieu de objet.methode() : la première forme est fortement recommandée pour éviter toute confusion.

### Le mot clé final

Il permet de rendre l'entité sur laquelle il s'applique non modifiable une fois qu'elle est déclarée pour une méthode ou une classe et initialisée pour une variable. Une variable qualifiée de final signifie que la valeur de la variable **ne peut plus être modifiée une fois que celle-ci est initialisée.**

```java
public class Constante2 {
	public final int constante;
	public Constante2() {
		this.constante = 10;
	}
}
```

### Le mot clé abstract

Le mot clé abstract s'applique aux méthodes et aux classes. Abstract indique que **la classe ne pourra être instanciée telle quelle**. De plus, **toutes les méthodes de cette classe abstract ne sont pas implémentées** et devront **être redéfinies par des méthodes complètes dans ses sous-classes.**

Abstract permet de créer une classe qui sera une sorte de moule. Toutes les **classes dérivées pourront profiter des méthodes héritées** et n'auront à **implémenter que les méthodes déclarées abstract**.

```java
abstract class ClasseAbstraite {
	ClasseAbstraite() { ... } //code du constructeur 
  void methode() { ... } // code partagé par tous les descendants 
  abstract void methodeAbstraite();
}

class ClasseComplete extends ClasseAbstraite {
    
  ClasseComplete() { super(); ... }
  void methodeAbstraite() { ... } // code de la méthode 
}
```

