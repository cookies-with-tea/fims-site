FROM node:20-alpine as build
WORKDIR /app
ADD package*.json .
RUN mkdir node_modules
RUN npm ci --no-audit
ADD . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

