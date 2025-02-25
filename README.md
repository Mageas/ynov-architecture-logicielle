# 🌸 ynov-architecture-logicielle

## 🌟 Description

Ce projet est construit avec [NestJS](https://nestjs.com/), un framework pour construire des applications serveur Node.js efficaces et fiables.

## 📋 Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 🚀 Installation

### 1. Cloner le dépôt

Clonez le dépôt :

```bash
git clone https://github.com/Mageas/ynov-architecture-logicielle
cd ynov-architecture-logicielle
```

### 2. Installer les dépendances

Installez les dépendances :

```bash
npm install
```

### 3. Configuration

1. Copiez le fichier `.env.dist` vers `.env` :

   ```bash
   cp .env.dist .env
   ```

2. Modifiez le fichier `.env` avec les valeurs appropriées.

### 4. Réinitialiser la base de données

Réinitialisez la base de données avec Prisma :

```bash
npm run prisma:reset
```

### 5. Démarrer le serveur

Démarrez le serveur en mode développement :

```bash
npm run start:dev
```

Votre application devrait maintenant être en cours d'exécution. Vous pouvez accéder à l'API via `http://localhost:3000`.

## 📜 Documentation API

Ce projet utilise Swagger pour la documentation de l'API. Vous pouvez accéder à la documentation interactive via l'URL suivante :

`http://localhost:3000/swagger`

Swagger vous permet de visualiser et tester les différentes routes disponibles dans l'API.

## 🛠️ Scripts disponibles

- `npm run start`: Démarre l'application en mode production.
- `npm run start:dev`: Démarre l'application en mode développement avec rechargement à chaud.
- `npm run build`: Compile le projet.
- `npm run prisma:reset`: Réinitialise la base de données Prisma.
- `npm run test`: Exécute les tests unitaires.
- `npm run test:e2e`: Exécute les tests de bout en bout.
- `npm run test:cov`: Exécute les tests avec un rapport de couverture.

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request pour toute amélioration ou correction de bug.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
