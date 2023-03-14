// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should have correct response for George", () => {
    const botReply1 = getBotReply("George");
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
  });
});
