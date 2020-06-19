FROM node:12-alpine AS build-stage
COPY package*.json /app/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --production --silent
RUN npm install -g react-scripts --silent
COPY . .
RUN npm run build

FROM nginx:1.19-alpine AS production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
