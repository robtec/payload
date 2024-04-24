FROM node:18

WORKDIR /home/node

RUN npm install -g pnpm

COPY package*.json pnpm-*.yaml ./

RUN pnpm install --frozen-lockfile

RUN yarn install

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/server.js"]
