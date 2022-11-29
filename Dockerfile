FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
CMD [ "node", "index.mjs" ]