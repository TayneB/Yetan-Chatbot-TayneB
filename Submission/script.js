/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let step = 1;
let name;
let path;
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
      if (msg === 'yes') {
        return 'I suggest druid, they are masters of the natural world, they wield powerful magic and can shape-shift into mighty beasts.';
      }
      if (msg === 'no') {
        return 'Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes') {
        return 'Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.';
      }
      if (msg === 'no') {
        return 'Perhaps you find intrigue in the creation of magic devices and arcane-technology.';
      }
    }
  }

  if (step === 6) {
    step = 7;
    if (path === 'magic') {
      if (msg === 'yes') {
        return 'The bard may be to your liking. They strum the grandest tunes enthralling the world to their charismatic whim.';
      }
      if (msg === 'no') {
        return 'The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes') {
        return 'Artificers use their brains to solve problems with arcane and steel fusions. (Also explosions). ';
      }
      if (msg === 'no') {
        return 'Does breaking stuff, getting mad, and being indestructible appeal?';
      }
    }
  }

  if (step === 7) {
    step = 8;
    if (path === 'magic') {
      if (msg === 'yes') {
        return 'The cleric blasts foes with holy light and closes terrible wounds with a touch.';
      }
      if (msg === 'no') {
        return 'If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes') {
        return 'The barbarian is unmatched in how durable they are. Prone to surviving meteors being dropped on their heads, which is then followed by them picking the meteor up and beating whatever threw it at them into a bloody mess.';
      }
      if (msg === 'no') {
        return 'Is inner peace your life-goal?';
      }
    }
  }

  if (step === 8) {
    step = 9;
    if (path === 'magic') {
      if (msg === 'yes') {
        return 'Warlocks are eldritch masters who make pacts with otherworldly beings for power. I do know a devil who might be interested in your soul.';
      }
      if (msg === 'no') {
        return 'Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.';
      }
    }
    if (path === 'steel') {
      if (msg === 'yes') {
        return 'Monks use the serenity and calm to dish out lightning fast whoopings with just their fists. Eventually being able to disrupt their enemies chi, stunning them into easy targets.';
      }
      if (msg === 'no') {
        return 'Does divine purpose fill your heart?';
      }
    }
  }

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
      if (msg === 'yes') {
        return 'Paladins crusade for their beliefs Unwavering in duty, they smite the wicked, with divine radiance, and charge forward clad in the heaviest of armor.';
      }
      if (msg === 'no') {
        return 'Does divine purpose fill your heart?';
      }
    }
  }
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

  // Separated from the rest as this is a reset function
  if (msg === 'timeloop') {
    step = 1;
    path = '';
    return `Greetings traveler, I am Yetan. What do you call yourself?`;
  };

};

export { getBotReply };
