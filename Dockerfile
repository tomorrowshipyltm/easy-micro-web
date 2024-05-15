FROM node:14-alpine

# Install nvm
RUN apk update && apk add --no-cache curl bash
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Set the desired Node.js version
ENV NODE_VERSION=12.14.0

# Install the desired Node.js version using nvm
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSION"

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . /app

RUN npm install node-sass

RUN SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Start the application
#CMD ["npm", "start"]
CMD ["sleep", "3600"]
