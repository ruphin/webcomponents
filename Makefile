default:
	docker run -it --rm -v $$PWD:/app -p 3000:3000 ruphin/webdev "npm start"
.PHONY: default
