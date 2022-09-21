FROM node:16.17.0

RUN mkdir -p /app 

WORKDIR /app 

COPY . . 

RUN npm install 

EXPOSE 4200

CMD ["npm", "start"]

