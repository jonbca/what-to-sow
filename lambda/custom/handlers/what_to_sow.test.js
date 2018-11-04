const { WhatToSowIntentHandler } = require("./what_to_sow");

describe("Can handle the WhatToSowIntent", () => {
  it("should handle the WhatToSowIntent", () => {
    expect(
      WhatToSowIntentHandler.canHandle({
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

  it("should skip handling other intents", () => {
    expect(
      WhatToSowIntentHandler.canHandle({
        requestEnvelope: {
          request: {
            type: "IntentRequest",
            intent: {
              name: "SomeOtherIntent"
            }
          }
        }
      })
    ).toBe(false);
  });
});

describe("handling the intent to find out what to sow", () => {
  beforeEach(() => {
    this.responseBuilder = jest.fn();
  });

  it("should give me an idea of what to sow now", () => {
    WhatToSowIntentHandler.handle({}, this.responseBuilder);

    expect(this.responseBuilder).toHaveBeenCalled();
  });
});
