FROM node:10-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]