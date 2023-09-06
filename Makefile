.PHONY: run_backend
run_backend:
	cd ./backend & npm start

.PHONY: run_frontend
run_frontend:
	cd ./frontend &	npm start

run:
	make run_backend & make run_frontend