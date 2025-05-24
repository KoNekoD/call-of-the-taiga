init: down build up

build:
	docker compose build

up:
	docker compose up -d --remove-orphans
	docker compose exec call-of-the-taiga-app bin/console assets:install

down:
	docker compose down

down_force:
	docker compose down -v --rmi=all --remove-orphans

console:
	if ! docker compose ps | grep -q call-of-the-taiga; then make up; fi
	docker compose exec call-of-the-taiga-app sh

stop:
	docker compose stop
