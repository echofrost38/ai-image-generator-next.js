dev:
	docker compose -f ./docker-compose.yml up --build

devd:
	docker compose -f ./docker-compose.yml up --build -d

devup:
	docker compose -f ./docker-compose.yml up 

devupd:
	docker compose -f ./docker-compose.yml up  -d

devmac:
	docker compose -f ./docker-compose.mac.yml up --build

devmacup:
	docker compose -f ./docker-compose.mac.yml up

devmacupd:
	docker compose -f ./docker-compose.mac.yml up -d

devdmac:
	docker compose -f ./docker-compose.mac.yml up --build -d

devh:
	docker compose -f ./docker-compose.host.yml up --build -d

devhd:
	docker compose -f ./docker-compose.host.yml up --build -d

teardown:
	docker compose -f ./docker-compose.yml down

teardownh:
	docker compose -f ./docker-compose.host.yml down

migrate:
	atlas migrate diff --env gorm

.PHONY: *
