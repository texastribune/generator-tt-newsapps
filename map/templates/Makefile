deploy:
	aws s3 sync dist s3://graphics.texastribune.org/dailies/<%= _.slugify(appname) %> --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --delete
