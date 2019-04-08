const zipCodeRangeRestriction = require('../src/zipCodeRangeRestriction');

describe('Zip Code Range Restriction', () => {
    test('Test Case 1: should return the range of values useful to add restriction rules',() => {
        const inputZipCodeRanges = [[4, 4], [6, 7], [10, 10], [12, 13], [15, 15]];
        const output = [[4, 4], [6, 7], [10, 10], [12, 13], [15, 15]];
        expect(zipCodeRangeRestriction(inputZipCodeRanges)).toEqual(output);
    });
    test('Test Case 2: should return the range of values useful to add restriction rules',() => {
        const inputZipCodeRanges = [[4, 4], [6, 7], [10, 10], [11, 13], [15, 15]];
        const output = [[4, 4], [6, 7], [10, 13], [15, 15]];
        expect(zipCodeRangeRestriction(inputZipCodeRanges)).toEqual(output);
    });
    test('Test Case 3: should return the range of values useful to add restriction rules',() => {
        const inputZipCodeRanges = [[94133,94133],[94200,94299],[94600,94699]];
        const output = [[94133,94133],[94200,94299],[94600,94699]];
        expect(zipCodeRangeRestriction(inputZipCodeRanges)).toEqual(output);
    });
    test('Test Case 4: should return the range of values useful to add restriction rules',() => {
        const inputZipCodeRanges = [[94133,94133], [94200,94299], [94226,94399]];
        const output = [[94133,94133],[94200,94399]];
        expect(zipCodeRangeRestriction(inputZipCodeRanges)).toEqual(output);
    });
    test('Test Case 5: should return empty array for an empty array of zip code ranges',() => {
        const inputZipCodeRanges = [];
        const output = [];
        expect(zipCodeRangeRestriction(inputZipCodeRanges)).toEqual(output);
    });
    test('Test Case 6: should return empty array when invoked with empty input',() => {
        const output = [];
        expect(zipCodeRangeRestriction()).toEqual(output);
    });
    test('Test Case 7: should return empty array when invoked with null input',() => {
        const output = [];
        expect(zipCodeRangeRestriction()).toEqual(output);
    });
    test('Test Case 8: should throw error message when invoked with invalid input',() => {
        const inputZipCodeRanges = [1];
        const output = [];
        function testInvalidInput () {
            zipCodeRangeRestriction(inputZipCodeRanges);
        }
        expect(testInvalidInput).toThrowError('Invalid input of zip code ranges');
    });
    test('Test Case 9: should throw error message when invoked with invalid input',() => {
        const inputZipCodeRanges = ['a', 'b'];
        const output = [];
        function testInvalidInput () {
            zipCodeRangeRestriction(inputZipCodeRanges);
        }
        expect(testInvalidInput).toThrowError('Invalid input of zip code ranges');
    });
    test('Test Case 10: should throw error message when invoked with invalid input',() => {
        const inputZipCodeRanges = [['a', 'b']];
        const output = [];
        function testInvalidInput () {
            zipCodeRangeRestriction(inputZipCodeRanges);
        }
        expect(testInvalidInput).toThrowError('Invalid input of zip code ranges');
    });
});