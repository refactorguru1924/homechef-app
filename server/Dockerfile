# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for building)
RUN npm ci

# Copy source codedocker
COPY . .

# Build the TypeScript application
RUN npm run build

# Production dependencies stage
FROM node:22-alpine AS deps

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Production stage
FROM gcr.io/distroless/nodejs22-debian12:nonroot AS production

WORKDIR /app

# Copy production node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy package.json for runtime
COPY --from=builder /app/package.json ./

# Expose the port
EXPOSE 4000

# Start the application
CMD ["node", "dist/index.js"]