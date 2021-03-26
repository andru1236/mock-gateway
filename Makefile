# Docker
IMAGE_NAME?=mock-gql
CONTAINER_NAME?=mock-gql-container


start:
	docker-compose -f docker/docker-compose.yml up 
	# docker run --rm -v ${PWD}:/workspace ${IMAGE_NAME}
	
build:
	docker-compose -f docker/docker-compose.yml build --no-cache
	# docker build --no-cache -t ${IMAGE_NAME} -f docker/Dockerfile .

clean:
	docker rm ${CONTAINER_NAME}
	docker rmi ${IMAGE_NAME}

shell:
	docker exec -it $(CONTAINER_NAME) bash
	#docker run --rm -it -v ${PWD}:/workspace ${IMAGE_NAME} bash

docker-start:
	GQL_PORT=${GQL_PORT} \
	BASE_BACKEND_URL=${BASE_BACKEND_URL} \
	MONGO_URL=${MONGO_URL} \
	MONGO_DB=${MONGO_DB} \
	npm start

.PHONY: start build clean