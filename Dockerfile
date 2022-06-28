FROM node:16

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/uploads
RUN mkdir -p /usr/src/app/log
RUN mkdir -p /usr/src/app/database
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/

EXPOSE 80

VOLUME [ "/database", "/uploads", "/log" ]

CMD [ "npm", "start" ]