FROM node:latest             
#there is already a base image for node available online
WORKDIR /app
# Use this folder or create it if it does not exist
ADD package*.json ./
# adding this will ensure that this line and next two lines will use cache
RUN npm install -g npm
# updated npm to remove the warnings during npm install
RUN npm install
# install all the dependencies from package.json
ADD . .
# add everything inside this host directory in the app directory of docker
CMD node index.js
