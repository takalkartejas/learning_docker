FROM node:latest             
#there is already a base image for node available online
WORKDIR /app
# this folder is created inside of the container
ADD . .
# add everything inside this host directory in the app directory of docker
RUN npm install -g npm
# updated npm to remove the warnings during npm install
RUN npm install
# install all the dependencies from package.json
CMD node index.js
