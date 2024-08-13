// 4. Write a function to find the longest palindromic substring in a given
// string

function longestPalindromicSubstring(s) {
    let maxLength = 0;
    let longestPalindrome = '';

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        left++;
        right--;

        const length = right - left + 1;
        if (length > maxLength) {
            maxLength = length;
            longestPalindrome = s.substring(left, right + 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes (center at i)
        expandAroundCenter(i, i);

        // Check for even-length palindromes (center between i and i+1)
        expandAroundCenter(i, i + 1);
    }

    return longestPalindrome;
}

// input
console.log(longestPalindromicSubstring("babad")); // "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd"));  // "bb"
console.log(longestPalindromicSubstring("racecar")); // "racecar"
