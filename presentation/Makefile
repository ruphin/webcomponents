default:
	npm install && npm start
.PHONY: default

docker:
	docker run -it --rm -v $$PWD:/app -p 3000:3000 ruphin/webdev "npm start"
.PHONY: docker
