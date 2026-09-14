# Use a supported Node.js LTS base image for the current app
FROM node:18-alpine

WORKDIR /app

# Copy package manifests first for better layer caching
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Expose the React development server port
EXPOSE 3000

CMD ["npm", "start"]
