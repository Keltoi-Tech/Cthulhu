FROM node:latest
RUN npm install --global http-server
EXPOSE 8000-8100
WORKDIR /usr/cthulhu
VOLUME /usr/cthulhu
ENTRYPOINT npm start --port 8000



