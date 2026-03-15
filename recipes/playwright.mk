PLAYWRIGHT_SERVICE ?= playwright
PLAYWRIGHT_BROWSER ?= chromium
PLAYWRIGHT_REPORTER ?= list
PLAYWRIGHT_ARTIFACTS_DIR ?= artifacts/playwright
# By default Playwright targets the running compose/Traefik-served dev site.
# Override when you want to point tests or screenshots at another environment.
PLAYWRIGHT_BASE_URL ?= http://cmath10.test

PLAYWRIGHT_SHOT_DIR ?= $(PLAYWRIGHT_ARTIFACTS_DIR)/shots
PLAYWRIGHT_SHOT_URL ?= /
PLAYWRIGHT_SHOT_NAME ?= home
PLAYWRIGHT_SHOT_FILE ?= $(PLAYWRIGHT_SHOT_DIR)/$(PLAYWRIGHT_SHOT_NAME).png
PLAYWRIGHT_SHOT_WIDTH ?= 1440
PLAYWRIGHT_SHOT_HEIGHT ?= 1024
PLAYWRIGHT_SHOT_THEME ?= light
PLAYWRIGHT_SHOT_FULL_PAGE ?= 1
PLAYWRIGHT_SHOT_WAIT_UNTIL ?= networkidle
PLAYWRIGHT_GEOM_DIR ?= $(PLAYWRIGHT_ARTIFACTS_DIR)/geom
PLAYWRIGHT_GEOM_URL ?= /
PLAYWRIGHT_GEOM_FILE ?= $(PLAYWRIGHT_GEOM_DIR)/geometry.json
PLAYWRIGHT_GEOM_WIDTH ?= 1440
PLAYWRIGHT_GEOM_HEIGHT ?= 1024
PLAYWRIGHT_GEOM_THEME ?= light
PLAYWRIGHT_GEOM_WAIT_UNTIL ?= networkidle
PLAYWRIGHT_GEOM_SELECTORS ?= body
PLAYWRIGHT_GEOM_RELATIONS ?=
PLAYWRIGHT_GEOM_OVERLAY_FILE ?=
PLAYWRIGHT_GEOM_SCENARIO_FILE ?=

PLAYWRIGHT_SHOT_CONTAINER_FILE ?= /artifacts/$(patsubst $(PLAYWRIGHT_ARTIFACTS_DIR)/%,%,$(PLAYWRIGHT_SHOT_FILE))
PLAYWRIGHT_GEOM_CONTAINER_FILE ?= /artifacts/$(patsubst $(PLAYWRIGHT_ARTIFACTS_DIR)/%,%,$(PLAYWRIGHT_GEOM_FILE))
PLAYWRIGHT_GEOM_OVERLAY_CONTAINER_FILE ?= $(if $(PLAYWRIGHT_GEOM_OVERLAY_FILE),/artifacts/$(patsubst $(PLAYWRIGHT_ARTIFACTS_DIR)/%,%,$(PLAYWRIGHT_GEOM_OVERLAY_FILE)),)

.PHONY: test shot shot.home shot.home.dark shot.projects \
	shot.mobile.home geom

test: ## Run Playwright tests in Docker against the compose/Traefik site by default
	$(COMPOSE) run --rm \
		-e PLAYWRIGHT_BASE_URL="$(PLAYWRIGHT_BASE_URL)" \
		$(PLAYWRIGHT_SERVICE) \
		pnpm exec playwright test --project="$(PLAYWRIGHT_BROWSER)"

shot: ## Capture a screenshot in Docker against the compose/Traefik site by default
	mkdir -p "$(dir $(PLAYWRIGHT_SHOT_FILE))"
	$(COMPOSE) run --rm \
		-e PLAYWRIGHT_BASE_URL="$(PLAYWRIGHT_BASE_URL)" \
		-e PLAYWRIGHT_SHOT_URL="$(PLAYWRIGHT_SHOT_URL)" \
		-e PLAYWRIGHT_SHOT_FILE="$(PLAYWRIGHT_SHOT_CONTAINER_FILE)" \
		-e PLAYWRIGHT_SHOT_WIDTH="$(PLAYWRIGHT_SHOT_WIDTH)" \
		-e PLAYWRIGHT_SHOT_HEIGHT="$(PLAYWRIGHT_SHOT_HEIGHT)" \
		-e PLAYWRIGHT_SHOT_THEME="$(PLAYWRIGHT_SHOT_THEME)" \
		-e PLAYWRIGHT_SHOT_FULL_PAGE="$(PLAYWRIGHT_SHOT_FULL_PAGE)" \
		-e PLAYWRIGHT_SHOT_WAIT_UNTIL="$(PLAYWRIGHT_SHOT_WAIT_UNTIL)" \
		$(PLAYWRIGHT_SERVICE) \
		pnpm exec playwright test tests/screenshot.spec.ts --project="$(PLAYWRIGHT_BROWSER)" --workers=1 --reporter="$(PLAYWRIGHT_REPORTER)"

shot.home: PLAYWRIGHT_SHOT_URL := /
shot.home: PLAYWRIGHT_SHOT_FILE := $(PLAYWRIGHT_SHOT_DIR)/home-light.png
shot.home: shot ## Capture homepage desktop screenshot

shot.home.dark: PLAYWRIGHT_SHOT_URL := /
shot.home.dark: PLAYWRIGHT_SHOT_FILE := $(PLAYWRIGHT_SHOT_DIR)/home-dark.png
shot.home.dark: PLAYWRIGHT_SHOT_THEME := dark
shot.home.dark: shot ## Capture homepage desktop screenshot in dark mode

shot.projects: PLAYWRIGHT_SHOT_URL := /projects
shot.projects: PLAYWRIGHT_SHOT_FILE := $(PLAYWRIGHT_SHOT_DIR)/projects-light.png
shot.projects: shot ## Capture projects page screenshot

shot.mobile.home: PLAYWRIGHT_SHOT_URL := /
shot.mobile.home: PLAYWRIGHT_SHOT_FILE := $(PLAYWRIGHT_SHOT_DIR)/home-mobile.png
shot.mobile.home: PLAYWRIGHT_SHOT_WIDTH := 390
shot.mobile.home: PLAYWRIGHT_SHOT_HEIGHT := 844
shot.mobile.home: shot ## Capture homepage mobile screenshot

geom: ## Capture geometry report; see recipes/geom/README.md and try PLAYWRIGHT_GEOM_SCENARIO_FILE=recipes/geom/timeline.env
	@set -a; \
	if [ -n "$(PLAYWRIGHT_GEOM_SCENARIO_FILE)" ]; then . "$(PLAYWRIGHT_GEOM_SCENARIO_FILE)"; fi; \
	set +a; \
	GEOM_FILE="$${PLAYWRIGHT_GEOM_FILE:-$(PLAYWRIGHT_GEOM_FILE)}"; \
	mkdir -p "$$(dirname "$$GEOM_FILE")"; \
	if [ -n "$${PLAYWRIGHT_GEOM_OVERLAY_FILE:-$(PLAYWRIGHT_GEOM_OVERLAY_FILE)}" ]; then mkdir -p "$$(dirname "$${PLAYWRIGHT_GEOM_OVERLAY_FILE:-$(PLAYWRIGHT_GEOM_OVERLAY_FILE)}")"; fi; \
	$(COMPOSE) run --rm \
		-e PLAYWRIGHT_BASE_URL="$${PLAYWRIGHT_BASE_URL:-$(PLAYWRIGHT_BASE_URL)}" \
		-e PLAYWRIGHT_GEOM_URL="$${PLAYWRIGHT_GEOM_URL:-$(PLAYWRIGHT_GEOM_URL)}" \
		-e PLAYWRIGHT_GEOM_FILE="$${PLAYWRIGHT_GEOM_FILE:-$(PLAYWRIGHT_GEOM_CONTAINER_FILE)}" \
		-e PLAYWRIGHT_GEOM_WIDTH="$${PLAYWRIGHT_GEOM_WIDTH:-$(PLAYWRIGHT_GEOM_WIDTH)}" \
		-e PLAYWRIGHT_GEOM_HEIGHT="$${PLAYWRIGHT_GEOM_HEIGHT:-$(PLAYWRIGHT_GEOM_HEIGHT)}" \
		-e PLAYWRIGHT_GEOM_THEME="$${PLAYWRIGHT_GEOM_THEME:-$(PLAYWRIGHT_GEOM_THEME)}" \
		-e PLAYWRIGHT_GEOM_WAIT_UNTIL="$${PLAYWRIGHT_GEOM_WAIT_UNTIL:-$(PLAYWRIGHT_GEOM_WAIT_UNTIL)}" \
		-e PLAYWRIGHT_GEOM_SELECTORS="$${PLAYWRIGHT_GEOM_SELECTORS:-$(PLAYWRIGHT_GEOM_SELECTORS)}" \
		-e PLAYWRIGHT_GEOM_RELATIONS="$${PLAYWRIGHT_GEOM_RELATIONS:-$(PLAYWRIGHT_GEOM_RELATIONS)}" \
		-e PLAYWRIGHT_GEOM_OVERLAY_FILE="$${PLAYWRIGHT_GEOM_OVERLAY_FILE:-$(PLAYWRIGHT_GEOM_OVERLAY_CONTAINER_FILE)}" \
		$(PLAYWRIGHT_SERVICE) \
		pnpm exec playwright test tests/geometry.spec.ts --project="$(PLAYWRIGHT_BROWSER)" --workers=1 --reporter="$(PLAYWRIGHT_REPORTER)"
