FROM node:10-slim

COPY server/package.json /app/
COPY server/src/* /app/

WORKDIR /app

RUN npm install
EXPOSE 3000

CMD ["node", "index"]
