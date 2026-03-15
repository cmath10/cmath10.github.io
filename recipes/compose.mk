COMPOSE ?= docker compose
COMPOSE_SERVICE ?= site

.PHONY: up up.d down logs shell docker.build

up: ## Build and start the dev site service
	$(COMPOSE) up --build $(COMPOSE_SERVICE)

up.d: ## Build and start the dev site service in background
	$(COMPOSE) up --build -d $(COMPOSE_SERVICE)

down: ## Stop compose services
	$(COMPOSE) down

logs: ## Follow compose logs for the dev site service
	$(COMPOSE) logs -f $(COMPOSE_SERVICE)

shell: ## Open a shell in the running dev site service
	$(COMPOSE) exec $(COMPOSE_SERVICE) sh

docker.build: ## Rebuild compose images without starting services
	$(COMPOSE) build
