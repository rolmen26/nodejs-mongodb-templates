FROM node:20.11.1-alpine3.19

# Create app directory

WORKDIR /app

# Install app dependencies

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3005

CMD [ "npm", "run", "dev" ]