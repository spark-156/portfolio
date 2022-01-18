# development stage
FROM node:lts-alpine AS dev
WORKDIR /app
COPY package.json .
COPY yarn.lock . 
RUN yarn install
EXPOSE 8080
COPY vue.config.js .
CMD [ "yarn", "serve" ]

# build stage
FROM node:lts as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
COPY vue.config.js .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]