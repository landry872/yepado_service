# Yepado Service

Site vitrine de **Yepado Service**, votre porte d'entrée vers les marchés africains.
Yepado Service facilite l'implantation et le développement des entreprises
internationales en Côte d'Ivoire et en Afrique de l'Ouest et Centrale.

## Stack technique

- [Vite](https://vitejs.dev/) — outil de build et serveur de développement
- [React 18](https://react.dev/) — bibliothèque d'interface

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou supérieur
- npm

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est ensuite accessible sur l'URL locale affichée par Vite
(par défaut `http://localhost:5173`).

## Scripts disponibles

| Commande          | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Démarre le serveur de développement (hot reload).  |
| `npm run build`   | Génère la version de production dans `dist/`.       |
| `npm run preview` | Prévisualise localement le build de production.     |

## Structure du projet

```
.
├── index.html          # Point d'entrée HTML (monté par Vite)
├── public/assets/      # Images et vidéos statiques
├── src/
│   ├── main.jsx        # Point d'entrée React
│   ├── App.jsx         # Composant racine
│   ├── components/     # Composants de la page (Hero, Services, Contact, ...)
│   ├── styles.css      # Styles globaux
│   └── utils/          # Utilitaires
└── vite.config.js      # Configuration Vite
```

## Déploiement

Le site est déployé via **AWS Amplify** : chaque push sur la branche suivie
déclenche automatiquement un nouveau build et déploiement.
