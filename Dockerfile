FROM nikolaik/python-nodejs:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "./build/index.js"]