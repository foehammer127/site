_default:
	@just --list

tailwind-watch:
	tailwindcss -i blog/assets/css/style.css -o blog/assets/css/index.css -c blog/tailwind.config.js --watch --jit
