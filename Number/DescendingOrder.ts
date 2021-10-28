export function descendingOrder(n: number): number {
    return parseInt(n.toString().split('').sort().reverse().join(''));
  }

console.log(descendingOrder(111) === 111);
console.log(descendingOrder(15) === 51);
console.log(descendingOrder(1021) === 2110);

