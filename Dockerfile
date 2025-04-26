# Stage 1: Install dependencies
FROM node:18-alpine AS deps
WORKDIR /usr/src/app
COPY package.json yarn.lock* ./
RUN yarn install --production --frozen-lockfile

# Stage 2: Copy code & run
FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
EXPOSE 4000
CMD ["node", "src/index.js"]
