function sortRGB(chars) {
    let left = 0;
    let right = chars.length - 1;
    let i = 0;

    while (i <= right) {
        if (chars[i] === 'R') {
            // Swap chars[left] and chars[i], then move left and i pointers to the right
            [chars[left], chars[i]] = [chars[i], chars[left]];
            left++;
            i++;
        } else if (chars[i] === 'B') {
            // Swap chars[right] and chars[i], then move right pointer to the left
            [chars[right], chars[i]] = [chars[i], chars[right]];
            right--;
        } else {
            // If chars[i] is 'G', just move i pointer to the right
            i++;
        }
    }
}

// Example 1
const input1 = ["R", "B", "R", "G", "G", "B"];
sortRGB(input1);
console.log(input1); 

// Example 2
const input2 = ["R", "B", "R", "G"];
sortRGB(input2);
console.log(input2);
