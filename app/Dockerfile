FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY . .
RUN chown -R appuser:appgroup /app
USER appuser
EXPOSE 3000

CMD ["npm", "start"]