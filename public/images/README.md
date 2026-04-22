# Photos d'emballage

Glissez vos photos ici avec **exactement** ces noms de fichiers :

## `produits/` — Cartes de la section Produits

| Fichier                              | Photo attendue                                    |
| ------------------------------------ | ------------------------------------------------- |
| `produits/contenants.jpg`            | Foodservice (boîtes pizza, gobelets, sac kraft)   |
| `produits/sacs.jpg`                  | Sacs kraft à fenêtre transparente                 |
| `produits/sous-vide.jpg`             | Viande emballée sous vide                         |
| `produits/pots.jpg`                  | Bouteilles, pots de verre étiquetés               |

## `clienteles/` — Fond des cartes Clientèles

| Fichier                              | Photo attendue                                    |
| ------------------------------------ | ------------------------------------------------- |
| `clienteles/restaurants.jpg`         | (optionnel) Cuisine de restaurant                 |
| `clienteles/transformation.jpg`      | Variété d'emballages sous vide (charcuterie)      |

## Notes

- **Si un fichier est manquant**, le site affiche automatiquement le pictogramme à la place — aucune erreur.
- Formats acceptés : `.jpg`, `.jpeg`, `.png`, `.webp` (mais nommez-les `.jpg` peu importe le format réel, ou modifiez l'extension dans le code).
- Aucune compression nécessaire avant : Vite optimise au build.
- Une fois les photos déposées, lancez `npm run deploy` pour publier la nouvelle version.
