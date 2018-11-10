const WhatToSowHandler = require("./what_to_sow");

const repository = {
  getSeedsFor() {
    return ["peas", "broad beans"];
  }
};

describe("whether a launch request can be handled", () => {
  beforeEach(() => {
    this.whatToSowHandler = new WhatToSowHandler();
  });

  it("should accept a request to handle a launch request", () => {
    expect(
      this.whatToSowHandler.canHandle({
        requestEnvelope: {
          request: {
            type: "LaunchRequest"
          }
        }
      })
    ).toBe(true);
  });

  it("should handle the WhatToSowIntent", () => {
    expect(
      this.whatToSowHandler.canHandle({
        requestEnvelope: {
          request: {
            type: "IntentRequest",
            intent: {
              name: "WhatToSowIntent"
            }
          }
        }
      })
    ).toBe(true);
  });

  it("should ignore a non-launch request", () => {
    expect(
      this.whatToSowHandler.canHandle({
        requestEnvelope: {
          request: {
            type: "SomethingElseRequest"
          }
        }
      })
    ).toBe(false);
  });
});

describe("handling a launch request", () => {
  beforeEach(() => {
    this.whatToSowHandler = new WhatToSowHandler(repository, "november");
    this.responseBuilder = jest.fn();
  });

  it("should speak a line about what you can currently sow", () => {
    this.whatToSowHandler.handle({}, this.responseBuilder);

    expect(this.responseBuilder).toHaveBeenCalled();
  });
});

describe("Handling intents with a month", () => {
  beforeEach(() => {
    this.whatToSowHandler = new WhatToSowHandler(repository, "november");
  });

  it("should fetch the items for november", () => {
    const responseBuilder = jest.fn();
    this.whatToSowHandler.handle({}, responseBuilder);

    expect(responseBuilder).toHaveBeenCalledWith(
      "Here's what you can sow in november: peas and broad beans."
    );
  });
});
