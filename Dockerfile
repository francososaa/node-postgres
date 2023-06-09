#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /app

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install 

#Copy the project
COPY ./ ./

#Default command
CMD ["npm","start"]