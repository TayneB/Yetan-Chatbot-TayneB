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

  it("should have correct response for George, no, no", () => {
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

    // Input: no
    const botReply3 = getBotReply('no');
    // Output: Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.
    const expectedReply3 = `Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.`;
    expect(botReply3).toEqual(expectedReply3);
    

  });

  it("should have correct response for George, no, no, timeloop", () => {
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

    // Input: no
    const botReply3 = getBotReply('no');
    // Output: Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.
    const expectedReply3 = `Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.`;
    expect(botReply3).toEqual(expectedReply3);
    
    // Input: timeloop
    const botReply4 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?
    const expectedReply4 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should have correct response for George, no, no, timeloop, Still George", () => {
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

    // Input: no
    const botReply3 = getBotReply('no');
    // Output: Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.
    const expectedReply3 = `Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.`;
    expect(botReply3).toEqual(expectedReply3);
    
    // Input: timeloop
    const botReply4 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?
    const expectedReply4 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply4).toEqual(expectedReply4);

    // Input: Still George
    const botReply5 = getBotReply('Still George');
    // Output: Well met, Still George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply5 = `Well met, Still George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?`;
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should have correct response for George, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

  });

  it("should have correct response for George, yes, magic", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

  });

  it("should have correct response for George, yes, steel", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should have correct response for George, yes, steel, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: yes
    const botReply4 = getBotReply('yes');
    // Output: Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.
    const expectedReply4 = 'Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.';
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should have correct response for George, yes, magic, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: yes
    const botReply4 = getBotReply('yes');
    // Output: I suggest druid, they are masters of the natural world, they wield powerful magic and can shape-shift into mighty beasts..
    const expectedReply4 = 'I suggest druid, they are masters of the natural world, they wield powerful magic and can shape-shift into mighty beasts.';
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should have correct response for George, yes, magic, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should have correct response for George, yes, magic, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: yes
    const botReply5 = getBotReply('yes');
    // Output: The bard may be to your liking. They strum the grandest tunes enthralling the world to their charismatic whim.
    const expectedReply5 = 'The bard may be to your liking. They strum the grandest tunes enthralling the world to their charismatic whim.';
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should have correct response for George, yes, steel, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: yes
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should have correct response for George, yes, magic, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should have correct response for George, yes, steel, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: yes
    const botReply5 = getBotReply('yes');
    // Output: Artificers use their brains to solve problems with arcane and steel fusions. (Also explosions). 
    const expectedReply5 = 'Artificers use their brains to solve problems with arcane and steel fusions. (Also explosions). ';
    expect(botReply5).toEqual(expectedReply5);
  });

  // test 16
  it("should have correct response for George, yes, steel, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);
  });

  it("should have correct response for George, yes, magic, no, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: yes
    const botReply6 = getBotReply('yes');
    // Output: The cleric blasts foes with holy light and closes terrible wounds with a touch.
    const expectedReply6 = 'The cleric blasts foes with holy light and closes terrible wounds with a touch.';
    expect(botReply6).toEqual(expectedReply6);
  });

  // test 18
  it("should have correct response for George, yes, magic, no, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?.
    const expectedReply6 = 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
    expect(botReply6).toEqual(expectedReply6);
  });

  // test 19
  it("should have correct response for George, yes, steel, no, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: yes
    const botReply6 = getBotReply('yes');
    // Output: The barbarian is unmatched in how durable they are. Prone to surviving meteors being dropped on their heads, which is then followed by them picking the meteor up and beating whatever threw it at them into a bloody mess.
    const expectedReply6 = 'The barbarian is unmatched in how durable they are. Prone to surviving meteors being dropped on their heads, which is then followed by them picking the meteor up and beating whatever threw it at them into a bloody mess.';
    expect(botReply6).toEqual(expectedReply6);
  });

  // test 20
  it("should have correct response for George, yes, steel, no, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);
  });

  // test 21
  it("should have correct response for George, yes, magic, no, no, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?.
    const expectedReply6 = 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: yes
    const botReply7 = getBotReply('yes');
    // Output: Warlocks are eldritch masters who make pacts with otherworldly beings for power. I do know a devil who might be interested in your soul..
    const expectedReply7 = 'Warlocks are eldritch masters who make pacts with otherworldly beings for power. I do know a devil who might be interested in your soul.';
    expect(botReply7).toEqual(expectedReply7);
  });

  // test 22
  it("should have correct response for George, yes, magic, no, no, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?.
    const expectedReply6 = 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.
    const expectedReply7 = 'Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.';
    expect(botReply7).toEqual(expectedReply7);
  });

  // test 23
  it("should have correct response for George, yes, steel, no, no, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: yes
    const botReply7 = getBotReply('yes');
    // Output: Monks use the serenity and calm to dish out lightning fast whoopings with just their fists. Eventually being able to disrupt their enemies chi, stunning them into easy targets.
    const expectedReply7 = 'Monks use the serenity and calm to dish out lightning fast whoopings with just their fists. Eventually being able to disrupt their enemies chi, stunning them into easy targets.';
    expect(botReply7).toEqual(expectedReply7);
  });

  // test 24
  it("should have correct response for George, yes, steel, no, no, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Does divine purpose fill your heart?.
    const expectedReply7 = 'Does divine purpose fill your heart?';
    expect(botReply7).toEqual(expectedReply7);
  });

  // test 25
  it("should have correct response for George, yes, magic, no, no, no, no, blast", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?.
    const expectedReply6 = 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.
    const expectedReply7 = 'Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.';
    expect(botReply7).toEqual(expectedReply7);

    // Input: blast
    const botReply8 = getBotReply('blast');
    // Output: Sorceror is a choice. You get the cool part of wizard (explosions) without all that pesky study. Cheater. No, I am NOT salty.
    const expectedReply8 = 'Sorceror is a choice. You get the cool part of wizard (explosions) without all that pesky study. Cheater. No, I am NOT salty.';
    expect(botReply8).toEqual(expectedReply8);
  });

  // test 26
  it("should have correct response for George, yes, magic, no, no, no, no, outsmart", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: magic
    const botReply3 = getBotReply('magic');
    // Output: Do you like plants and nature?
    const expectedReply3 = 'Do you like plants and nature?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Me neither in honesty, does the sound of playing music to inspire allies and confound foes please your ears?.
    const expectedReply4 = 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?.
    const expectedReply5 = 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?.
    const expectedReply6 = 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.
    const expectedReply7 = 'Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.';
    expect(botReply7).toEqual(expectedReply7);

    // Input: outsmart
    const botReply8 = getBotReply('outsmart');
    // Output: Welcome to being the best. Wizards are archmages who control the world, nothing matches a wizards versatility. If an answer can be found, the wizard can provide it.
    const expectedReply8 = 'Welcome to being the best. Wizards are archmages who control the world, nothing matches a wizards versatility. If an answer can be found, the wizard can provide it.';
    expect(botReply8).toEqual(expectedReply8);
  });

  // test 27
  it("should have correct response for George, yes, steel, no, no, no, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Does divine purpose fill your heart?.
    const expectedReply7 = 'Does divine purpose fill your heart?';
    expect(botReply7).toEqual(expectedReply7);

    // Input: yes
    const botReply8 = getBotReply('yes');
    // Output: Paladins crusade for their beliefs Unwavering in duty, they smite the wicked, with divine radiance, and charge forward clad in the heaviest of armor.
    const expectedReply8 = 'Paladins crusade for their beliefs Unwavering in duty, they smite the wicked, with divine radiance, and charge forward clad in the heaviest of armor.';
    expect(botReply8).toEqual(expectedReply8);
  });

  // test 28
  it("should have correct response for George, yes, steel, no, no, no, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Does divine purpose fill your heart?.
    const expectedReply7 = 'Does divine purpose fill your heart?';
    expect(botReply7).toEqual(expectedReply7);

    // Input: no
    const botReply8 = getBotReply('no');
    // Output: Wanna steal stuff and never get caught?.
    const expectedReply8 = 'Wanna steal stuff and never get caught?';
    expect(botReply8).toEqual(expectedReply8);
  });

  // test 29
  it("should have correct response for George, yes, steel, no, no, no, no, no, yes", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Does divine purpose fill your heart?.
    const expectedReply7 = 'Does divine purpose fill your heart?';
    expect(botReply7).toEqual(expectedReply7);

    // Input: no
    const botReply8 = getBotReply('no');
    // Output: Wanna steal stuff and never get caught?.
    const expectedReply8 = 'Wanna steal stuff and never get caught?';
    expect(botReply8).toEqual(expectedReply8);

    // Input: yes
    const botReply9 = getBotReply('yes');
    // Output: Rogues dart through the battlefield and coin-purses alike. Never being pinned down. They strike at their foes weak points and dart away.
    const expectedReply9 = 'Rogues dart through the battlefield and coin-purses alike. Never being pinned down. They strike at their foes weak points and dart away.';
    expect(botReply9).toEqual(expectedReply9);
  });

  // test 30
  it("should have correct response for George, yes, steel, no, no, no, no, no, no", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yes
    const botReply2 = getBotReply('yes');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);

    // Input: steel
    const botReply3 = getBotReply('steel');
    // Output: Do you like the vast wilds and hiking?
    const expectedReply3 = 'Do you like the vast wilds and hiking?';
    expect(botReply3).toEqual(expectedReply3);

    // Input: no
    const botReply4 = getBotReply('no');
    // Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology..
    const expectedReply4 = 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
    expect(botReply4).toEqual(expectedReply4);

    // Input: no
    const botReply5 = getBotReply('no');
    // Output: Does breaking stuff, getting mad, and being indestructible appeal?. 
    const expectedReply5 = 'Does breaking stuff, getting mad, and being indestructible appeal?';
    expect(botReply5).toEqual(expectedReply5);

    // Input: no
    const botReply6 = getBotReply('no');
    // Output: Is inner peace your life-goal?.
    const expectedReply6 = 'Is inner peace your life-goal?';
    expect(botReply6).toEqual(expectedReply6);

    // Input: no
    const botReply7 = getBotReply('no');
    // Output: Does divine purpose fill your heart?.
    const expectedReply7 = 'Does divine purpose fill your heart?';
    expect(botReply7).toEqual(expectedReply7);

    // Input: no
    const botReply8 = getBotReply('no');
    // Output: Wanna steal stuff and never get caught?.
    const expectedReply8 = 'Wanna steal stuff and never get caught?';
    expect(botReply8).toEqual(expectedReply8);

    // Input: no
    const botReply9 = getBotReply('no');
    // Output: The only option left is the fighter. They are considered the most "generic" class, but nothing can truly rival their martial prowess. If something needs killing, nothing can match the fighters ferocity and directness.
    const expectedReply9 = 'The only option left is the fighter. They are considered the most "generic" class, but nothing can truly rival their martial prowess. If something needs killing, nothing can match the fighters ferocity and directness.';
    expect(botReply9).toEqual(expectedReply9);
  });

  // test 31
  it("should have correct response for George, YES", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: YES
    const botReply2 = getBotReply('YES');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);
  });

  // test 32
  it("should have correct response for George, yEp", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: yEp
    const botReply2 = getBotReply('yEp');
    // Output: Then we shall begin. Steel or magic?
    const expectedReply2 = 'Then we shall begin. Steel or magic?';
    expect(botReply2).toEqual(expectedReply2);
  });

  // test 33
  it("should have correct response for George, narP", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: narP
    const botReply2 = getBotReply('narP');
    // Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?
    const expectedReply2 = 'A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?';
    expect(botReply2).toEqual(expectedReply2);
  });

  // test 34
  it("should have correct response for George, glsagdjklgdsafop@__-!#!FD)jfdsFJA0_JD(||)", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: glsagdjklgdsafop@__-!#!FD)jfdsFJA0_JD(||)
    const botReply2 = getBotReply('glsagdjklgdsafop@__-!#!FD)jfdsFJA0_JD(||)');
    // Output: You aren't making any sense and I can't understand you. Try using yes or no, if you're still stuck try "Timeloop". That should get you back to the start quick-smart! Try not to timeloop too much or we might break something.
    const expectedReply2 = `You aren't making any sense and I can't understand you. Try using yes or no, if you're still stuck try "Timeloop". That should get you back to the start quick-smart! Try not to timeloop too much or we might break something.`;
    expect(botReply2).toEqual(expectedReply2);
  });

  // test 35
  it("should have correct response for (George, timeloop)x4", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: timeloop
    const botReply2 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply2 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply2).toEqual(expectedReply2);

    // Input: George
    const botReply4 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply4 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply4).toEqual(expectedReply4);

    // Input: timeloop
    const botReply5 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply5 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply5).toEqual(expectedReply5);

    // Input: George
    const botReply6 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply6= "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply6).toEqual(expectedReply6);

    // Input: timeloop
    const botReply7 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply7 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply7).toEqual(expectedReply7);

    // Input: George
    const botReply8 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply8 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply8).toEqual(expectedReply8);

    // Input: timeloop
    const botReply9 = getBotReply('timeloop');
    // Output: OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 5!?!? FAR too many!, quick George 'RUN' or they'll tag your time signature.
    const expectedReply9 = `OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 5!?!? FAR too many!, quick George 'RUN' or they'll tag your time signature`;
    expect(botReply9).toEqual(expectedReply9);
  });

  // test 36
  it("should have correct response for (George, timeloop)x4, RUN, timeloop", () => {
    // Input: George
    const botReply1 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply1 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply1).toEqual(expectedReply1);

    // Input: timeloop
    const botReply2 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply2 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply2).toEqual(expectedReply2);

    // Input: George
    const botReply4 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply4 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply4).toEqual(expectedReply4);

    // Input: timeloop
    const botReply5 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply5 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply5).toEqual(expectedReply5);

    // Input: George
    const botReply6 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply6= "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply6).toEqual(expectedReply6);

    // Input: timeloop
    const botReply7 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply7 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply7).toEqual(expectedReply7);

    // Input: George
    const botReply8 = getBotReply("George");
    // Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
    const expectedReply8 = "Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?";
    expect(botReply8).toEqual(expectedReply8);

    // Input: timeloop
    const botReply9 = getBotReply('timeloop');
    // Output: OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 5!?!? FAR too many!, quick George 'RUN' or they'll tag your time signature.
    const expectedReply9 = `OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 5!?!? FAR too many!, quick George 'RUN' or they'll tag your time signature`;
    expect(botReply9).toEqual(expectedReply9);

    // Input: RUN
    const botReply10 = getBotReply('RUN');
    // Output: *Phew!* Looks like you got away, well I guess the heat has died down by now and it should be ok to use 'timeloop' to try again now
    const expectedReply10 = `*Phew!* Looks like you got away, well I guess the heat has died down by now and it should be ok to use 'timeloop' to try again now`;
    expect(botReply10).toEqual(expectedReply10);

    // Input: timeloop
    const botReply11 = getBotReply('timeloop');
    // Output: Greetings traveler, I am Yetan. What do you call yourself?.
    const expectedReply11 = `Greetings traveler, I am Yetan. What do you call yourself?`;
    expect(botReply11).toEqual(expectedReply11);
  });
});
