start:
	docker build -t jlamb-express . && docker run -d -p 8080:8080 jlamb-express