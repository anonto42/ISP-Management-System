FROM node:22.14.0-slim

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]