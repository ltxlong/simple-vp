FROM node:lts-alpine

WORKDIR /app

COPY . .

ENV NPM_CONFIG_CACHE=/tmp/npm_cache

RUN npm install && \
    npm cache clean --force && \
    rm -rf /tmp/npm_cache && \
    rm -rf /root/.npm/_logs && \
    chown -R node:node /app

EXPOSE 5173

CMD ["npm", "run", "dev:local"]