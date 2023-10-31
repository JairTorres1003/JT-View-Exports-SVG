FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .   

ENV MIGRATE_DATABASE_URL="postgres://therealdhruv:ktoJqvg .... "

ENV DATABASE_URL="prisma://aws-eu-central-1.prisma-data.com/?api_key=8TwUJdZ1X ... "

ENV AUTH0_SECRET='48b88d328d5f1cca56c79 ... '

ENV AUTH0_BASE_URL='http://localhost:3000/'

ENV AUTH0_ISSUER_BASE_URL="https://dev-rdm ... "
ENV AUTH0_CLIENT_ID='lPU8l ... '
ENV AUTH0_CLIENT_SECRET='lP697tV ... '

ENV AUTH0_HOOK_SECRET='11a252 ... '


EXPOSE 3000

RUN npm run build 

CMD ["npm" ,"run", "start"]