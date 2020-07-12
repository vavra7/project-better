dev:
	npx concurrently \
		"cd packages/common && yarn dev" \
		"cd packages/server && yarn dev"