FROM node:8.15-alpine
RUN apk --no-cache add git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 6000
CMD [ "npm", "start" ]
