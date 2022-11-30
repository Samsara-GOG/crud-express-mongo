# crud-express-mongo
Petite application serveur de chat avec Node, Ejs, Express, et MongoDB

- **Node et Express** pour mettre en place le serveur et l'API.  
- **Ejs** pour le langage de template utilisé pour le rendu HTML à partir du JavaScript.  
- **MongoDB** pour l'enregistrement et la récupération des données du CRUD.

L'url de connexion à Mongodb est cachée grâce au module dotenv (dossier `secrets/.env` à la racine du projet) 

<p align="center">
    <img src="https://samsara.live/images/crud-express-mongo/interface.jpg" alt="Interface Chat Star Wars" height="250">
</p>

Fonctionnalités :  
  - ajout et affichage de message (champs: auteur de la citation, citation)
  - remplacer une citation de l'utilisateur dénommé "Yoda" ou "yoda" par une citation automatisée de "Dark Vador"
  - supprimer la plus ancienne citation de Dark Vador ajoutée
  - utilisation du Cloud Mongodb Atlas pour sauvegarder les messages des utilisateurs

