# Image
FROM node:18-alpine

# Folder work
WORKDIR /app

COPY package.json /app

# Install dependencies
RUN npm install

# Copy all files to folder app in image
COPY . /app

# Open port to local server
EXPOSE 8001

# Run to container
CMD ["node", "server.js"] 