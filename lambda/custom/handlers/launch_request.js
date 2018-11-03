const { buildResponse } = require("./response");

module.exports.LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },

  handle({ responseBuilder }, response = buildResponse(responseBuilder)) {
    return response("Here's what you can sow in November");
  }
};
