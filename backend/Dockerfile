 
FROM node:14-alpine AS dependencies
WORKDIR /project
COPY package.json yarn.lock ./
RUN yarn -s install

FROM dependencies AS build
COPY tsconfig.json .
COPY prisma ./prisma
COPY api ./api
RUN yarn -s build

FROM node:14-alpine AS release
COPY --from=build /project/.nexus/build .

RUN yarn global add @prisma/cli
COPY prisma ./prisma
COPY scripts ./scripts
RUN chmod +x ./scripts/start.sh

ENTRYPOINT ./scripts/start.sh