/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        return this.getDepth(root,0)
    }

    getDepth(root,depth =1){
        if(!root) return depth;

        let leftNodeDepth = this.getDepth(root.left, depth +1)
        let rightNodeDepth = this.getDepth(root.right, depth + 1)
     
        return Math.max(leftNodeDepth, rightNodeDepth)
    }
    
}
