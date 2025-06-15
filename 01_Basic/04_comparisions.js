// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) // true //

// Nullish Coalescing Operator ?? : null undefined
// this operator returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
// It is useful for providing default values when dealing with potentially null or undefined variables.

// let val
// val = 1 ?? 5
// console.log(val)
// val = null ?? 5
// console.log(val)
// val = undefined ?? 5
// console.log(val)

// how to check whether an object is empty or not

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}
