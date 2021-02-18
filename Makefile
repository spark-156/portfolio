start: 
	docker-compose -f docker-compose.dev.yml up -d 

log:
	make logs

logs: 
	docker-compose -f docker-compose.dev.yml logs -f

stop:
	docker-compose -f docker-compose.dev.yml stop

build: 
	docker-compose -f docker-compose.dev.yml build
	