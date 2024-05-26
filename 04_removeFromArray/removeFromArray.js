const removeFromArray = function(array, ...removeList) {
    // First method
    // for (let i = 0; i <= Arr.length - 1; i++) {
    //     for (item of removeList) {
    //         if (Arr[i] === item) {
    //             Arr.splice(i,1);
    //             i--;
    //             break;
    //         }
    //     }
    // }
    // return Arr;

    // Secod method
    const newArray = [];
    array.forEach((item) => {
        if(!removeList.includes(item))
            newArray.push(item);
    });
    return newArray;
};
removeFromArray([1,2,3], '1',3);

// Do not edit below this line
module.exports = removeFromArray;
