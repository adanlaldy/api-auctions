# Utilise une image Node avec Debian compatible OpenSSL 3.x
FROM node:20

# Dossier de travail
WORKDIR /app

# Copie les fichiers de dépendances en premier (pour cache)
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie tout le reste (y compris prisma/schema.prisma et .env)
COPY . .

# Génère le client Prisma pour la bonne plateforme (Linux)
RUN npx prisma generate

# Expose le port de l’API
EXPOSE 3000

# Démarre l’application
CMD ["node", "server.js"]
