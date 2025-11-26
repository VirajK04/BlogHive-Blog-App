FROM node:20.19-slim

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8080

CMD ["npm", "run", "dev"]