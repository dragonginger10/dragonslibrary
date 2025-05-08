# ---------- Build Stage ----------
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create app directory
WORKDIR /app

# Copy package files and install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the code and build
COPY . .
RUN pnpm build

# ---------- Serve Stage ----------
FROM caddy:alpine

# Copy built site from builder
COPY --from=builder /app/dist /usr/share/caddy

# Optional: Custom Caddyfile
# COPY Caddyfile /etc/caddy/Caddyfile

