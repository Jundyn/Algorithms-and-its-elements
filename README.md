

### **Sentence Analysis Algorithm**

## Overview

This algorithm reads a sentence that ends with a period (`.`) character, processes it character by character, and computes the following metrics:

1. **Length of the sentence**: The total number of characters (including spaces and the final period).
2. **Number of words**: The number of words in the sentence, assuming that words are separated by single spaces.
3. **Number of vowels**: The total number of vowels (`a, e, i, o, u` and their uppercase versions) in the sentence.

The algorithm uses three variables as counters:
- `lengthCounter`: Counts the total number of characters in the sentence.
- `wordCounter`: Counts the number of words in the sentence.
- `vowelCounter`: Counts the number of vowels in the sentence.

## How it Works

1. **Character Iteration**: The algorithm loops through each character in the sentence:
    - It increments the `lengthCounter` for each character.
    - It checks if the character is a vowel, and if so, increments the `vowelCounter`.
    - It checks for spaces to track the beginning of a new word. When a non-space character is found after a space or at the beginning, the `wordCounter` is incremented.

2. **Edge Handling**:
    - The sentence must end with a period (`.`).
    - Words are assumed to be separated by a single space.
    - Vowels are considered as `a, e, i, o, u` in both lowercase and uppercase.

## Example

### Input:
```
"Hello World."
```

### Output:
```
Length of the sentence: 12
Number of words: 2
Number of vowels: 3
```

### Explanation:
- **Length**: The sentence `"Hello World."` has 12 characters in total (including the space and the period).
- **Words**: The sentence has 2 words: `"Hello"` and `"World"`.
- **Vowels**: The vowels are `e`, `o`, and `o`, so the total count is 3.


### **Algorithm Steps:**

```text
1. Start
2. Initialize lengthCounter = 0
3. Initialize wordCounter = 0
4. Initialize vowelCounter = 0
5. Initialize isWord = False  // A flag to track whether we're inside a word

6. Input sentence (it ends with a period)
7. FOR each character c in the sentence DO
    a. Increment lengthCounter by 1 (to count the current character)
    
    b. IF c is a vowel (i.e., 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U') THEN
        i. Increment vowelCounter by 1
    END IF
    
    c. IF c is not a space AND isWord is False THEN
        i. Increment wordCounter by 1 (indicates the start of a new word)
        ii. Set isWord = True (we're now inside a word)
    ELSE IF c is a space THEN
        i. Set isWord = False (we've reached the end of a word)
    END IF
8. END FOR

9. Output the following:
    a. Length of the sentence: lengthCounter
    b. Number of words: wordCounter
    c. Number of vowels: vowelCounter

10. End
```

### **JavaScript Implementation**

```javascript
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
```

## Complexity Analysis

- **Time Complexity**:
    - **O(n)**: The algorithm processes each character in the sentence exactly once, where `n` is the length of the sentence.

- **Space Complexity**:
    - **O(1)**: The algorithm uses a constant amount of space (i.e., the counters and a few variables), regardless of the sentence length.

## How to Use

1. Clone or download this repository.
2. Open the JavaScript file in your preferred code editor.
3. Modify the `sentence` variable or pass a different sentence to the `analyzeSentence()` function.
4. Run the script in a browser console or Node.js environment to see the results.

## Conclusion

This algorithm is an efficient and simple way to analyze a sentence. It calculates the total length of the sentence, counts the number of words, and counts the number of vowels in the sentence. This implementation is useful for basic text analysis tasks and can be expanded for more complex sentence parsing. 

---
