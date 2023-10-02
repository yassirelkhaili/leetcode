//my first solution

// function increasingTriplet(nums: number[]): boolean {
//     let length = nums.length;
//     if (length < 3)
//         return false;
//     for (let i = 0; i < length; i++)
//     {
//         for (let j = i + 1; j < length; j++)
//         {
//             if (nums[i] < nums[j])
//             {
//                 for (let k = j + 1; k < length; k++)
//                 {
//                     if (nums[j] < nums[k])
//                         return true;
//                 }
//             }
//         }
//     }
//     return false;
// };

// my more optimized solution O(n)

function increasingTriplet(nums: number[]): boolean {
    const length: number = nums.length;
    let min1: number = Infinity;
    let min2: number = Infinity;
    if (length < 3) return false;
    for (let i = 0; i < length; i++) {
        if (nums[i] <= min1) {
            min1 = nums[i];
        } else if (nums[i] <= min2) {
            min2 = nums[i];
        } else {
            return true;
        }
    }
    return false;
}
