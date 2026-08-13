FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

# Ensure uploads directory exists
RUN mkdir -p public/uploads

EXPOSE 5000

CMD ["node", "./bin/www"]
