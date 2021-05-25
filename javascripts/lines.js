const MULT_FACT = 3;
const OFFSET = 2;

function writeCoords(currentTime) {
    let currentArr = createArr(currentTime);
    let lines = [];

    for (let i = 0; i < currentArr.length; i++) {
        let line = [];
        for (let j = 0; j < currentArr[i].length; j++) {
            let point = {x: (j + OFFSET) * MULT_FACT, y: (i + OFFSET) * MULT_FACT, z: currentArr[i][j] * MULT_FACT};
            line.push(point);
        }
        lines.push(line);
    }

    return lines;
}

function createArr(currentTime) {
    let currentArr = arrSpaceChar;
    for (let i = 0; i < currentTime.length; i++) {
        appendArr(currentArr, charToArr(currentTime.charAt(i)));
        //appendArr(currentArr, arrSpaceChar);//TODO space seems to copy previous array
    }
    return currentArr;
}

function charToArr(character) {
    switch (character) {
        case '0':
            return arr0;
        case '1':
            return arr1;
        case '2':
            return arr2;
        case '3':
            return arr3;
        case '4':
            return arr4;
        case '5':
            return arr5;
        case '6':
            return arr6;
        case '7':
            return arr7;
        case '8':
            return arr8;
        case '9':
            return arr9;
        case ':':
            return arrColon;
        default:
            console.log("default charToArr");
            return arrColon;
    }
}

function appendArr(currentArr, newArr) {
    console.log(newArr);
    for (let i = 0; i < currentArr.length; i++) {
        currentArr[i].push(...newArr[i]);
    }
}
