dev:
	@echo http://localhost:5000
	docker run -it --rm -v $$PWD/app:/usr/share/nginx/html -p 5000:80 ruphin/webserve
.PHONY: development

shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash
.PHONY: shell
