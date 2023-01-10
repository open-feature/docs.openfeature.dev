
VOLUMES := -v $(CURDIR):/docusaurus -w /docusaurus
IMAGE := node:19-bullseye
DOCKER := docker run --rm $(VOLUMES) -p 3000:3000 $(IMAGE)

.PHONY: all build serve clean test lint

all: yarn.lock

yarn.lock: package.json node_modules
	$(MAKE clean)
	$(DOCKER) yarn install --immutable

node_modules:
	mkdir -p $@

build: yarn.lock
	$(DOCKER) yarn build

version: yarn.lock
	$(DOCKER) npx docusaurus --version

serve: yarn.lock
	$(DOCKER) yarn run serve

start: yarn.lock
	$(DOCKER) yarn run start -- --poll --host 0.0.0.0

lint: yarn.lock
	$(DOCKER) yarn run lint

clean:
	rm -rf ./node_modules

test: build
	docker run -v $(CURDIR):/test --rm wjdp/htmltest -s -c .htmltest.yml build
