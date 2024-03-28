##################################### BASE
ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine AS base
EXPOSE 3000
WORKDIR /usr/src/app

##################################### DEV
FROM base AS dev
ENV NODE_ENV development
RUN apk update && apk upgrade && apk add bash curl --no-cache
COPY package*.json .
RUN npm i
COPY . .
USER node
CMD npm run dev

##################################### PROD
FROM base AS prod
ENV NODE_ENV production
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
COPY . .
USER node
CMD npm run start