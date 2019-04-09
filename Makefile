DOCKER_USERNAME='christiandebarrio'
DOCKER_REPO='chrisrepo'
PROJECT_NAME='videoclub'
VERSION=`date +'%Y_%m_%d'`

docker:
	@docker build -t $(DOCKER_USERNAME)/$(DOCKER_REPO):$(PROJECT_NAME)_$(BUILD)_$(VERSION) -t $(DOCKER_USERNAME)/$(DOCKER_REPO):$(PROJECT_NAME)_$(BUILD)_latest .
	@docker push $(DOCKER_USERNAME)/$(DOCKER_REPO):$(PROJECT_NAME)_$(BUILD)_$(VERSION)
	@docker push $(DOCKER_USERNAME)/$(DOCKER_REPO):$(PROJECT_NAME)_$(BUILD)_latest
