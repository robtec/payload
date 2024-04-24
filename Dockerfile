FROM node:18 as base

FROM base as builder

WORKDIR /home/node

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

FROM base as runtime

ENV NODE_ENV=production

WORKDIR /home/node

COPY package*.json  ./

RUN yarn install --production

COPY --from=builder /home/node/dist ./dist

COPY --from=builder /home/node/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
