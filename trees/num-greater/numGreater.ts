import { TreeNodeNum } from "../common/tree";
import { Stack } from "../common/stack";
import { isWhileStatement } from "typescript";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  const nodesToVisit = new Stack([node])

  let answer = 0;
  while(!nodesToVisit.isEmpty()){
    const current = nodesToVisit.pop()

    if(current.val > lowerBound){
      answer +=  1;
    }

    for(const child of current.children){
      nodesToVisit.push(child)
    }
  }
  return answer;
}

export { numGreater };

/**
//         1
//         |
//         2

 *
 *
 */