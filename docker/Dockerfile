FROM node:14

WORKDIR /workspace

COPY package.json   .
COPY .env .

RUN npm install 
RUN mkdir src
COPY src ./src
