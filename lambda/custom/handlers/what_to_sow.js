const { buildResponse } = require("./response");

class WhatToSowHandler {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "LaunchRequest" ||
      (handlerInput.requestEnvelope.request.type === "IntentRequest" &&
        handlerInput.requestEnvelope.request.intent.name === "WhatToSowIntent")
    );
  }

  handle({ responseBuilder }, response = buildResponse(responseBuilder)) {
    console.log("handling launch request");
    return response("Here's what you can sow in November");
  }
}

module.exports = WhatToSowHandler;
