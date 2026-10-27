class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()
        
        for(let i = 0; i < nums.length; i++){
            let v = nums[i]
              
            if(m.has(v)){
                return [m.get(v),i]
            }
            
            m.set(target - v,i)
        }
     
    }
}
