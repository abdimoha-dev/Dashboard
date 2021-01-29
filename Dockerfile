#base image
FROM node:latest

#create directory /usr/src/app
RUN mkdir /usr/src/app
#copy all files from current directory to docker
COPY . /usr/src/app
#set directory as workdirectory
WORKDIR /usr/src/app

#install and cache app dependenies
RUN yarn


CMD ["npm","start"]