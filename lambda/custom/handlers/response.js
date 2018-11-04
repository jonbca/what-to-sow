module.exports = {
  buildResponse(responseBuilder) {
    return speechText =>
      responseBuilder
        .speak(speechText)
        .withSimpleCard("Seed Advice", speechText)
        .getResponse();
  }
};
