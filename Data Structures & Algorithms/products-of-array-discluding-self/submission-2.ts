class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output = new Array(nums.length).fill(0);

        let product = 1;

        let zeros = 0;
        let zeroIndex = 0;

        for(let i = 0; i < nums.length; i++){
            const isCurrentZero = nums[i] === 0;

            if(isCurrentZero) {
                zeros++;
                zeroIndex = i;
            }
            
            if(zeros > 1) 
                return output

            product *= isCurrentZero ? 1 : nums[i];  
        }

        // if there's one zero all other spots will be 0 except the spot in which the zero is placedoutput
        if(zeros === 1){
            output[zeroIndex] = product;
            return output
        }
        
        

        for(let i = 0 ; i < nums.length;i++){
            output[i] = product / nums[i];
        }

        return output
    }
}
