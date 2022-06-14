FROM node:lts-alpine AS builder

COPY ./dist/  /node/

WORKDIR /node

FROM nginx:stable-alpine
COPY --from=builder /node/dist /usr/share/nginx/html
EXPOSE 8080