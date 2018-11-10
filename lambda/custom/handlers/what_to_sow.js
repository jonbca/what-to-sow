const { buildResponse } = require("./response");
const { format } = require("./formatter");

class WhatToSowHandler {
  constructor(repository, month) {
    this.repository = repository;
    this.month = month;
  }

  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "LaunchRequest" ||
      (handlerInput.requestEnvelope.request.type === "IntentRequest" &&
        handlerInput.requestEnvelope.request.intent.name === "WhatToSowIntent")
    );
  }

  handle({ responseBuilder }, response = buildResponse(responseBuilder)) {
    console.log("handling launch request");
    const whatToSow = this.repository.getSeedsFor(this.month);

    return response(
      `Here's what you can sow in ${this.month}: ${format(whatToSow)}.`
    );
  }
}

module.exports = WhatToSowHandler;
