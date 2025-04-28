function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    let isWord = false; // Flag to track if we are inside a word

    // Define vowels for easy checking (both lowercase and uppercase)
    const vowels = "aeiouAEIOU";

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let currentChar = sentence[i];

        // Count the total number of characters (including spaces and period)
        lengthCounter++;

        // Check if the character is a vowel
        if (vowels.includes(currentChar)) {
            vowelCounter++;
        }

        // Count words (consider words separated by a single space)
        if (currentChar !== " " && !isWord) {
            wordCounter++;
            isWord = true; // We're inside a word now
        } else if (currentChar === " ") {
            isWord = false; // We've encountered a space, so we're outside a word
        }
    }

    // Output the results
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage:
let sentence = "Hello World.";
analyzeSentence(sentence);
