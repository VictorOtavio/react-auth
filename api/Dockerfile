FROM node:12-alpine
COPY package*.json /app/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --production --silent
COPY . .
CMD ["npm", "run", "serve"]
