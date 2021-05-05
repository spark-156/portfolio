FROM node:10

ENV PORT 3000

WORKDIR /usr/src/app/

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]