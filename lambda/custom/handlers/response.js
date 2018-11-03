module.exports.buildResponse = responseBuilder => speechText => {
  return responseBuilder
    .speak(speechText)
    .withSimpleCard("What To Sow", speechText)
    .getResponse();
};
