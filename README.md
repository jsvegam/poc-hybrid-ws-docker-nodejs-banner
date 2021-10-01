# node-dockerized
Repo used to build a Node JS services in cloud

# GIT Repository

1 - Clone the repo 
https://github.com/jsvegam/poc-hybrid-ws-docker-nodejs-banner.git

# Creación de imagen en docker-hub
1 - crear repo en docker-hub, para este caso se construyo el siguiente:
    - jsvegam/poc-hybrid-docker-banner

2- in the folder of the GIT repo execute this commands
    - docker build . -t jsvegam/poc-hybrid-docker-banner:latest


# push image to dockerhub
docker push jsvegam/poc-hybrid-docker-banner:latest

# publish on port
docker container run --publish 80:80 jsvegam/poc-hybrid-docker-banner:latest

# detach 
docker container run --publish 80:80 --detach jsvegam/poc-hybrid-docker-banner:latest

# logs
docker container logs <container-id>

# SSH into a container
docker exec -it condescending_neumann /bin/bash

