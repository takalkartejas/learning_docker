FROM node:latest             
#there is already a base image for node available online
WORKDIR /app
# this folder is created inside of the container
ADD . .
# add everything inside this host directory in the app directory of docker
RUN npm install
# install all the dependencies from package.json
CMD node index.js
