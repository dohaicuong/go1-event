FROM node:14-alpine AS dependencies
WORKDIR /project
COPY package.json yarn.lock ./
RUN yarn

FROM dependencies AS build
ENV REACT_APP_API_ENDPOINT=http://localhost:4000/graphql 
COPY tsconfig.json .
COPY src ./src
COPY public ./public
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /project/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]