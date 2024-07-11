import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of values of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {

  //base case
  if(node === null) return [];

  const result = [node.val]

  for(const child of node.children){
    result.push(...preOrder(child))
  }
  return result
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of values of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {

  if(node === null) return [];

  let result = []

  for(const child of node.children){
    result.push(...postOrder(child))
  }
  
  result.push(node.val)

  return result
}

export { preOrder, postOrder };
