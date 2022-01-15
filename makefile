start:
	docker-compose up -d

build:
	docker-compose build

down:
	docker-compose down

logs:
	docker-compose logs -f

prod-start:
	docker-compose -f docker-compose.prod.yml up -d

prod-down:
	docker-compose -f docker-compose.prod.yml down

prod-logs:
	docker-compose -f docker-compose.prod.yml logs -f

prod-build:
	docker-compose -f docker-compose.prod.yml build
