SHELL := bash

.DEFAULT_GOAL := help

include recipes/compose.mk
include recipes/playwright.mk

.PHONY: help

help: ## Show available make targets
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*## / { printf "  %-32s %s\n", $$1, $$2 }' $(MAKEFILE_LIST)
