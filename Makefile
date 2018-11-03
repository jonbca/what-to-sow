BARE_ODIR=target
ODIR=$(shell pwd)/$(BARE_ODIR)
FUNCTION_NAME=$(shell jq .deploy_settings.default.resources.lambda[0].functionName < .ask/config)

.PHONY: clean test build

clean:
	rm -rf $(ODIR)

test: 
	bst test
	cd lambda/custom && npm test

$(ODIR):
	mkdir -p $(ODIR)

$(BARE_ODIR)/lambda/custom:
	mkdir -p $(BARE_ODIR)/lambda
	cp -R lambda/custom $(BARE_ODIR)/lambda
	cd $(BARE_ODIR)/lambda/custom ; npm install ; npm prune --production

$(BARE_ODIR)/lambda.zip: $(BARE_ODIR)/lambda/custom
	cd $(BARE_ODIR)/lambda/custom ; zip -r ../../lambda.zip .

deploy: $(BARE_ODIR)/lambda.zip
	aws lambda update-function-code --function-name $(FUNCTION_NAME) --zip-file fileb://$(BARE_ODIR)/lambda.zip