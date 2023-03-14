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
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);
  });
  
  it("should have correct response for George, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: no
    const botReply2 = getBotReply('no');
    // Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?
    const expectedReply2 = 'A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?';
    expect(botReply2).toEqual(expectedReply2);

  });
});
