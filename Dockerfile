FROM node:alpine
RUN mkdir -p /usr/src/app
ENV PORT 3000
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install && npm -g i next-sitemap && npm i sharp@0.32 --ignore-engines && npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]