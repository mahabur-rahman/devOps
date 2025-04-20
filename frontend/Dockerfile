# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend (this will generate a `dist/` folder)
RUN npm run build

# Install a simple static server
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Run the built frontend with a static file server
CMD ["serve", "-s", "dist", "-l", "3000"]
