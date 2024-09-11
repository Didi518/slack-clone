# Clone de Slack

Une application inspirée de Slack, riche en fonctionnalités, construite avec des technologies web modernes pour offrir une communication et une collaboration en temps réel pour les équipes et les espaces de travail.

## 🚀 Démo en Ligne

Découvrez la version en ligne : [Clone de Slack](https://slack-clone-xi-hazel.vercel.app)

## 🛠️ Stack Technique

- **Framework** : [Next.js 14](https://nextjs.org/)
- **Composants UI** : [Shadcn UI](https://shadcn.dev/) & [Tailwind CSS](https://tailwindcss.com/)
- **Backend en Temps Réel** : [Convex](https://convex.dev/)
- **Authentification** : [Next Auth v5](https://next-auth.js.org/)
- **Éditeur de Texte Riche** : [Quill](https://quilljs.com/)
- **Gestion de l'État** : [Jotai](https://jotai.org/) & [nuqs](https://www.npmjs.com/package/nuqs)
- **Déploiement** : [Vercel](https://vercel.com/)

## ✨ Fonctionnalités

- **Communication en Temps Réel** : Discutez en temps réel avec des mises à jour via Convex.
- **Réactions aux Messages** : Ajoutez des emojis à n'importe quel message.
- **Système de Fils / Réponses** : Organisez les discussions avec des fils de discussion.
- **Modification des Messages** : Mettez à jour les messages envoyés pour corriger les erreurs.
- **Suppression des Messages** : Supprimez les messages au besoin.
- **Contrôle d'Accès Basé sur les Rôles** : Gérez les permissions des utilisateurs.
- **Pièces Jointes d'Images** : Partagez des images dans les messages.
- **Authentification** : Connexion sécurisée avec Next Auth v5.
- **Création de Canaux** : Créez et gérez des canaux au sein des espaces de travail.
- **Création d'Espaces de Travail** : Gérez différents espaces de travail pour différentes équipes.
- **Système d'Invitation / Codes d'Invitation** : Invitez de nouveaux membres par e-mail ou par codes d'invitation uniques.
- **Messages Directs** : Conversations en tête-à-tête entre utilisateurs.
- **Profils Utilisateurs** : Affichez les détails et préférences des utilisateurs.

## 📦 Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votrenomutilisateur/slack-clone.git
   cd slack-clone
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Créez un fichier .env à la racine du projet avec vos variables d'environnement :
   ```env
   NEXTAUTH_URL=
   NEXTAUTH_SECRET=
   CONVEX_URL=
   ```

# Ajoutez d'autres variables d'environnement nécessaires ici

4. Démarrez le serveur de développement :

```bash
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur pour voir l'application en action.

🚀 Déploiement
Le projet est déployé sur Vercel. Pour déployer votre propre version :

1. Forkez ce dépôt.
2. Connectez votre fork à Vercel.
3. Configurez les variables d'environnement sur Vercel.
4. Déployez !
