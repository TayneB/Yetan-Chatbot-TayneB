# Chatbot

## Problem statement
What dungeons and dragon class should you pick?

## Inputs, processes and outputs
Inputs: userInput
Processes: Determine the correct answer based on the userInput and previous userInputs
Output: the next suggestion or reccomendation

## Test scenarios - Each test denoted by a 't' and number
## for readability, tests are very wordy - needs optimising

## t1
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?

## t2
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: no
Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?

## t3
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: no
Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?
Input: no
Output: Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.

## t4
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: no
Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?
Input: no
Output: Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.
Input: timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?

## t5
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: no
Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?
Input: no
Output: Well George, if you'd like to know more about dnd you can check out more info here. You could also tell me to "Timeloop" and we can start again. Try not to restart time too much, or things get... tricky.
Input: timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: Still George
Output: Well met, Still George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
  
## t6
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?

## t7
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?

## t8
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?

## t9
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: yes
Output: Rangers are martial experts with a splash of magic. Shoot bows, clash swords, eat magic berries and never get lost.

## t10
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: yes
Output: I suggest druid, they are masters of the natural world, they wield powerful magic and can shape-shift into mighty beasts.

## t11
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?

## t12
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: yes
Output: The bard may be to your liking. They strum the grandest tunes enthralling the world to their charismatic whim.

## t13
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.

## t14
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit you?

## t15
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: yes
Output: Artificers use their brains to solve problems with arcane and steel fusions. (Also explosions). 

## t16
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?

## t17 
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit youu?
Input: yes
Output: The cleric blasts foes with holy light and closes terrible wounds with a touch.

## t18 
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit youu?
Input: no
Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?

## t19
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: yes
Output: The barbarian is unmatched in how durable they are. Prone to surviving meteors being dropped on their heads, which is then followed by them picking the meteor up and beating whatever threw it at them into a bloody mess.

## t20
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?

## t21 
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit youu?
Input: no
Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?
Input: yes
Output: Warlocks are eldritch masters who make pacts with otherworldly beings for power. I do know a devil who might be interested in your soul.

## t22
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit youu?
Input: no
Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?
Input: no
Output: Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.

## t23
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?
Input: yes
Output: Monks use the serenity and calm to dish out lightning fast whoopings with just their fists. Eventually being able to disrupt their enemies chi, stunning them into easy targets.

## t24
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?
Input: no
Output: Does divine purpose fill your heart?

## t25
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit youu?
Input: no
Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?
Input: no
Output: Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.
Input: blast
Output: Sorceror is a choice. You get the cool part of wizard (explosions) without all that pesky study. Cheater. No, I am NOT salty.

## t26
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: magic
Output: Do you like plants and nature?
Input: no
Output: Me neither in honesty, but does the sound of playing music to inspire allies and confound foes please your ears?
Input: no
Output: The strumming can definitely get irritating. Perhaps serving a divine purpose for the good of all would suit youu?
Input: no
Output: If not serving a higher purpose, maybe taking power from a lower place and entering into a pact with a powerful entity could entice you?
Input: no
Output: Only two more spellcasters left. Would you prefer to blast your enemies into dust or just outsmart everyone and make a fool out of your foes, eventually wielding the power of a god?!?! ... I may have a bias.
Input: outsmart
Output: Welcome to being the best. Wizards are archmages who control the world, nothing matches a wizards versatility. If an answer can be found, the wizard can provide it.

## t27
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?
Input: no
Output: Does divine purpose fill your heart?
input: yes
Output: Paladins crusade for their beliefs Unwavering in duty, they smite the wicked, with divine radiance, and charge forward clad in the heaviest of armor.

## t28
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?
Input: no
Output: Does divine purpose fill your heart?
input: no
Output: Wanna steal stuff and never get caught?

## t29
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?
Input: no
Output: Does divine purpose fill your heart?
input: no
Output: Wanna steal stuff and never get caught?
Input: yes
Output: Rogues dart through the battlefield and coin-purses alike. Never being pinned down. They strike at their foes weak points and dart away.

# t30
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: no
Output: Does breaking stuff, getting mad, and being indestructible appeal?
Input: no
Output: Is inner peace your life-goal?
Input: no
Output: Does divine purpose fill your heart?
input: no
Output: Wanna steal stuff and never get caught?
Input: no
Output: The only option left is the fighter. They are considered the most "generic" class, but nothing can truly rival their martial prowess. If something needs killing, nothing can match the fighters ferocity and directness.

## edge case testing
## t31
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: YES
Output: Then we shall begin. Steel or magic?

## t32
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yEp
Output: Then we shall begin. Steel or magic?

## t33
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: narP
Output: A newcomer! Let me explain, Dungeons and Dragons is a roleplaying game that has you act as an adventurer whom you create to play as with a group of friends to overcome challenges set for your group by the game master. The outcome of actions within the game are determined by dice rolls and your characters abilities. We are going to look at what classes from this game might interest you based on your preferences or what sounds cool! Would like to continue determining your fate?

## t34 - error mesage
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: glsagdjklgdsafop@__-!#!FD)jfdsFJA0_JD(||)
Output: You aren't making any sense and I can't understand you. Try using yes or no, if you're still stuck try "Timeloop". That should get you back to the start quick-smart! Try not to timeloop too much or we might break something.

## t35 - Time police wanted meter
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 4 far too many!, quick George run or they'll tag your time signature

## t36 - Hot pursuit escape
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 4 far too many!, quick George run or they'll tag your time signature
Input: RUN
Output: *Phew!* Looks like you got away, well I guess the heat has died down by now and it should be ok to use 'timeloop' to try again now
Input: timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?

## t37 - Telling Yetan that you are yetan
Input: Yetan
Output: What a coincidence, or maybe you're me in a different universe? No matter, let us continue deciding your destiny within the world of Faerun or beyond. In your universe are you familiar with Dungeons and Dragons 5th edition?

## t38 - Getting caught by the time police
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: Greetings traveler, I am Yetan. What do you call yourself?
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: Timeloop
Output: OH CRAP! ITS THE TIME POLICE, HOW MANY TIMES DID YOU RESET!!?!?!? 4 far too many!, quick George run or they'll tag your time signature
Input: Timeloop
Output: Stop! You violated the laws of time. You'll be paying the courts a fine and serving a sentence. Your stolen moments are now forfeit. *Ah Crap, looks like there's no way out, better reboot the universe, oh wait, I mean reload the webpage hehe*
Input: goober ##This input can be anything
Output: You're in time jail, reload the page, you're stuck bud

## t15
Input: George
Output: Well met, George, I am here to help you decide your destiny within the world of Faerun or beyond. Are you familiar with Dungeons and Dragons 5th edition?
Input: yes
Output: Then we shall begin. Steel or magic?
Input: steel
Output: Do you like the vast wilds and hiking?
Input: no
Output: Perhaps you find intrigue in the creation of magic devices and arcane-technology.
Input: yes
Output: Artificers use their brains to solve problems with arcane and steel fusions. (Also explosions). 
Input: yes
Output: You already got your answer, go on shoo!... Oh alright, I do like your company George. Say 'Timeloop' and you can go again, hopefully we haven't looped too many times.