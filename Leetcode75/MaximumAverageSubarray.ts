//first solution (wrong)

// function findMaxAverage(nums: number[], k: number): number {
//     if (nums.length === 1) return nums[0];
//     let start: number = 0;
//     let maxArray: Array<number> = [];
//     for (k; k < nums.length; k++)
//     {
//         let sum: number = 0;
//         for (let i = 0; i < nums.slice(start, k).length; i++)
//             sum += nums.slice(start, k)[i];
//         maxArray.push(sum);
//         start++;
//     }
//     return Math.max(...maxArray) / k;
//     };

//after correction and further optimization (brute force method)

// function findMaxAverage(nums: number[], k: number): number {
//     let start: number = 0;
//     let maxArray: number[] = [];
//     for (let end = k; end <= nums.length; end++) {
//         let sum: number = 0;
//         for (let i = start; i < end; i++)
//             sum += nums[i];
//         maxArray.push(sum);
//         start++;
//     }
//     return Math.max(...maxArray) / k;
// }

//after learning the sliding window technique

function findMaxAverage(nums: number[], k: number, sum: number = 0, maxValue: number = 0): number {
    //calculate initial max and sum for elements [0, k[;
    for (let i = 0; i < k; i++)
        sum += nums[i];
    maxValue = sum / k;
    for (let j = k; j < nums.length; j++)
    {
        //remove first add last to maintain the window
        sum += nums[j] - nums[j - k];
        //recalculate max with each iteration
        maxValue = Math.max(maxValue, sum / k);
    }
    return maxValue;
};
