let nums: Array<number> = [0,1,0,3,12];

// function moveZeroes(nums: number[]): void {
// let leftpointer: number = 0;
// let rightpointer: number = leftpointer + 1;
// while (leftpointer !== nums.length)
// {
//     if (nums[leftpointer] === 0)
//     {
//         while (rightpointer < nums.length && nums[rightpointer] === 0) {
//                 rightpointer++;
//             }
//         if (rightpointer < nums.length)
//             [nums[leftpointer], nums[rightpointer]] = [nums[rightpointer], nums[leftpointer]];
//     }
//     leftpointer++;
//     rightpointer++;
// }
// };

function moveZeroes(nums: number[]): void {
    let moveToFirst = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[moveToFirst]] = [nums[moveToFirst], nums[i]];
            moveToFirst++;
        }
    }
}

moveZeroes(nums);

console.log(nums);
