# Étape 1 : utiliser une image Node officielle comme base
FROM node:20

# Étape 2 : définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3 : copier les fichiers de dépendances dans le conteneur
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier tous les fichiers de ton projet dans le conteneur
COPY . .

# Étape 6 : exposer le port que ton app utilise
EXPOSE 3000

# Étape 7 : lancer le serveur
CMD ["node", "server.js"]
