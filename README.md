# Slack Clone

Ce projet est un clone de Slack développé avec Next.js, React, et Tailwind CSS. Il utilise Auth.js pour l'authentification et Convex pour le backend en temps réel. L'objectif est de créer une version francophone de Slack avec des fonctionnalités clés similaires.

## Fonctionnalités Actuelles

- **Authentification** :

  - Connexion et inscription avec Google et GitHub
  - Authentification par email et mot de passe

- **Création d'espaces de travail** :
  - Les utilisateurs peuvent créer de nouveaux espaces de travail pour organiser leurs communications.

## Fonctionnalités à Implémenter

- 📡 **Communication en temps réel** : Intégration de la communication instantanée pour les messages.
- 👍 **Réactions aux messages** : Permettre aux utilisateurs de réagir aux messages avec des émojis.
- 🧵 **Système de fils de discussion/réponses** : Organisation des conversations en fils.
- ✏️ **Édition des messages** : Les utilisateurs peuvent modifier leurs messages après les avoir envoyés.
- 🗑️ **Suppression des messages** : Les utilisateurs peuvent supprimer leurs messages.
- 🔐 **Contrôle d'accès basé sur les rôles** : Gestion des permissions utilisateur.
- 🖼️ **Pièces jointes d'images** : Permettre l'envoi d'images dans les conversations.
- 🔒 **Authentification avec Next Auth v5** : Gestion avancée de l'authentification.
- 📺 **Création de canaux** : Les utilisateurs peuvent créer et gérer des canaux de discussion.
- ✉️ **Système d'invitation / Codes d'invitation** : Inviter des utilisateurs à rejoindre des espaces de travail.
- 💬 **Messages directs** : Messagerie privée entre utilisateurs.
- 👥 **Profils utilisateur** : Affichage et édition des informations de profil.
- ⚛️ **Framework Next.js 14** : Utilisation de la dernière version de Next.js pour le développement.
- 🚀 **Déploiement sur Vercel** : Hébergement et déploiement de l'application sur Vercel.
- 🎨 **Shadcn UI & Tailwind CSS** : Utilisation de Shadcn UI et Tailwind CSS pour le design.

## Technologies Utilisées

- **Framework** : [Next.js 14](https://nextjs.org/)
- **Bibliothèques UI** : [Shadcn UI](https://shadcn.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Authentification** : [Auth.js](https://authjs.dev/)
- **Backend** : [Convex](https://www.convex.dev/)
- **Gestion d'état** : [Jotai](https://jotai.org/)
- **Icônes** : [React Icons](https://react-icons.github.io/react-icons/), [Lucide React](https://lucide.dev/)

## Installation

1. Clonez le dépôt :
   ```bash
   git clone [https://github.com/Didi518/slack-clone]
   ```
2. Installez les dépendances :

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn add
   ```

3. Configurez les variables d'environnement :
   Créez un fichier .env.local à la racine du projet et ajoutez les variables nécessaires pour l'authentification et autres configurations.

4. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

   ou
   ```bash
   yarn dev
   ```


5. Ouvrez http://localhost:3000 dans votre navigateur pour voir l'application.
