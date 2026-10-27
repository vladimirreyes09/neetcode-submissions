class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1
        const output = new Array(nums.length).fill(0)
        
        let zeros = 0
        let lastZeroIndex = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 0) {
                lastZeroIndex = i
                zeros++
            }
            prod = prod * (nums[i] || 1)
        }
  
        if(zeros >= 2) {
            return output
        }

        if(zeros == 1){
            output[lastZeroIndex] = prod
            return output
        }
       
        for(let i = 0; i < nums.length; i++){
            output[i] = prod / nums[i]
        }
        return output
    }
}
