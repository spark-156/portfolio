FROM node:16 as dev

ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production=false

COPY . .

CMD ["yarn", "run", "start"]

