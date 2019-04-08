// Assumption 1: Input is an integer array of ZipCode ranges. 
// If the input can be any arbitary value, we need to add integer validation. -- Added validation
var zipCodeRangeRegistriction = (zipCodeRanges = []) => {
    if (zipCodeRanges.length === 0) return [];
    let min = Number.MAX_VALUE;
    let max = 0;
    let zipRangeEvaluationArray = [];
    // Loop to find min and max
    // Complexity O(n) where n is number of zip code ranges.
    for (let i = 0; i < zipCodeRanges.length; i++){
        if(zipCodeRanges[i].length == 2 && Number.isInteger(zipCodeRanges[i][0]) && Number.isInteger(zipCodeRanges[i][1])) {
            if (min > zipCodeRanges[i][0]) {
                min = zipCodeRanges[i][0];
            }
            if (max < zipCodeRanges[i][1]) {
                max = zipCodeRanges[i][1];
            }
        } else {
            throw 'Invalid input of zip code ranges';
        }
    }
    //console.log(`min is %d and max is %d`, min, max);
    // Initialize an array of max - min length
    if (min === Number.MAX_VALUE && max === 0) {
        return [];
    }
    zipRangeEvaluationArray = new Array(max - min + 1);
    // Populate 1 in the Evaluation Array for a value derived from zip code ranges by subtracting the min.
    // For example, if zip code range is [10, 15] and min is 10, Populate 1 for 0th, 1st, 2nd, 3rd, 4th values in array as we loop through 0 (10 - min) to 5 (15 - min) new range value would be [0,5]
    // Complexity O (n) where n is number of zip code ranges. Worst case scenario would be 99999 * O (n) which is treated as O(n).
    for (let i = 0; i < zipCodeRanges.length; i++){
        for (let j = zipCodeRanges[i][0] - min; j < zipCodeRanges[i][1] - min + 1; j++) {
            zipRangeEvaluationArray[j] = 1;
        }
    }
    //console.log(zipRangeEvaluationArray);
    let zipCodeRestrictionArray = [];
    let leftRange = min - 1;
    let rightRange = min;
    // Loop through the Evaluation Array once and create the final required Zip Code Restriction Ranges by creating a range for every undefined found in the array, and at the end populate the remaining range boundaries as the final restriction range.
    // Complexity is a constant O(c) where c in worst case would be 99999.
    for (let i = 0; i < zipRangeEvaluationArray.length - 1; i++) {
        if(zipRangeEvaluationArray[i] === 1) {
            rightRange = min + i;
        }
        if(zipRangeEvaluationArray[i] === undefined) {
            leftRange = min + i;
        }

        if(zipRangeEvaluationArray[i] === 1 && zipRangeEvaluationArray[i+1] === undefined) { // Time to populate Zip Code Restriction Range Array
            zipCodeRestrictionArray[zipCodeRestrictionArray.length] = [];
            zipCodeRestrictionArray[zipCodeRestrictionArray.length - 1][0] = leftRange + 1;
            zipCodeRestrictionArray[zipCodeRestrictionArray.length - 1][1] = rightRange;
        }    
    }
    // Populate the final range after the loop
    zipCodeRestrictionArray[zipCodeRestrictionArray.length] = [];
    zipCodeRestrictionArray[zipCodeRestrictionArray.length - 1][0] = leftRange + 1;
    zipCodeRestrictionArray[zipCodeRestrictionArray.length - 1][1] = min + zipRangeEvaluationArray.length - 1;
    return zipCodeRestrictionArray;
}

module.exports = zipCodeRangeRegistriction;
//const zipCodeRanges = [[4, 4], [6, 7], [10, 10], [12, 13], [15, 15]];
//const zipCodeRanges = [[4, 4], [6, 7], [10, 10], [11, 13], [15, 15]];
//const zipCodeRanges = [[94133,94133],[94200,94299],[94600,94699]];
/*
const zipCodeRanges = [[94133,94133], [94200,94299], [94226,94399]];
console.log("Input zip code ranges:");
console.log(zipCodeRanges);
console.log("Output zip code ranges:");
console.log(buildZipCodeRestrictionRanges(zipCodeRanges));
*/