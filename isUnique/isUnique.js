
// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

isUnique = (str) => {
    if (str.length > 128) return false;

    charSet = new Boolean();
    for (var a = 0; a < str.length; a++) {
        let value = str.charAt(a);
        console.log(`Value :: ${value} :::: Letter: ${str[a]}`);

        if (charSet[value]) {
            console.log('NOT UNIQUE')
            return false;
        }
        charSet[value] = true;
    }

    if (charSet) {
        console.log('charset ::: ', charSet);
        console.log('it is unique');
    }
    return true;
}

isUnique("eddie"); //returns false
isUnique("eduardo"); //returns false
isUnique("mario"); //returns true
isUnique("1223"); //returns false
isUnique("1234"); //returns true

//TIME COMPLEXITY IS O(n)