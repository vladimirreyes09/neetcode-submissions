class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        
        const occr = new Map<number,number>();

        for(let i = 0; i < nums.length; i++){
            let key = nums[i];

            if(occr.has(key)){
                occr.set(key, occr.get(key) +1);
                continue
            }

            occr.set(key,1);
        }

    return Array.from(occr)
        .sort((a,b)=>b[1] - a[1])
        .slice(0,k)
        .map(([f])=>f);
    }
}
