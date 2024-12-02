FROM node:20-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.27.1-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ['nginx', '-g', 'daemon off']