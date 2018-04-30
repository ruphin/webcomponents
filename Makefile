.PHONY: development
dev:
	@echo http://localhost:5000
	docker run -it --rm -v $$PWD/app:/usr/share/nginx/html -p 5000:80 ruphin/webserve

.PHONY: production
production:
	docker build -t ruphin/proxy .
	docker push ruphin/proxy

.PHONY: shell
shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash

