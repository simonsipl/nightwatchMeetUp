#!/usr/bin/make -f

run:
	docker-compose run --rm nightwatch npm install
	docker-compose run --rm nightwatch npm run ci:test
	docker-compose down -v

