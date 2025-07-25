```markdown
# Guide d’installation et de démarrage

## Prérequis

Avant de commencer, assurez-vous d’avoir installé sur votre machine :
- **Node.js** (version 18 ou plus recommandée) : [Télécharger Node.js](https://nodejs.org/)
- **npm** (inclus avec Node.js) ou **yarn** (optionnel).

## Installation du projet

1. **Cloner le projet**  
   Téléchargez le projet ou clonez-le via Git :  
   ```bash
   git clone [URL_DU_PROJET]
   ```

2. **Accéder au dossier du projet**  
   ```bash
   cd [NOM_DU_DOSSIER]
   ```

3. **Installer les dépendances**  
   ```bash
   npm install
   ```
   ou si vous utilisez **yarn** :  
   ```bash
   yarn
   ```

## Lancer le projet en local

Une fois l’installation terminée, lancez le serveur de développement :
```bash
npm run dev
```
ou avec **yarn** :  
```bash
yarn dev
```

Le projet sera disponible à l’adresse :  
[http://localhost:3000](http://localhost:3000)

## Construire le projet (mode production)

Pour créer une version optimisée du site :
```bash
npm run build
```
Puis lancer le serveur de production :
```bash
npm start
```
```
