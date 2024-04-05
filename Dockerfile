FROM node

WORKDIR /app/server

# COPY package*.json ./
COPY package*.json .env /app/server

RUN npm install 

COPY . .

EXPOSE 8001

CMD [ "npm", "start" ]
