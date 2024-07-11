import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {

  // base case node children === 0
  // if(node.children.length === 0) return node.val;

  //if children is equal more than 0, get first value
  // return value  + sum rest of children

  let sum = 0;

  for(const child of node.children){
   sum += sumValues(child)
  }

  return node.val + sum
}

export { sumValues };
