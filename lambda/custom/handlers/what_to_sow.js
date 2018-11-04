const { buildResponse } = require("./response");

module.exports.WhatToSowIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "WhatToSowIntent"
    );
  },

  handle({ responseBuilder }, response = buildResponse(responseBuilder)) {
    return response("Here's what you can sow in November");
  }
};
