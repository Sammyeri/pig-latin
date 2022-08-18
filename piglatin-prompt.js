const promptly = require('./node_modules/promptly');

(async () => {
    const word = await promptly.prompt("enter a word: ");
    console.log(word);
})