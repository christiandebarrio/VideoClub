VERSION=`date +'%d_%m_%y'`

docker:
	@docker build -t christiandebarrio/chrisrepo:videoclub_$(VERSION)_$(BUILD) .
	@docker push christiandebarrio/chrisrepo:videoclub_$(VERSION)_$(BUILD)
