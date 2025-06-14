FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build Sanity studio
RUN npm run build

# Expose port
EXPOSE 3333

# Start Sanity studio
CMD ["npm", "run", "start"]