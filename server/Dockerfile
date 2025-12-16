FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the TypeScript application
RUN npm run build

# Expose the port
EXPOSE 8080

# Start the application
CMD ["node", "dist/index.js"]