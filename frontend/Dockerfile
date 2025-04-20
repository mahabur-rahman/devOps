# Use the official Node.js image with Alpine as a base
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React application
RUN npm run build

# Expose the port the app will run on
EXPOSE 5173

# Serve the build folder using a simple HTTP server
CMD ["npx", "serve", "build"]
