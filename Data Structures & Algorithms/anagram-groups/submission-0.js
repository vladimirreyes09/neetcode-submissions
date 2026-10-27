class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let an = new Map()

        for(let i = 0; i < strs.length;i++){
            const occr = new Array(26).fill(0)
            
            for(let j = 0; j < strs[i].length; j ++){
                occr[strs[i][j].charCodeAt(0) - 97] += 1
            }
            
            let k = occr.join(';')
            
            if(!an.has(k)){
                an.set(k,[strs[i]])
                console.log(an.get(k))
                continue
            }

            let arrRef = an.get(k)

            arrRef.push(strs[i])
        }

        return Array.from(an.values())
    }
}
