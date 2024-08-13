// 5. Write a function to convert a Roman numeral to its integer value

function romanToInt(roman) {
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanToIntMap[roman[i]];

        if (currentValue >= prevValue) {
            total += currentValue;
        } else {
            total -= currentValue;
        }

        prevValue = currentValue;
    }

    return total;
}

// Test cases
console.log(romanToInt("III"));     // 3
console.log(romanToInt("IV"));      // 4
console.log(romanToInt("IX"));      // 9
console.log(romanToInt("LVIII"));   // 58
console.log(romanToInt("MCMXCIV")); // 1994
