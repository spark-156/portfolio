run:
	docker-compose up -d && docker-compose logs -f

start: 
	docker-compose up -d 

log:
	make logs

logs: 
	docker-compose logs -f

down:
	docker-compose down
	
stop:
	docker-compose stop
	
buildProd:
	docker-compose -f docker-compose.prod.yml build

startProd:
	docker-compose -f docker-compose.prod.yml up

logsProd:
	docker-compose -f docker-compose.prod.yml logs -f

stopProd:
	docker-compose -f docker-compose.prod.yml stop
