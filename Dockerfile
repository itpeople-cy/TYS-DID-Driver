# NODE Version
FROM node:14-alpine

# WORKDIR specifies the application directory
WORKDIR /app
 
# Copying package.json file to the app directory
COPY package.json /app
 
# Installing npm for DOCKER
RUN npm install
 
# Copying rest of the application to app directory
COPY . /app

# Exposing the port
EXPOSE 8080

# Starting the application using npm start
CMD ["node","app.js"]
