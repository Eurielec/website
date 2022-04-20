# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# add app
COPY . .

# install app dependencies
RUN yarn install
RUN yarn build

# start
CMD ["yarn", "start"]
