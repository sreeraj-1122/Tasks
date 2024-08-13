

function findMinDifference(timePoints) {
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Convert all time points to minutes
    const minutesArray = timePoints.map(timeToMinutes);
    
    // Sort the array of minutes
    minutesArray.sort((a, b) => a - b);
    
    // Initialize the minimum difference as large as possible
    let minDifference = Infinity;
    
    for (let i = 1; i < minutesArray.length; i++) {
        minDifference = Math.min(minDifference, minutesArray[i] - minutesArray[i - 1]);
    }
    
    minDifference = Math.min(minDifference, (1440 - minutesArray[minutesArray.length - 1] + minutesArray[0]));
    
    return minDifference;
}

console.log(findMinDifference(["23:59", "00:00"])); // Output: 1
console.log(findMinDifference(["00:00", "23:59", "00:00"])); // Output: 0
