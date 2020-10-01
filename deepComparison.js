function deepEqual(firstObj, secondObj){
    if(firstObj === secondObj){
        return true;
    }

    if (firstObj == null || typeof firstObj != "object" ||
                secondObj == null || typeof secondObj != "object"){
        return false;
    }

    let keysFirst = Object.keys(firstObj), 
    keysSecond = Object.keys(secondObj);

    if (keysFirst.length != keysSecond.length){
        return false;
    }

    for (let key of keysFirst){
        if (!keysSecond.includes(key) || !deepEqual(firstObj[key], secondObj[key])){
            return false;
        }
    }
    return true;

}

let obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

//let keysA = Object.keys(obj);
//console.log(keysA);