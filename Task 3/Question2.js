// 2. Write a function to check if two strings are anagrams (contain the
// same characters with the same frequency).

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;

}

// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("apple", "pale")); // false
console.log(areAnagrams("rat", "car")); // false
