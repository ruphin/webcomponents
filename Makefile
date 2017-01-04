dev:
	@echo http://localhost:5000
	docker run -it --rm -v $$PWD/app:/usr/share/nginx/html -p 5000:80 ruphin/webserve
.PHONY: development

production:
	ssh -t s.ruph.in ./webcomponents.sh
.PHONY: production

shell:
	docker run -it --rm -v $$PWD:/app ruphin/webdev bash
.PHONY: shell
