function groupAnagrams(strings) {
    const groupedAnagrams = new Map();

    for (const str of strings) {
        const sortedStr = str.split('').sort().join('');
        if (groupedAnagrams.has(sortedStr)) {
            groupedAnagrams.get(sortedStr).push(str);
        } else {
            groupedAnagrams.set(sortedStr, [str]);
        }
    }

    return Array.from(groupedAnagrams.values());
}

// Sample Test 1
const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input1));

// Sample Test 2
const input2 = ["low", "blow", "loud", "odul", "owl", "wolb"];
console.log(groupAnagrams(input2));
