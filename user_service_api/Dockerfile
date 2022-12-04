FROM node:19.2.0-alpine            
#there is already a base image for node available online
# we changed to 19.2.0-alpine in learning tags
WORKDIR /app
# Use this folder or create it if it does not exist
ADD package*.json ./
# We could have done Add . . here as we need the package .json for next two lines
#adding this will ensure that this line and next two lines will use cache
RUN npm install -g npm
# updated npm to remove the warnings during npm install
RUN npm install
# install all the dependencies from package.json
ADD . .
# add everything inside this host directory in the app directory of docker
CMD node index.js
