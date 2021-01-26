FROM node:10.23.1-alpine3.10

WORKDIR /app
COPY server/package.json ./
RUN npm install

COPY . . 

EXPOSE 5000

CMD ["node", "server/server.js"]