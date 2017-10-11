
///////////////////// Problem 1

var countVowels = function('str'){
  if(str.length = 0) { return 0 }
  return (/(i|e|o|y|a)/g.test(str[0])? 1: 0) + countVowels(str.slice(1));
}

///////////////////// Problem 2

var recursiveSum = function(num){
  if(num === 0) { return 0 }
  return num % 10 | 0 + recursiveSum(num / 10 | 0);
}

///////////////////// Problem 3

var isPowerOfTwo = function(num){
  if(num < 0 || num === undefined) { console.error('please enter a positive integer'); return }
  if(num < 2) { return num? true: false }// handling the zeroth power of two and zero
  if(num % 2 === 1) { return false }// odds can't be powers of two
  return num === 2 ? true : isPowerOfTwo(num / 2); //if we reach 2 then num is a power of two
}

///////////////////// Problem 4

var invest = function(amount, interestRate, years) {
  if(years === 0) { return amount }
  return invest(amount + amount*interestRate, interestRate, years - 1);
}

///////////////////// Problem 5

var printRangeUpDown = function(min, max, current = max>min?min:max){
  (min > max)? [min, max] = [max, min]: null; //if max > min then swap
  if(current === max + (max - min)){ return min }
  return (max - Math.abs(max-current)) + ',' + printRangeUpDown(min, max, current + 1);
}

///////////////////// Problem 6

class Tree{
  constructor(value, left, right){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function BinaryTreeSum(root){
  return root? root.value + BinaryTreeSum(root.left) + BinaryTreeSum(root.right): 0;
}

///////////////////// Problem 7

var arrayToBinarySearchTree = function(nums){
  if(nums.length === 0) { return undefined } 
  var mid = Math.floor(nums.length/2);
  var left = arrayToBinarySearchTree(nums.slice(0, mid));
  var right = arrayToBinarySearchTree(nums.slice(mid+1));
  return new Tree(nums[mid],left,right);
}

//instances for testing: 

var t9 = new Tree(9)
var t2 = new Tree(2)
var t1 = new Tree(1)
var t6 = new Tree(6)
var t7 = new Tree(7); t7.left = t6; t7.right = t9;
var t3 = new Tree(3); t3.left = t1; t3.right = t2;
var t5 = new Tree(5); t5.left = t3; t5.right = t7;
var t4 = new Tree(4); t2.right = t4;

/*
          5
       /    \
      3      7
     / \    / \
    1   2  6   9
         \
          4
*/
 
