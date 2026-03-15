FROM node:24

WORKDIR /app

ENV CI=1
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm exec playwright install --with-deps chromium
RUN mkdir -p /ms-playwright && chown -R node:node /app /ms-playwright

USER node

CMD ["pnpm", "test:e2e"]
