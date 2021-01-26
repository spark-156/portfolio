FROM node:10

WORKDIR /usr/src/app

COPY server/package.json ./

RUN npm install

COPY . . 

EXPOSE 5000

CMD ["node", "server/server.js"]