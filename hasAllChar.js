function hasAllCharacters(s1, s2) {
    const charCount = {};

    // Count characters in s1
    for (const char of s1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if all characters in s1 exist in s2
    for (const char of s2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

// Example 1
const s1_1 = "aabccd";
const s2_1 = "abcd";
console.log(hasAllCharacters(s1_1, s2_1));

// Example 2
const s1_2 = "aabbw";
const s2_2 = "abc";
console.log(hasAllCharacters(s1_2, s2_2)); 
