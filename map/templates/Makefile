deploy:
	s3cmd sync -P dist/* s3://graphics.texastribune.org/dailies/<%= _.slugify(appname) %>/

dry:
	s3cmd sync --dry-run dist/* s3://graphics.texastribune.org/dailies/<%= _.slugify(appname) %>/
