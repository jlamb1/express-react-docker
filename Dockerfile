FROM node:10

RUN mkdir -p /app

WORKDIR /app

COPY server/package*.json ./server/

RUN cd server && npm install --production

COPY client/package*.json ./client/

RUN cd client && npm install --production

COPY . .

RUN cd client && npm run build

CMD ["bash", "-c", "cd server && npm start"]