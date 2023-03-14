/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let step = 1;
let name;
const getBotReply = (msg) => {
  // intro section to test user knowledge
  if (step === 1) {
    step = 2;
    name = `${msg}`;
    return `Well met, ${name}, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?`;
  };
  if (msg === 'no') {
  if (step === 2) {
    step = 3;
    return 'A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?'; 
  };
  if (step === 3) {
    step = 0;
    return `Well ${name}, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.`;
  };
  };
  // Time anomaly detected
  if ((msg === 'yes' && step === 2 )|| msg === 'beg') {
    step = 4;
    return 'Then we shall begin. Steel or magic?';
  };
  // Section is the "blocked" code
  if (msg === 'magic') {
    return 'Do you like plants and nature?';
  };
  if (msg === 'steel') {
    step = 5;
    console.log(step);
    return 'Do you like the vast wilds and hiking?';
  }
  if (msg === 'yes' && step === 5) {
    return 'Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.'
  };

  // Separated from the rest as this is a reset function
  if (msg === 'timeloop') {
    step = 1;
    return `Greetings traveler, I am Yetan. What do you call yourself?`;
  };

};

export { getBotReply };
