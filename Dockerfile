FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install -g wrangler

EXPOSE 8788

CMD ["npx","wrangler","pages","dev",".","--ip","0.0.0.0","--port","8788"]