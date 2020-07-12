dev:
	docker-compose -f docker-compose.dev.yaml up -d --force-recreate
	npx concurrently \
		"cd packages/common && yarn dev" \
		"cd packages/server && yarn dev"

build:
	cd packages/common && yarn build
	cd packages/server && yarn build