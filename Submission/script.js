/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

const posMispell = ['yep', 'yeah', 'yea', 'yar'];
const negMispell = ['nope', 'no thanks', 'narp'];
let step = 1;
let name;
let path;
let timePoliceStars = 0;
const getBotReply = (msg) => {
  // intro section to test user knowledge
  if (step === 1) {
    step = 2;
    name = `${msg}`;
    return `Well met, ${name}, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?`;
  };

  // This declaration solves inputs being different cases and streamlines user inputs
  msg = msg.toLowerCase();
  
  if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
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
  if ((msg === 'yes' && step === 2 )|| msg === 'beg' || posMispell.includes(msg.toLowerCase())) {
    step = 4;
    return 'Then we shall begin. Steel or magic?';
  };
  // Section is the "blocked" code
  // both paths follow the same steps and do it neatly
  if (msg === 'magic') {
    path = msg;
    step = 5;
    return 'Do you like plants and nature?';
  };

  if (msg === 'steel') {
    path = msg;
    step = 5;
    return 'Do you like the vast wilds and hiking?';
  }

  if (step === 5) {
    step = 6;
    if (path === 'magic') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'I suggest druid, they are masters of the natural world, they wield powerful magic and can shape-shift into mighty beasts.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
      }
    }
  }

  if (step === 6) {
    step = 7;
    if (path === 'magic') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'The bard may be to your liking. They strum the grandest tunes enthralling the world to their charismatic whim.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'Artificers use their brains to solve problems with arcane and steel fusions. (Also explosions). ';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Does breaking stuff, getting mad, and being indestructible appeal?';
      }
    }
  }

  // test 17-20
  if (step === 7) {
    step = 8;
    if (path === 'magic') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'The cleric blasts foes with holy light and closes terrible wounds with a touch.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'The barbarian is unmatched in how durable they are. Prone to surviving meteors being dropped on their heads, which is then followed by them picking the meteor up and beating whatever threw it at them into a bloody mess.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Is inner peace your life-goal?';
      }
    }
  }

  // test 21-24
  if (step === 8) {
    step = 9;
    if (path === 'magic') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'Warlocks are eldritch masters who make pacts with otherworldly beings for power. I do know a devil who might be interested in your soul.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'Monks use the serenity and calm to dish out lightning fast whoopings with just their fists. Eventually being able to disrupt their enemies chi, stunning them into easy targets.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Does divine purpose fill your heart?';
      }
    }
  }

  // test 25-28
  if (step === 9) {
    step = 10;
    if (path === 'magic') {
      if (msg === 'blast') {
        return 'Sorceror is a choice. You get the cool part of wizard (explosions) without all that pesky study. Cheater. No, I am NOT salty.';
      }
      if (msg === 'outsmart') {
        return 'Welcome to being the best. Wizards are archmages who control the world, nothing matches a wizards versatility. If an answer can be found, the wizard can provide it.';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'Paladins crusade for their beliefs Unwavering in duty, they smite the wicked, with divine radiance, and charge forward clad in the heaviest of armor.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'Wanna steal stuff and never get caught?';
      }
    }
  }

  // test 29-30
  if (step === 10) {
    step = 1337;
    if (path === 'magic') {
      if (msg === 'blast') {
        return 'Sorceror is a choice. You get the cool part of wizard (explosions) without all that pesky study. Cheater. No, I am NOT salty.';
      }
      if (msg === 'outsmart') {
        return 'Welcome to being the best. Wizards are archmages who control the world, nothing matches a wizards versatility. If an answer can be found, the wizard can provide it.';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes' || posMispell.includes(msg.toLowerCase())) {
        return 'Rogues dart through the battlefield and coin-purses alike. Never being pinned down. They strike at their foes weak points and dart away.';
      }
      if (msg === 'no' || negMispell.includes(msg.toLowerCase())) {
        return 'The only option left is the fighter. They are considered the most "generic" class, but nothing can truly rival their martial prowess. If something needs killing, nothing can match the fighters ferocity and directness.';
      }
    }
  }

  // Vestigial Spaghetti code - it's good for a laugh
  /* if (path === 'magic') {
    step = 5;
    if (msg === 'yes' && step === 5) {
    return 'I suggest druid, they are masters of the natural world, they wield powerful magic and can shape-shift into mighty beasts.';
    };
    if (msg === 'no') {
      step = 6;
      return 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
    };
    if (msg === 'yes' && step === 6) {
      return 'The bard may be to your liking. They strum the grandest tunes enthralling the world to their charismatic whim.';
    } 
  };

  // steel path
  if (msg === 'steel') {
    step = 5;
    return 'Do you like the vast wilds and hiking?';
  };
  if (msg === 'yes' && step === 5) {
    return 'Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.'
  }; */

  if (timePoliceStars >= 4) {
    return `OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? ${timePoliceStars} far too many!, quick ${name} run or they'll tag your time signature `
  }
  // Separated from the rest as this is a reset function
  if (msg === 'timeloop') {
    step = 1;
    timePoliceStars += 1;
    path = '';
    return `Greetings traveler, I am Yetan. What do you call yourself?`;
  };

  if (msg) {

    return `You aren't making any sense and I can't understand you. Try using yes or no, if you're still stuck try "Timeloop". That should get you back to the start quick-smart! Try not to timeloop too much or we might break something.`;
  }
};

export { getBotReply };
