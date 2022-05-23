const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable! ', (answer) => {
  const b = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    const c = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      const d = answer;
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer) => {
        const e = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          const f = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            const g = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              const h = answer;
              console.log(`Awesome! Your name is ${b}. Your favourite activity is ${c}. You jam to ${d} while you ${c}. Your favorite meal is ${e} and you know its gotta be ${f}. Your favourite sport is ${g} and your super power is ${h}. WOW!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});














/*What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!*/