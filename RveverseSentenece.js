const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", function(inputSentence) {
    function reverseWordsInSentence(sentence) {
        const words = sentence.split(' ');
        const reversedWords = words.map(word => {
            return word.split('').reverse().join('');
        });
        const reversedSentence = reversedWords.join(' ');
        return reversedSentence;
    }

    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log("Reversed sentence:", reversedSentence);

    rl.close();
});
