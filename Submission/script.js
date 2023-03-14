/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let step = 1;
const getBotReply = (msg) => {
  if (step === 1) {
    step = 2;
  return `Well met, ${msg}, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?`;
  };
  if (step === 2) {
    step = 3;
    return 'A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?'; 
  };
  if (step === 3) {
    return `Well if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.`;
  };
  if (msg === 'timeloop') {
    return `Greetings traveler, I am Yetan. What do you call yourself?`;
  }

};

export { getBotReply };
