const { LaunchRequestHandler } = require("./launch_request");

describe("whether a launch request can be handled", () => {
  it("should accept a request to handle a launch request", () => {
    expect(
      LaunchRequestHandler.canHandle({
        requestEnvelope: {
          request: {
            type: "LaunchRequest"
          }
        }
      })
    ).toBe(true);
  });

  it("should ignore a non-launch request", () => {
    expect(
      LaunchRequestHandler.canHandle({
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
    this.responseBuilder = jest.fn();
  });

  it("should speak a line about what you can currently sow", () => {
    LaunchRequestHandler.handle({}, this.responseBuilder);

    expect(this.responseBuilder).toHaveBeenCalled();
  });
});
