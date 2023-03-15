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
});
