FROM node:10  

WORKDIR /usr/local/src

ENV ENDPOINT terraform-20220510065958830200000001.cjonqlniwrjn.ap-northeast-2.rds.amazonaws.com 

COPY ./ ./

RUN npm install

CMD ["node", "app.js"]
