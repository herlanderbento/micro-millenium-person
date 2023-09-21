FROM node:18-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npx prisma migrate dev --name create-schema

CMD ["npm", "run", "dev"]
