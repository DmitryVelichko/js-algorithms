let array = [1,1,1,1,2,2,3,3,4,5,5,5,6,6,6,6,];

const removeDups = (array) => {
    let i = 0;
    while(i<array.length) {
        if(array[i] == array[i+1]) {
            array.splice(i, 1)
        } else {
            i+=1;
        }
    }
    return (array + ". Раз: " + i);
}

console.log(removeDups(array));