
# README TODOLIST

Ce document fournit des instructions pour tester le projet en récupérant une image Docker et en utilisant un Docker Compose.

## Prérequis 

### LINUX

- Avoir Docker installé sur votre machine. Pour l'installation, suivez les instructions sur [Docker](https://docs.docker.com/get-docker/).
- Avoir Docker Compose installé. Pour l'installation, consultez [Docker Compose](https://docs.docker.com/compose/install/).

### WINDOWS

- Docker installé sur votre machine Windows.
- Accès à Docker Hub
- **- UN TERMINAL GITBASH pour executez toutes les commandes**

## GUIDE INSTALLATION & LANCEMENT PROJET

### 1: Récupérer le Repository GitHub

Clonez le repository GitHub contenant les fichiers nécessaires dans un dossier vide :

```bash
git clone https://github.com/fyleeds/ecommerce

```

### 2: Lancez Docker

#### SUR WINDOWS : 

Double-Clickez sur l'icone de Docker Desktop et attendez son chargement

#### SUR LINUX : 

```bash
sudo systemctl start docker
```

### 3: Lancez les conteneurs depuis un terminal

Restez sur le terminal et naviguez vers le dossier "docker" dans le projet : 
```bash
cd chemin/vers/dossier_de_clone/docker
```
Puis déployez le site avec la commande : 
```bash
docker compose up 
```

### 4: Accès services depuis votre navigateur

Après avoir exécuté la commande, Docker Compose va démarrer les services.

- Accédez à http://localhost:7000 pour voir l'application Todolist.

### 5: Quittez le projet

Dans le dossier docker executez : 
```bash
docker compose down 
```

### Conclusion

Vous avez maintenant déployé avec succès l'application Todolist.
