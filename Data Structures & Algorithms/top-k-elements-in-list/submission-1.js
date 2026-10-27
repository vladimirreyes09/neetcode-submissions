

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occrs = new Map();

        for(let i = 0; i < nums.length;i++){
            let num = nums[i]
            let times = occrs.get(num) ?? 0;
            occrs.set(num, times + 1)
        }

        const sortedByFrecuency = Array.from(occrs.entries()).sort(([ak,av],[bk,bv])=>{
            return bv-av
        })


        return sortedByFrecuency.slice(0,k).map(([k])=>k)
    }
}
