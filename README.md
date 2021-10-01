# node-dockerized
Repo used to build a Node JS services in cloud


# docker commands-to-run
# build image and tag
docker build . -t jsvegam/node-web-app:latest

# push image to dockerhub
docker push jsvegam/node-web-app:latest

# publish on port
docker container run --publish 80:80 jsvegam/node-web-app 

# detach 
docker container run --publish 80:80 --detach jsvegam/node-web-app

# logs
docker container logs <container-id>

# SSH into a container
docker exec -it condescending_neumann /bin/bash

