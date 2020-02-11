.PHONY: default test dist install dev
default: help

check: ## applies a code pylint with autopep8 reformating
	@black .
	@pylint --exit-zero --rcfile=setup.cfg --unsafe-load-any-extension=y src

test: check ## launch package tests
	@pytest

dist: test ## run tests and build a package distribution
	@python setup.py sdist bdist_wheel

install: ## install package
	@pip install .

dev: ## install package in development mode
	@pip install --upgrade -e .[testing]

upgrade-classifier-ui: ## updates the biome-classifier-ui interface artifact
	@curl \
    --output src/biome/text/commands/ui/classifier.tar.gz \
    -L \
    --header "PRIVATE-TOKEN: ${GITLAB_TOKEN}" \
    ${GITLAB_BIOME_CLASSIFIER_UI_ARTIFACT_URL}

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
