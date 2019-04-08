# NAME

Repository containing algorithm implementations.

# DESCRIPTION

This repository contains algorithm implementations to solve problems.

# PROBLEM

Given a collection of 5-digit ZIP code ranges (each range includes both their upper and lower bounds), provide an algorithm that produces the minimum number of ranges required to represent the same restrictions as the input.

# SOLUTION 
src/zipCodeRangeRestriction.js

# USAGE
```javascript
npm install
npm run test
```

# ALGORITHM

ASSUMPTIONS USED
-----------

1. Input is an integer array of ZipCode ranges. An additional validation step is added to take care of any arbitrary input value.

2. Within a ZipCode range, first value is lower bound and second value is upper bound. If that is not the case, an additional step to sort the values within each zip code range needs to be added.

COMPLEXITY
-----------
This problem can be resolved with an algorithm with O(n) complexity. 
Ideally, the complexity would be a CONSTANT * O(n), with CONSTANT being max 5 digit zip code value which can be assumed as 99999.

DETAILS/STEPS
-----------
```
1. INPUT - Array of ZipCode ranges which is a two dimensional array. Call it ZipCodeRangeArray. 
2. Calculate MIN and MAX value from the ZipCodeRangeArray.
3. Build/Initialize a one dimension array of length equals to MAX - MIN. Call it RangeEvaluationArray.
4. Iterate through the ZipCodeRangeArray and populate the RangeEvaluationArray with 1 for every input range of ZipCodes. Note: RangeEvaluationArray index 0 would contain the MIN value of ZipCode range from the input.
5. Iterate through the above populated RangeEvaluationArray and then build the Output two-dimensional array(ZipCodeRestrictionArray) by following below logic:

LOOP index in RangeEvaluationArray
IF RangeEvaluationArray [index] is not equal to 1
THEN push the start and end range collected so far to ZipCodeRestrictionArray
ELSE collect the start and end range
END
END LOOP
```

# TEST RESULTS
Input 1 -> [[94133,94133],[94200,94299],[94600,94699]]

Output 1 -> [[94133,94133],[94200,94299],[94600,94699]]

Input 2 -> [[94133,94133],[94200,94299],[94226,94399]]

Output 2 -> [[94133,94133],[94200,94399]]
