// Data Structures & Algorithms Presentation Content - JavaScript

export const presentationData = {
  title: "Data Structures & Algorithms in JavaScript",
  topics: [
    {
      id: 1,
      name: "Linked Lists",
      duration: "1 hour",
      slides: [
        {
          type: "title",
          title: "Linked Lists",
          subtitle: "Dynamic Data Structure in JavaScript",
          description: "Understanding linear data structures with dynamic memory allocation"
        },
        {
          type: "content",
          title: "What is a Linked List?",
          points: [
            "A linear data structure where elements are stored in nodes",
            "Each node contains data and a reference (pointer) to the next node",
            "Dynamic size - can grow or shrink during execution",
            "Non-contiguous memory allocation",
            "Types: Singly, Doubly, Circular"
          ],
          diagram: true
        },
        {
          type: "content",
          title: "Advantages vs Arrays",
          points: [
            "✅ Dynamic size (no fixed length)",
            "✅ Efficient insertion/deletion at beginning (O(1))",
            "✅ No memory waste from pre-allocation",
            "❌ No random access (must traverse)",
            "❌ Extra memory for pointers",
            "❌ Not cache friendly"
          ]
        },
        {
          type: "code",
          title: "Node Class Implementation",
          description: "Building block of a Linked List",
          code: `// Node class represents each element in the linked list
class Node {
  constructor(data) {
    this.data = data;      // Store the value
    this.next = null;      // Reference to next node
  }
}

// Example: Creating nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Linking nodes
node1.next = node2;
node2.next = node3;

console.log(node1.data);        // 10
console.log(node1.next.data);   // 20`
        },
        {
          type: "code",
          title: "Singly Linked List - Class Structure",
          description: "Complete implementation with basic operations",
          code: `class LinkedList {
  constructor() {
    this.head = null;    // First node
    this.size = 0;       // Track length
  }

  // Check if list is empty
  isEmpty() {
    return this.head === null;
  }

  // Get the size
  getSize() {
    return this.size;
  }

  // Display all elements
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    
    let current = this.head;
    let listValues = '';
    
    while (current) {
      listValues += current.data + ' -> ';
      current = current.next;
    }
    
    console.log(listValues + 'null');
  }
}`
        },
        {
          type: "code",
          title: "Insert at Beginning - prepend()",
          description: "Adding element at the start - O(1) time complexity",
          code: `// Insert at the beginning (Head)
prepend(data) {
  const newNode = new Node(data);
  
  if (this.isEmpty()) {
    // If list is empty, new node becomes head
    this.head = newNode;
  } else {
    // Point new node to current head
    newNode.next = this.head;
    // Update head to new node
    this.head = newNode;
  }
  
  this.size++;
}

// Usage Example:
const list = new LinkedList();
list.prepend(30);  // List: 30 -> null
list.prepend(20);  // List: 20 -> 30 -> null
list.prepend(10);  // List: 10 -> 20 -> 30 -> null
list.print();      // Output: 10 -> 20 -> 30 -> null`
        },
        {
          type: "code",
          title: "Insert at End - append()",
          description: "Adding element at the end - O(n) time complexity",
          code: `// Insert at the end (Tail)
append(data) {
  const newNode = new Node(data);
  
  if (this.isEmpty()) {
    // If empty, new node becomes head
    this.head = newNode;
  } else {
    // Traverse to the last node
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    // Link last node to new node
    current.next = newNode;
  }
  
  this.size++;
}

// Usage Example:
const list = new LinkedList();
list.append(10);   // List: 10 -> null
list.append(20);   // List: 10 -> 20 -> null
list.append(30);   // List: 10 -> 20 -> 30 -> null
list.print();`
        },
        {
          type: "code",
          title: "Insert at Position - insert()",
          description: "Insert at specific index - O(n) time complexity",
          code: `// Insert at specific position
insert(data, position) {
  // Validate position
  if (position < 0 || position > this.size) {
    console.log("Invalid position");
    return;
  }
  
  // If inserting at beginning
  if (position === 0) {
    this.prepend(data);
    return;
  }
  
  const newNode = new Node(data);
  let current = this.head;
  
  // Traverse to position - 1
  for (let i = 0; i < position - 1; i++) {
    current = current.next;
  }
  
  // Insert new node
  newNode.next = current.next;
  current.next = newNode;
  this.size++;
}

// Example:
list.insert(15, 1);  // Insert 15 at index 1`
        },
        {
          type: "code",
          title: "Delete from Beginning - removeFirst()",
          description: "Remove first element - O(1) time complexity",
          code: `// Remove first node
removeFirst() {
  if (this.isEmpty()) {
    console.log("List is empty");
    return null;
  }
  
  const removedNode = this.head;
  this.head = this.head.next;
  this.size--;
  
  return removedNode.data;
}

// Usage Example:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
// List: 10 -> 20 -> 30 -> null

const removed = list.removeFirst();
console.log(removed);  // 10
list.print();          // 20 -> 30 -> null`
        },
        {
          type: "code",
          title: "Delete from End - removeLast()",
          description: "Remove last element - O(n) time complexity",
          code: `// Remove last node
removeLast() {
  if (this.isEmpty()) {
    console.log("List is empty");
    return null;
  }
  
  // If only one node
  if (this.size === 1) {
    const removedNode = this.head;
    this.head = null;
    this.size--;
    return removedNode.data;
  }
  
  // Traverse to second last node
  let current = this.head;
  while (current.next.next !== null) {
    current = current.next;
  }
  
  const removedNode = current.next;
  current.next = null;
  this.size--;
  
  return removedNode.data;
}

// Example:
const removed = list.removeLast();
console.log(removed);  // Last element`
        },
        {
          type: "code",
          title: "Delete by Value - removeValue()",
          description: "Remove node with specific value - O(n)",
          code: `// Remove node by value
removeValue(value) {
  if (this.isEmpty()) {
    console.log("List is empty");
    return null;
  }
  
  // If head needs to be removed
  if (this.head.data === value) {
    this.head = this.head.next;
    this.size--;
    return value;
  }
  
  // Search for the node
  let current = this.head;
  while (current.next && current.next.data !== value) {
    current = current.next;
  }
  
  // If value found
  if (current.next) {
    current.next = current.next.next;
    this.size--;
    return value;
  }
  
  console.log("Value not found");
  return null;
}

// Example:
list.removeValue(20);  // Remove node with value 20`
        },
        {
          type: "code",
          title: "Search & Reverse Operations",
          description: "Additional useful operations",
          code: `// Search for a value
search(value) {
  if (this.isEmpty()) return false;
  
  let current = this.head;
  let index = 0;
  
  while (current) {
    if (current.data === value) {
      return index;  // Return position
    }
    current = current.next;
    index++;
  }
  
  return -1;  // Not found
}

// Reverse the linked list
reverse() {
  let prev = null;
  let current = this.head;
  let next = null;
  
  while (current) {
    next = current.next;    // Store next
    current.next = prev;    // Reverse link
    prev = current;         // Move prev forward
    current = next;         // Move current forward
  }
  
  this.head = prev;  // Update head
}

// Example:
console.log(list.search(20));  // Returns index
list.reverse();                 // Reverses list`
        },
        {
          type: "content",
          title: "Time & Space Complexity",
          points: [
            "**Access**: O(n) - Must traverse from head",
            "**Search**: O(n) - Linear search required",
            "**Insert at beginning**: O(1) - Direct head update",
            "**Insert at end**: O(n) - Must traverse to end",
            "**Insert at position**: O(n) - Traverse to position",
            "**Delete**: O(n) - Need to find the node",
            "**Space Complexity**: O(n) - n nodes"
          ]
        },
        {
          type: "code",
          title: "Complete Linked List Implementation",
          description: "Full working code with all operations",
          code: `class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() { return this.head === null; }
  getSize() { return this.size; }

  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) curr = curr.next;
      curr.next = node;
    }
    this.size++;
  }

  print() {
    let curr = this.head, str = '';
    while (curr) {
      str += curr.data + ' -> ';
      curr = curr.next;
    }
    console.log(str + 'null');
  }
}

// Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.print();  // 0 -> 1 -> 2 -> null`
        },
        {
          type: "content",
          title: "Practice Problems",
          points: [
            "1. Detect cycle in linked list (Floyd's algorithm)",
            "2. Find middle element in one pass",
            "3. Merge two sorted linked lists",
            "4. Remove duplicates from sorted list",
            "5. Check if linked list is palindrome",
            "6. Find nth node from end",
            "7. Intersection point of two lists"
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Recursion & Backtracking",
      duration: "1 hour",
      slides: [
        {
          type: "title",
          title: "Recursion & Backtracking",
          subtitle: "Solving Problems with Self-Referential Functions",
          description: "Master the art of breaking down complex problems"
        },
        {
          type: "content",
          title: "What is Recursion?",
          points: [
            "A function that calls itself to solve smaller instances of the same problem",
            "Must have a base case (termination condition)",
            "Must have a recursive case (calls itself with modified input)",
            "Uses call stack for execution",
            "Useful for: Tree traversal, sorting, divide & conquer"
          ]
        },
        {
          type: "content",
          title: "Recursion Components",
          points: [
            "**Base Case**: Condition to stop recursion (prevents infinite loop)",
            "**Recursive Case**: Function calls itself with smaller problem",
            "**Return Statement**: Pass result back up the call stack",
            "**Progress**: Each call must move toward base case",
            "**Call Stack**: Stores function calls (can cause stack overflow)"
          ]
        },
        {
          type: "code",
          title: "Simple Recursion - Factorial",
          description: "Classic example of recursion",
          code: `// Calculate factorial using recursion
// n! = n × (n-1) × (n-2) × ... × 1

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: n! = n × (n-1)!
  return n * factorial(n - 1);
}

// Example execution:
console.log(factorial(5));  // 120

// Call stack visualization:
// factorial(5) = 5 * factorial(4)
//              = 5 * 4 * factorial(3)
//              = 5 * 4 * 3 * factorial(2)
//              = 5 * 4 * 3 * 2 * factorial(1)
//              = 5 * 4 * 3 * 2 * 1
//              = 120

// Time: O(n), Space: O(n) - call stack`
        },
        {
          type: "code",
          title: "Fibonacci Sequence",
          description: "Understanding recursion tree and optimization",
          code: `// Naive recursive approach (inefficient)
function fibonacci(n) {
  // Base cases
  if (n <= 1) return n;
  
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));  // 8
// Time: O(2^n) - exponential!, Space: O(n)

// Optimized with Memoization (Dynamic Programming)
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(50));  // Fast!
// Time: O(n), Space: O(n)`
        },
        {
          type: "code",
          title: "Array Sum using Recursion",
          description: "Processing arrays recursively",
          code: `// Calculate sum of array elements
function arraySum(arr, index = 0) {
  // Base case: reached end
  if (index >= arr.length) {
    return 0;
  }
  
  // Recursive case: current + sum of rest
  return arr[index] + arraySum(arr, index + 1);
}

// Alternative approach
function arraySum2(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + arraySum2(arr.slice(1));
}

const numbers = [1, 2, 3, 4, 5];
console.log(arraySum(numbers));   // 15
console.log(arraySum2(numbers));  // 15

// Time: O(n), Space: O(n)`
        },
        {
          type: "code",
          title: "String Reversal - Recursion",
          description: "Working with strings recursively",
          code: `// Reverse a string using recursion
function reverseString(str) {
  // Base case: empty or single character
  if (str.length <= 1) {
    return str;
  }
  
  // Recursive case: last char + reverse of rest
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString("hello"));  // "olleh"

// Alternative: first char goes to end
function reverse2(str) {
  if (str === "") return "";
  return reverse2(str.substr(1)) + str[0];
}

console.log(reverse2("world"));  // "dlrow"

// Time: O(n), Space: O(n)`
        },
        {
          type: "code",
          title: "Power Function - Recursion",
          description: "Calculate x^n efficiently",
          code: `// Calculate x raised to power n
function power(x, n) {
  // Base case
  if (n === 0) return 1;
  if (n === 1) return x;
  
  // Recursive case
  return x * power(x, n - 1);
}

console.log(power(2, 5));  // 32
// Time: O(n)

// Optimized: Divide and Conquer
function powerOptimized(x, n) {
  if (n === 0) return 1;
  
  // If n is even: x^n = (x^(n/2))^2
  if (n % 2 === 0) {
    const half = powerOptimized(x, n / 2);
    return half * half;
  }
  
  // If n is odd: x^n = x * x^(n-1)
  return x * powerOptimized(x, n - 1);
}

console.log(powerOptimized(2, 10));  // 1024
// Time: O(log n)`
        },
        {
          type: "content",
          title: "What is Backtracking?",
          points: [
            "Algorithmic technique to find all (or some) solutions",
            "Tries all possibilities using recursion",
            "Abandons (backtracks) when a path doesn't work",
            "Uses DFS (Depth First Search) approach",
            "Common in: Puzzles, games, combinatorial problems"
          ]
        },
        {
          type: "content",
          title: "Backtracking Template",
          points: [
            "1. **Choose**: Make a choice from available options",
            "2. **Explore**: Recursively explore with that choice",
            "3. **Un-choose**: Backtrack if it doesn't lead to solution",
            "**Pruning**: Skip paths that can't lead to solution",
            "**State**: Maintain current state, restore when backtracking"
          ]
        },
        {
          type: "code",
          title: "Generate All Subsets",
          description: "Power set using backtracking",
          code: `// Generate all subsets of an array
function subsets(nums) {
  const result = [];
  const current = [];
  
  function backtrack(index) {
    // Add current subset to result
    result.push([...current]);
    
    // Try adding each remaining element
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);      // Choose
      backtrack(i + 1);           // Explore
      current.pop();              // Un-choose (backtrack)
    }
  }
  
  backtrack(0);
  return result;
}

const nums = [1, 2, 3];
console.log(subsets(nums));
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

// Time: O(2^n), Space: O(n)`
        },
        {
          type: "code",
          title: "Generate All Permutations",
          description: "All arrangements of elements",
          code: `// Generate all permutations of array
function permutations(nums) {
  const result = [];
  
  function backtrack(current, remaining) {
    // Base case: no more elements to add
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }
    
    // Try each remaining element
    for (let i = 0; i < remaining.length; i++) {
      // Choose
      current.push(remaining[i]);
      
      // Explore with remaining elements
      const newRemaining = remaining.filter((_, idx) => idx !== i);
      backtrack(current, newRemaining);
      
      // Un-choose (backtrack)
      current.pop();
    }
  }
  
  backtrack([], nums);
  return result;
}

console.log(permutations([1, 2, 3]));
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

// Time: O(n!), Space: O(n)`
        },
        {
          type: "code",
          title: "N-Queens Problem",
          description: "Classic backtracking problem",
          code: `// Place N queens on N×N board (no attacks)
function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  
  function isSafe(row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    
    // Check diagonal (top-left)
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    
    // Check diagonal (top-right)
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    
    return true;
  }
  
  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join('')));
      return;
    }
    
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';      // Choose
        backtrack(row + 1);         // Explore
        board[row][col] = '.';      // Un-choose
      }
    }
  }
  
  backtrack(0);
  return result;
}

console.log(solveNQueens(4));  // 2 solutions`
        },
        {
          type: "code",
          title: "Combination Sum",
          description: "Find combinations that sum to target",
          code: `// Find all combinations that sum to target
function combinationSum(candidates, target) {
  const result = [];
  
  function backtrack(start, current, sum) {
    // Base case: found valid combination
    if (sum === target) {
      result.push([...current]);
      return;
    }
    
    // Pruning: sum exceeded target
    if (sum > target) return;
    
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);              // Choose
      backtrack(i, current, sum + candidates[i]); // Explore (can reuse)
      current.pop();                            // Un-choose
    }
  }
  
  backtrack(0, [], 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
// Output: [[2,2,3], [7]]

// Time: O(2^n), Space: O(target/min)`
        },
        {
          type: "code",
          title: "Sudoku Solver",
          description: "Complete backtracking solution",
          code: `// Solve 9x9 Sudoku puzzle
function solveSudoku(board) {
  function isValid(row, col, num) {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
    }
    
    // Check column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }
    
    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }
    
    return true;
  }
  
  function solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          for (let num = 1; num <= 9; num++) {
            const char = num.toString();
            if (isValid(row, col, char)) {
              board[row][col] = char;    // Choose
              if (solve()) return true;  // Explore
              board[row][col] = '.';     // Backtrack
            }
          }
          return false;  // No valid number found
        }
      }
    }
    return true;  // Solved
  }
  
  solve();
  return board;
}`
        },
        {
          type: "code",
          title: "Word Search in Grid",
          description: "Find word in 2D board",
          code: `// Find if word exists in 2D grid
function wordSearch(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  
  function backtrack(row, col, index) {
    // Base case: found complete word
    if (index === word.length) return true;
    
    // Boundary checks
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }
    
    // Check if current cell matches
    if (board[row][col] !== word[index]) return false;
    
    // Mark as visited
    const temp = board[row][col];
    board[row][col] = '#';
    
    // Explore all 4 directions
    const found = 
      backtrack(row + 1, col, index + 1) ||  // Down
      backtrack(row - 1, col, index + 1) ||  // Up
      backtrack(row, col + 1, index + 1) ||  // Right
      backtrack(row, col - 1, index + 1);    // Left
    
    // Backtrack: restore cell
    board[row][col] = temp;
    
    return found;
  }
  
  // Try starting from each cell
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) return true;
    }
  }
  
  return false;
}

const board = [['A','B'],['C','D']];
console.log(wordSearch(board, "ABCD"));  // true`
        },
        {
          type: "content",
          title: "Recursion vs Iteration",
          points: [
            "**Recursion**: Cleaner code, natural for trees/graphs",
            "**Iteration**: Better performance, no stack overflow risk",
            "Every recursion can be converted to iteration",
            "Recursion uses more memory (call stack)",
            "Use recursion when problem is naturally recursive",
            "Use iteration for simple loops and better performance"
          ]
        },
        {
          type: "content",
          title: "Time & Space Complexity",
          points: [
            "**Factorial**: O(n) time, O(n) space",
            "**Fibonacci (naive)**: O(2^n) time, O(n) space",
            "**Fibonacci (memo)**: O(n) time, O(n) space",
            "**Subsets**: O(2^n) time, O(n) space",
            "**Permutations**: O(n!) time, O(n) space",
            "**N-Queens**: O(n!) time, O(n²) space"
          ]
        },
        {
          type: "content",
          title: "Practice Problems",
          points: [
            "1. Tower of Hanoi puzzle",
            "2. Generate valid parentheses",
            "3. Letter combinations of phone number",
            "4. Palindrome partitioning",
            "5. Rat in a maze problem",
            "6. Knight's tour problem",
            "7. Subset sum problem"
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Trees (BST, Trie, Heap)",
      duration: "1 hour",
      slides: [
        {
          type: "title",
          title: "Trees",
          subtitle: "Binary Search Trees, Tries & Heaps in JavaScript",
          description: "Hierarchical data structures for efficient operations"
        },
        {
          type: "content",
          title: "What is a Tree?",
          points: [
            "Non-linear hierarchical data structure",
            "Collection of nodes connected by edges",
            "**Root**: Top node with no parent",
            "**Leaf**: Node with no children",
            "**Height**: Longest path from root to leaf",
            "**Depth**: Distance from root to node"
          ]
        },
        {
          type: "content",
          title: "Tree Terminology",
          points: [
            "**Parent/Child**: Direct connection between nodes",
            "**Siblings**: Nodes with same parent",
            "**Ancestor/Descendant**: Indirect parent/child relationship",
            "**Subtree**: Tree formed by node and descendants",
            "**Degree**: Number of children a node has",
            "**Binary Tree**: Each node has at most 2 children"
          ]
        },
        {
          type: "code",
          title: "Tree Node Structure",
          description: "Basic building block",
          code: `// Binary Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Create a simple tree
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

//       10
//      /  \\
//     5    15
//    / \\
//   3   7`
        },
        {
          type: "content",
          title: "Binary Search Tree (BST)",
          points: [
            "Special binary tree with ordering property",
            "**Left subtree**: All values < parent",
            "**Right subtree**: All values > parent",
            "**No duplicates** (typically)",
            "Efficient search, insert, delete: O(log n) average",
            "Can degrade to O(n) if unbalanced"
          ]
        },
        {
          type: "code",
          title: "BST Implementation - Class Structure",
          description: "Binary Search Tree with basic operations",
          code: `class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Check if tree is empty
  isEmpty() {
    return this.root === null;
  }

  // Insert a value
  insert(value) {
    const newNode = new TreeNode(value);
    
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      // Go left
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      // Go right
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}`
        },
        {
          type: "code",
          title: "BST - Search Operation",
          description: "Find if value exists - O(log n) average",
          code: `// Search for a value
search(root, value) {
  // Base case: empty tree or not found
  if (!root) {
    return false;
  }
  
  // Found the value
  if (root.value === value) {
    return true;
  }
  
  // Search left or right subtree
  if (value < root.value) {
    return this.search(root.left, value);
  } else {
    return this.search(root.right, value);
  }
}

// Iterative version (more efficient)
searchIterative(value) {
  let current = this.root;
  
  while (current) {
    if (value === current.value) {
      return true;
    }
    
    current = value < current.value ? 
              current.left : current.right;
  }
  
  return false;
}

// Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.search(bst.root, 5));   // true
console.log(bst.searchIterative(20));   // false`
        },
        {
          type: "code",
          title: "BST Traversals - DFS",
          description: "Three ways to traverse: In-order, Pre-order, Post-order",
          code: `// In-order: Left -> Root -> Right (gives sorted order)
inOrder(root, result = []) {
  if (root) {
    this.inOrder(root.left, result);
    result.push(root.value);
    this.inOrder(root.right, result);
  }
  return result;
}

// Pre-order: Root -> Left -> Right
preOrder(root, result = []) {
  if (root) {
    result.push(root.value);
    this.preOrder(root.left, result);
    this.preOrder(root.right, result);
  }
  return result;
}

// Post-order: Left -> Right -> Root
postOrder(root, result = []) {
  if (root) {
    this.postOrder(root.left, result);
    this.postOrder(root.right, result);
    result.push(root.value);
  }
  return result;
}

// Example with tree: 10, 5, 15, 3, 7
console.log(bst.inOrder(bst.root));    // [3, 5, 7, 10, 15]
console.log(bst.preOrder(bst.root));   // [10, 5, 3, 7, 15]
console.log(bst.postOrder(bst.root));  // [3, 7, 5, 15, 10]`
        },
        {
          type: "code",
          title: "BST - Level Order Traversal (BFS)",
          description: "Visit nodes level by level using queue",
          code: `// Breadth-First Search (BFS)
levelOrder() {
  if (this.isEmpty()) return [];
  
  const result = [];
  const queue = [this.root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return result;
}

// Level-by-level output
levelOrderByLevel() {
  if (this.isEmpty()) return [];
  
  const result = [];
  const queue = [this.root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

console.log(bst.levelOrder());  // [10, 5, 15, 3, 7]`
        },
        {
          type: "code",
          title: "BST - Min and Max Values",
          description: "Finding minimum and maximum values",
          code: `// Find minimum value (leftmost node)
findMin(root = this.root) {
  if (!root) return null;
  
  // Keep going left
  while (root.left) {
    root = root.left;
  }
  
  return root.value;
}

// Find maximum value (rightmost node)
findMax(root = this.root) {
  if (!root) return null;
  
  // Keep going right
  while (root.right) {
    root = root.right;
  }
  
  return root.value;
}

// Recursive versions
findMinRecursive(root = this.root) {
  if (!root) return null;
  if (!root.left) return root.value;
  return this.findMinRecursive(root.left);
}

findMaxRecursive(root = this.root) {
  if (!root) return null;
  if (!root.right) return root.value;
  return this.findMaxRecursive(root.right);
}

console.log(bst.findMin());  // Smallest value
console.log(bst.findMax());  // Largest value`
        },
        {
          type: "code",
          title: "BST - Delete Node",
          description: "Removing node from BST (complex operation)",
          code: `// Delete a node from BST
delete(value) {
  this.root = this.deleteNode(this.root, value);
}

deleteNode(root, value) {
  if (!root) return null;
  
  if (value < root.value) {
    // Value in left subtree
    root.left = this.deleteNode(root.left, value);
  } else if (value > root.value) {
    // Value in right subtree
    root.right = this.deleteNode(root.right, value);
  } else {
    // Found the node to delete
    
    // Case 1: No children (leaf node)
    if (!root.left && !root.right) {
      return null;
    }
    
    // Case 2: One child
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    
    // Case 3: Two children
    // Find min value in right subtree (in-order successor)
    root.value = this.findMin(root.right);
    // Delete the in-order successor
    root.right = this.deleteNode(root.right, root.value);
  }
  
  return root;
}

// Time: O(log n) average, O(n) worst`
        },
        {
          type: "content",
          title: "Trie (Prefix Tree)",
          points: [
            "Tree data structure for storing strings",
            "Each node represents a character",
            "Common prefix sharing for space efficiency",
            "Used in: Auto-complete, spell checkers, IP routing",
            "Fast prefix search: O(m) where m = word length",
            "Space trade-off for time efficiency"
          ]
        },
        {
          type: "code",
          title: "Trie Node & Structure",
          description: "Building blocks of Trie",
          code: `// Trie Node
class TrieNode {
  constructor() {
    this.children = {};    // Map of character -> TrieNode
    this.isEndOfWord = false;
  }
}

// Trie Class
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into trie
  insert(word) {
    let node = this.root;
    
    for (let char of word) {
      // Create node if doesn't exist
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      // Move to child node
      node = node.children[char];
    }
    
    // Mark end of word
    node.isEndOfWord = true;
  }
}

// Time: O(m), Space: O(m) where m = word length`
        },
        {
          type: "code",
          title: "Trie - Search & Prefix",
          description: "Search for words and prefixes",
          code: `// Search for exact word
search(word) {
  let node = this.root;
  
  for (let char of word) {
    if (!node.children[char]) {
      return false;  // Character not found
    }
    node = node.children[char];
  }
  
  return node.isEndOfWord;
}

// Check if any word starts with prefix
startsWith(prefix) {
  let node = this.root;
  
  for (let char of prefix) {
    if (!node.children[char]) {
      return false;
    }
    node = node.children[char];
  }
  
  return true;  // Prefix exists
}

// Usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");

console.log(trie.search("app"));        // true
console.log(trie.search("appl"));       // false
console.log(trie.startsWith("app"));    // true
console.log(trie.startsWith("ban"));    // false

// Time: O(m) for all operations`
        },
        {
          type: "code",
          title: "Trie - Auto-complete Feature",
          description: "Find all words with given prefix",
          code: `// Get all words with given prefix
autoComplete(prefix) {
  let node = this.root;
  const results = [];
  
  // Navigate to prefix end
  for (let char of prefix) {
    if (!node.children[char]) {
      return results;  // No words with this prefix
    }
    node = node.children[char];
  }
  
  // DFS to find all words from this point
  this.findAllWords(node, prefix, results);
  return results;
}

findAllWords(node, currentWord, results) {
  if (node.isEndOfWord) {
    results.push(currentWord);
  }
  
  for (let char in node.children) {
    this.findAllWords(
      node.children[char],
      currentWord + char,
      results
    );
  }
}

// Usage
const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("card");
trie.insert("care");
trie.insert("careful");

console.log(trie.autoComplete("car"));
// Output: ["car", "card", "care", "careful"]`
        },
        {
          type: "content",
          title: "Heap (Binary Heap)",
          points: [
            "Complete binary tree with heap property",
            "**Max Heap**: Parent ≥ children (root is maximum)",
            "**Min Heap**: Parent ≤ children (root is minimum)",
            "Implemented using array (not pointers)",
            "Used in: Priority Queue, Heap Sort, Dijkstra's",
            "Insert/Delete: O(log n), Get Min/Max: O(1)"
          ]
        },
        {
          type: "code",
          title: "Min Heap - Array Representation",
          description: "Understanding heap indexing",
          code: `// Heap stored as array
// For node at index i:
// - Parent: Math.floor((i - 1) / 2)
// - Left Child: 2 * i + 1
// - Right Child: 2 * i + 2

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper methods for navigation
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // Helper to swap elements
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}`
        },
        {
          type: "code",
          title: "Min Heap - Insert Operation",
          description: "Add element and bubble up",
          code: `// Insert element into heap
insert(value) {
  // Add to end
  this.heap.push(value);
  
  // Bubble up to maintain heap property
  this.bubbleUp(this.size() - 1);
}

bubbleUp(index) {
  while (index > 0) {
    const parentIndex = this.getParentIndex(index);
    
    // If parent is smaller, heap property satisfied
    if (this.heap[parentIndex] <= this.heap[index]) {
      break;
    }
    
    // Swap with parent
    this.swap(index, parentIndex);
    index = parentIndex;
  }
}

// Usage
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(1);

console.log(minHeap.heap);  // [1, 5, 20, 10]

//       1
//      / \\
//     5   20
//    /
//   10

// Time: O(log n)`
        },
        {
          type: "code",
          title: "Min Heap - Extract Min",
          description: "Remove and return minimum element",
          code: `// Remove and return minimum (root)
extractMin() {
  if (this.isEmpty()) return null;
  
  if (this.size() === 1) {
    return this.heap.pop();
  }
  
  // Store min value
  const min = this.heap[0];
  
  // Move last element to root
  this.heap[0] = this.heap.pop();
  
  // Bubble down to restore heap property
  this.bubbleDown(0);
  
  return min;
}

bubbleDown(index) {
  while (true) {
    let smallest = index;
    const left = this.getLeftChildIndex(index);
    const right = this.getRightChildIndex(index);
    
    // Check left child
    if (left < this.size() && 
        this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    
    // Check right child
    if (right < this.size() && 
        this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    
    // If no swap needed, done
    if (smallest === index) break;
    
    this.swap(index, smallest);
    index = smallest;
  }
}

// Time: O(log n)`
        },
        {
          type: "code",
          title: "Min Heap - Peek & Build",
          description: "Additional heap operations",
          code: `// Get minimum without removing
peek() {
  if (this.isEmpty()) return null;
  return this.heap[0];
}

// Build heap from array (Heapify)
buildHeap(array) {
  this.heap = array;
  
  // Start from last non-leaf node
  const lastParent = Math.floor((this.size() - 2) / 2);
  
  // Bubble down each node
  for (let i = lastParent; i >= 0; i--) {
    this.bubbleDown(i);
  }
}

// Usage
const heap = new MinHeap();
heap.buildHeap([9, 5, 6, 2, 3, 7, 1, 4, 8]);

console.log(heap.peek());        // 1
console.log(heap.extractMin());  // 1
console.log(heap.extractMin());  // 2
console.log(heap.extractMin());  // 3

// buildHeap Time: O(n)
// This is more efficient than n insertions: O(n log n)`
        },
        {
          type: "code",
          title: "Max Heap Implementation",
          description: "Opposite of Min Heap",
          code: `class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.size() - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      
      // Max heap: parent should be larger
      if (this.heap[parent] >= this.heap[index]) {
        break;
      }
      
      [this.heap[index], this.heap[parent]] = 
        [this.heap[parent], this.heap[index]];
      
      index = parent;
    }
  }

  extractMax() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }

  size() {
    return this.heap.length;
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
console.log(maxHeap.extractMax());  // 20`
        },
        {
          type: "content",
          title: "Time & Space Complexity",
          points: [
            "**BST Search/Insert/Delete**: O(log n) avg, O(n) worst",
            "**BST Traversals**: O(n) time, O(h) space",
            "**Trie Insert/Search**: O(m) where m = word length",
            "**Trie Space**: O(ALPHABET_SIZE * N * M)",
            "**Heap Insert/Delete**: O(log n)",
            "**Heap Peek**: O(1), Build Heap: O(n)"
          ]
        },
        {
          type: "content",
          title: "Practice Problems",
          points: [
            "1. Validate Binary Search Tree",
            "2. Lowest Common Ancestor in BST",
            "3. Convert sorted array to BST",
            "4. Implement word dictionary (Trie)",
            "5. Kth largest element using heap",
            "6. Merge K sorted lists (heap)",
            "7. Find median from data stream"
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Graphs (DFS, BFS, Dijkstra, MST)",
      duration: "1 hour",
      slides: [
        {
          type: "title",
          title: "Graphs",
          subtitle: "DFS, BFS, Dijkstra & Minimum Spanning Tree",
          description: "Network structures and advanced algorithms"
        },
        {
          type: "content",
          title: "What is a Graph?",
          points: [
            "Collection of nodes (vertices) connected by edges",
            "**Directed**: Edges have direction (one-way)",
            "**Undirected**: Edges are bidirectional",
            "**Weighted**: Edges have associated costs/weights",
            "**Unweighted**: All edges have same importance",
            "Used in: Social networks, maps, networks, dependencies"
          ]
        },
        {
          type: "content",
          title: "Graph Terminology",
          points: [
            "**Vertex/Node**: Individual point in graph",
            "**Edge**: Connection between two vertices",
            "**Adjacent**: Vertices connected by an edge",
            "**Path**: Sequence of vertices connected by edges",
            "**Cycle**: Path that starts and ends at same vertex",
            "**Connected**: Path exists between any two vertices"
          ]
        },
        {
          type: "code",
          title: "Graph Representation - Adjacency List",
          description: "Most common representation using Map/Object",
          code: `// Graph using Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge (undirected)
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  // Display the graph
  display() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(vertex + " -> " + edges.join(", "));
    }
  }
}

// Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

// A -> B, C
// B -> A, C
// C -> A, B`
        },
        {
          type: "code",
          title: "Directed & Weighted Graphs",
          description: "Variations of graph implementation",
          code: `// Directed Graph
class DirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Edge goes only one way
  addEdge(from, to) {
    this.addVertex(from);
    this.addVertex(to);
    this.adjacencyList.get(from).push(to);
  }
}

// Weighted Graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    
    this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
  }
}

const wGraph = new WeightedGraph();
wGraph.addEdge("A", "B", 5);
wGraph.addEdge("B", "C", 3);`
        },
        {
          type: "content",
          title: "Depth-First Search (DFS)",
          points: [
            "Explore as far as possible along each branch",
            "Uses stack (or recursion with call stack)",
            "**Applications**: Cycle detection, topological sort, pathfinding",
            "Two approaches: Recursive and Iterative",
            "Time: O(V + E), Space: O(V)",
            "V = vertices, E = edges"
          ]
        },
        {
          type: "code",
          title: "DFS - Recursive Implementation",
          description: "Depth-First Search using recursion",
          code: `// DFS Recursive
class Graph {
  // ... (previous code)

  dfsRecursive(start) {
    const result = [];
    const visited = new Set();

    const dfs = (vertex) => {
      if (!vertex) return;
      
      // Mark as visited
      visited.add(vertex);
      result.push(vertex);

      // Visit all neighbors
      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(start);
    return result;
  }
}

// Usage
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.dfsRecursive("A"));
// Output: ["A", "B", "D", "E", "C", "F"]

// Time: O(V + E), Space: O(V)`
        },
        {
          type: "code",
          title: "DFS - Iterative Implementation",
          description: "Using explicit stack",
          code: `// DFS Iterative using Stack
dfsIterative(start) {
  const result = [];
  const visited = new Set();
  const stack = [start];

  while (stack.length > 0) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      // Add neighbors to stack
      const neighbors = this.adjacencyList.get(vertex);
      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (!visited.has(neighbors[i])) {
          stack.push(neighbors[i]);
        }
      }
    }
  }

  return result;
}

console.log(graph.dfsIterative("A"));
// Output: ["A", "B", "D", "E", "C", "F"]

// Time: O(V + E), Space: O(V)
// Iterative avoids potential stack overflow`
        },
        {
          type: "content",
          title: "Breadth-First Search (BFS)",
          points: [
            "Explore all neighbors before going deeper",
            "Uses queue data structure",
            "**Applications**: Shortest path (unweighted), level-order traversal",
            "Finds shortest path in unweighted graphs",
            "Time: O(V + E), Space: O(V)",
            "Better for finding shortest path"
          ]
        },
        {
          type: "code",
          title: "BFS Implementation",
          description: "Breadth-First Search using queue",
          code: `// BFS using Queue
bfs(start) {
  const result = [];
  const visited = new Set();
  const queue = [start];

  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);

    // Visit all neighbors
    const neighbors = this.adjacencyList.get(vertex);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

console.log(graph.bfs("A"));
// Output: ["A", "B", "C", "D", "E", "F"]
// Visits level by level

// Time: O(V + E), Space: O(V)

// BFS with levels
bfsWithLevels(start) {
  const visited = new Set([start]);
  const queue = [[start, 0]];  // [vertex, level]
  const levels = {};

  while (queue.length > 0) {
    const [vertex, level] = queue.shift();
    
    if (!levels[level]) levels[level] = [];
    levels[level].push(vertex);

    for (let neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, level + 1]);
      }
    }
  }

  return levels;
}`
        },
        {
          type: "code",
          title: "Shortest Path - Unweighted Graph",
          description: "Find shortest path using BFS",
          code: `// Find shortest path between two vertices
shortestPath(start, end) {
  const visited = new Set([start]);
  const queue = [[start, [start]]];  // [vertex, path]

  while (queue.length > 0) {
    const [vertex, path] = queue.shift();

    // Found the destination
    if (vertex === end) {
      return path;
    }

    // Explore neighbors
    for (let neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }

  return null;  // No path exists
}

// Usage
const path = graph.shortestPath("A", "F");
console.log(path);  // ["A", "B", "D", "F"]
console.log("Distance:", path.length - 1);  // 3

// Time: O(V + E), Space: O(V)`
        },
        {
          type: "content",
          title: "Dijkstra's Algorithm",
          points: [
            "Find shortest path in weighted graphs",
            "Works only with non-negative weights",
            "Uses priority queue (min-heap) for efficiency",
            "**Greedy algorithm**: Picks closest unvisited vertex",
            "Time: O((V + E) log V) with min-heap",
            "Applications: GPS navigation, network routing"
          ]
        },
        {
          type: "code",
          title: "Dijkstra's Algorithm - Implementation",
          description: "Shortest path in weighted graph",
          code: `// Dijkstra's Algorithm
dijkstra(start, end) {
  const distances = {};
  const previous = {};
  const pq = new MinPriorityQueue();

  // Initialize distances
  for (let vertex of this.adjacencyList.keys()) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    previous[vertex] = null;
  }

  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const current = pq.dequeue().element;

    if (current === end) {
      // Build path
      const path = [];
      let temp = end;
      while (temp) {
        path.push(temp);
        temp = previous[temp];
      }
      return { 
        path: path.reverse(), 
        distance: distances[end] 
      };
    }

    // Check neighbors
    for (let neighbor of this.adjacencyList.get(current)) {
      const newDist = distances[current] + neighbor.weight;

      if (newDist < distances[neighbor.node]) {
        distances[neighbor.node] = newDist;
        previous[neighbor.node] = current;
        pq.enqueue(neighbor.node, newDist);
      }
    }
  }

  return { path: null, distance: Infinity };
}

// Time: O((V + E) log V), Space: O(V)`
        },
        {
          type: "code",
          title: "Dijkstra with Simple Priority Queue",
          description: "Implementation without external library",
          code: `// Simple Priority Queue for Dijkstra
class SimplePriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

// Usage with weighted graph
const wg = new WeightedGraph();
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("B", "E", 3);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "E", 3);
wg.addEdge("D", "F", 1);
wg.addEdge("E", "F", 1);

const result = wg.dijkstra("A", "E");
console.log("Path:", result.path);       // ["A", "C", "D", "F", "E"]
console.log("Distance:", result.distance); // 6`
        },
        {
          type: "content",
          title: "Minimum Spanning Tree (MST)",
          points: [
            "Tree connecting all vertices with minimum total edge weight",
            "No cycles, connects all vertices",
            "Two main algorithms: **Prim's** and **Kruskal's**",
            "Applications: Network design, circuit wiring, clustering",
            "**Prim's**: Grows tree from single vertex",
            "**Kruskal's**: Adds cheapest edges, avoids cycles"
          ]
        },
        {
          type: "code",
          title: "Prim's Algorithm - MST",
          description: "Build MST starting from a vertex",
          code: `// Prim's Algorithm for MST
primsAlgorithm(start) {
  const mst = [];
  const visited = new Set([start]);
  const edges = [];

  // Add all edges from start vertex
  for (let neighbor of this.adjacencyList.get(start)) {
    edges.push({
      from: start,
      to: neighbor.node,
      weight: neighbor.weight
    });
  }

  while (visited.size < this.adjacencyList.size) {
    // Sort edges by weight
    edges.sort((a, b) => a.weight - b.weight);

    // Find smallest edge to unvisited vertex
    let minEdge = null;
    let edgeIndex = 0;

    for (let i = 0; i < edges.length; i++) {
      if (!visited.has(edges[i].to)) {
        minEdge = edges[i];
        edgeIndex = i;
        break;
      }
    }

    if (!minEdge) break;

    // Add edge to MST
    mst.push(minEdge);
    visited.add(minEdge.to);
    edges.splice(edgeIndex, 1);

    // Add new edges
    for (let neighbor of this.adjacencyList.get(minEdge.to)) {
      if (!visited.has(neighbor.node)) {
        edges.push({
          from: minEdge.to,
          to: neighbor.node,
          weight: neighbor.weight
        });
      }
    }
  }

  return mst;
}

// Time: O(E log V), Space: O(V)`
        },
        {
          type: "code",
          title: "Kruskal's Algorithm - MST",
          description: "Build MST by adding smallest edges",
          code: `// Union-Find for Kruskal's Algorithm
class UnionFind {
  constructor(size) {
    this.parent = Array(size).fill(0).map((_, i) => i);
    this.rank = Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }
}

// Kruskal's Algorithm
kruskalsAlgorithm() {
  const edges = [];
  const vertices = new Map();
  let idx = 0;

  // Map vertices to indices
  for (let vertex of this.adjacencyList.keys()) {
    vertices.set(vertex, idx++);
  }

  // Collect all edges
  const seen = new Set();
  for (let [from, neighbors] of this.adjacencyList) {
    for (let neighbor of neighbors) {
      const edgeKey = [from, neighbor.node].sort().join('-');
      if (!seen.has(edgeKey)) {
        edges.push({ from, to: neighbor.node, weight: neighbor.weight });
        seen.add(edgeKey);
      }
    }
  }

  // Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);

  const uf = new UnionFind(vertices.size);
  const mst = [];

  for (let edge of edges) {
    const u = vertices.get(edge.from);
    const v = vertices.get(edge.to);

    if (uf.union(u, v)) {
      mst.push(edge);
    }
  }

  return mst;
}`
        },
        {
          type: "code",
          title: "Cycle Detection in Graph",
          description: "Detect cycles using DFS",
          code: `// Detect cycle in undirected graph
hasCycleUndirected() {
  const visited = new Set();

  const dfs = (vertex, parent) => {
    visited.add(vertex);

    for (let neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, vertex)) return true;
      } else if (neighbor !== parent) {
        return true;  // Cycle found
      }
    }

    return false;
  };

  for (let vertex of this.adjacencyList.keys()) {
    if (!visited.has(vertex)) {
      if (dfs(vertex, null)) return true;
    }
  }

  return false;
}

// Detect cycle in directed graph
hasCycleDirected() {
  const visited = new Set();
  const recStack = new Set();

  const dfs = (vertex) => {
    visited.add(vertex);
    recStack.add(vertex);

    for (let neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      } else if (recStack.has(neighbor)) {
        return true;  // Back edge (cycle)
      }
    }

    recStack.delete(vertex);
    return false;
  };

  for (let vertex of this.adjacencyList.keys()) {
    if (!visited.has(vertex)) {
      if (dfs(vertex)) return true;
    }
  }

  return false;
}`
        },
        {
          type: "code",
          title: "Topological Sort",
          description: "Linear ordering of vertices in directed acyclic graph",
          code: `// Topological Sort using DFS
topologicalSort() {
  const visited = new Set();
  const stack = [];

  const dfs = (vertex) => {
    visited.add(vertex);

    for (let neighbor of this.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    // Add to stack after visiting all neighbors
    stack.push(vertex);
  };

  // Visit all vertices
  for (let vertex of this.adjacencyList.keys()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  // Return reversed stack
  return stack.reverse();
}

// Example: Course prerequisites
const courses = new DirectedGraph();
courses.addEdge("Data Structures", "Algorithms");
courses.addEdge("Intro to CS", "Data Structures");
courses.addEdge("Intro to CS", "Databases");
courses.addEdge("Databases", "Web Dev");

console.log(courses.topologicalSort());
// ["Intro to CS", "Data Structures", "Algorithms", "Databases", "Web Dev"]

// Time: O(V + E), Space: O(V)`
        },
        {
          type: "content",
          title: "Time & Space Complexity Summary",
          points: [
            "**DFS/BFS**: O(V + E) time, O(V) space",
            "**Dijkstra**: O((V + E) log V) with min-heap",
            "**Prim's MST**: O(E log V) with priority queue",
            "**Kruskal's MST**: O(E log E) for sorting edges",
            "**Topological Sort**: O(V + E) time, O(V) space",
            "**Cycle Detection**: O(V + E) time, O(V) space"
          ]
        },
        {
          type: "content",
          title: "Practice Problems",
          points: [
            "1. Number of islands (2D grid)",
            "2. Clone a graph",
            "3. Course schedule (topological sort)",
            "4. Network delay time (Dijkstra)",
            "5. Word ladder problem",
            "6. Minimum spanning tree cost",
            "7. Detect cycle in directed graph"
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Greedy & Dynamic Programming",
      duration: "1 hour",
      slides: [
        {
          type: "title",
          title: "Greedy & Dynamic Programming",
          subtitle: "Optimization Algorithms in JavaScript",
          description: "Master problem-solving with optimal substructure"
        },
        {
          type: "content",
          title: "What is Greedy Algorithm?",
          points: [
            "Makes locally optimal choice at each step",
            "Hopes local optimum leads to global optimum",
            "**Fast**: One pass through data usually",
            "**Simple**: Easy to code and understand",
            "Doesn't always give optimal solution",
            "Works when: Problem has greedy choice property"
          ]
        },
        {
          type: "content",
          title: "Greedy vs Dynamic Programming",
          points: [
            "**Greedy**: Makes irrevocable choices, no backtracking",
            "**DP**: Explores all possibilities, picks best",
            "**Greedy**: Faster, less memory",
            "**DP**: Slower but guarantees optimal solution",
            "Use greedy when local optimum = global optimum",
            "Use DP when need to consider all subproblems"
          ]
        },
        {
          type: "code",
          title: "Greedy - Activity Selection",
          description: "Select maximum non-overlapping activities",
          code: `// Activity Selection Problem
// Select max number of non-overlapping activities

function activitySelection(activities) {
  // Sort by end time
  activities.sort((a, b) => a.end - b.end);
  
  const selected = [activities[0]];
  let lastEnd = activities[0].end;
  
  for (let i = 1; i < activities.length; i++) {
    // If current starts after last selected ends
    if (activities[i].start >= lastEnd) {
      selected.push(activities[i]);
      lastEnd = activities[i].end;
    }
  }
  
  return selected;
}

// Usage
const activities = [
  { name: 'A', start: 1, end: 3 },
  { name: 'B', start: 2, end: 4 },
  { name: 'C', start: 3, end: 5 },
  { name: 'D', start: 0, end: 6 },
  { name: 'E', start: 5, end: 7 },
  { name: 'F', start: 8, end: 9 }
];

console.log(activitySelection(activities));
// Output: [A, C, E, F] - Maximum 4 activities

// Time: O(n log n), Space: O(1)`
        },
        {
          type: "code",
          title: "Greedy - Fractional Knapsack",
          description: "Maximize value with weight constraint",
          code: `// Fractional Knapsack Problem
// Can take fraction of items

function fractionalKnapsack(items, capacity) {
  // Calculate value per weight ratio
  items.forEach(item => {
    item.ratio = item.value / item.weight;
  });
  
  // Sort by ratio (descending)
  items.sort((a, b) => b.ratio - a.ratio);
  
  let totalValue = 0;
  let remainingCapacity = capacity;
  
  for (let item of items) {
    if (remainingCapacity >= item.weight) {
      // Take full item
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      // Take fraction
      totalValue += item.ratio * remainingCapacity;
      break;
    }
  }
  
  return totalValue;
}

// Usage
const items = [
  { weight: 10, value: 60 },  // ratio: 6
  { weight: 20, value: 100 }, // ratio: 5
  { weight: 30, value: 120 }  // ratio: 4
];

console.log(fractionalKnapsack(items, 50));
// Output: 240 (60 + 100 + 80)

// Time: O(n log n), Space: O(1)`
        },
        {
          type: "code",
          title: "Greedy - Coin Change (Greedy)",
          description: "Make change using minimum coins",
          code: `// Coin Change - Greedy Approach
// Works only for some coin systems (like US coins)

function coinChangeGreedy(coins, amount) {
  // Sort coins in descending order
  coins.sort((a, b) => b - a);
  
  const result = [];
  let remaining = amount;
  
  for (let coin of coins) {
    while (remaining >= coin) {
      result.push(coin);
      remaining -= coin;
    }
  }
  
  return remaining === 0 ? result : null;
}

// Usage
const coins = [25, 10, 5, 1];  // US coins
console.log(coinChangeGreedy(coins, 63));
// Output: [25, 25, 10, 1, 1, 1]

// Time: O(n log n + amount), Space: O(1)

// Note: Greedy doesn't always work
// Example: coins = [1, 3, 4], amount = 6
// Greedy: [4, 1, 1] = 3 coins
// Optimal: [3, 3] = 2 coins
// Need DP for optimal solution!`
        },
        {
          type: "code",
          title: "Greedy - Huffman Coding",
          description: "Data compression using binary tree",
          code: `// Huffman Coding - Optimal prefix codes
class HuffmanNode {
  constructor(char, freq) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}

function huffmanCoding(text) {
  // Count frequencies
  const freq = {};
  for (let char of text) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  // Create min heap of nodes
  const heap = Object.entries(freq).map(([char, f]) => 
    new HuffmanNode(char, f)
  );
  
  // Build Huffman tree
  while (heap.length > 1) {
    heap.sort((a, b) => a.freq - b.freq);
    
    const left = heap.shift();
    const right = heap.shift();
    
    const parent = new HuffmanNode(null, left.freq + right.freq);
    parent.left = left;
    parent.right = right;
    
    heap.push(parent);
  }
  
  // Generate codes
  const codes = {};
  function generateCodes(node, code = '') {
    if (!node) return;
    if (node.char) codes[node.char] = code;
    generateCodes(node.left, code + '0');
    generateCodes(node.right, code + '1');
  }
  
  generateCodes(heap[0]);
  return codes;
}

console.log(huffmanCoding("hello"));
// Output: { h: '00', e: '01', l: '1', o: '10' }`
        },
        {
          type: "content",
          title: "Dynamic Programming (DP)",
          points: [
            "Break problem into overlapping subproblems",
            "Store results to avoid recomputation",
            "**Memoization**: Top-down with recursion",
            "**Tabulation**: Bottom-up with iteration",
            "Requires: Optimal substructure + overlapping subproblems",
            "Applications: Optimization, counting, decision problems"
          ]
        },
        {
          type: "content",
          title: "DP Steps to Solve",
          points: [
            "1. **Identify**: Can be broken into subproblems?",
            "2. **Recurrence**: Define relationship between problems",
            "3. **Base Case**: Simplest subproblem solution",
            "4. **Memoize/Tabulate**: Store intermediate results",
            "5. **Build Up**: Solve from base to original problem",
            "6. **Extract Solution**: Get final answer"
          ]
        },
        {
          type: "code",
          title: "DP - Fibonacci (Classic Example)",
          description: "Comparing approaches",
          code: `// 1. Naive Recursion - O(2^n)
function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// 2. Memoization (Top-Down DP) - O(n)
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// 3. Tabulation (Bottom-Up DP) - O(n)
function fibTab(n) {
  if (n <= 1) return n;
  
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// 4. Space Optimized - O(1) space
function fibOptimized(n) {
  if (n <= 1) return n;
  
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

console.log(fibMemo(10));      // 55
console.log(fibTab(10));       // 55
console.log(fibOptimized(10)); // 55`
        },
        {
          type: "code",
          title: "DP - Climbing Stairs",
          description: "How many ways to reach top",
          code: `// Climbing Stairs Problem
// Can climb 1 or 2 steps at a time
// How many distinct ways to climb n steps?

function climbStairs(n) {
  if (n <= 2) return n;
  
  const dp = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
    // Ways to reach step i = 
    // (ways to i-1) + (ways to i-2)
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}

// Space optimized
function climbStairsOptimized(n) {
  if (n <= 2) return n;
  
  let oneStep = 2, twoSteps = 1;
  
  for (let i = 3; i <= n; i++) {
    const current = oneStep + twoSteps;
    twoSteps = oneStep;
    oneStep = current;
  }
  
  return oneStep;
}

console.log(climbStairs(5));  // 8 ways
// [1,1,1,1,1], [1,1,1,2], [1,1,2,1], [1,2,1,1],
// [2,1,1,1], [1,2,2], [2,1,2], [2,2,1]

// Time: O(n), Space: O(1)`
        },
        {
          type: "code",
          title: "DP - Coin Change (Optimal)",
          description: "Minimum coins to make amount",
          code: `// Coin Change - Minimum Coins
// DP gives optimal solution (unlike greedy)

function coinChange(coins, amount) {
  // dp[i] = min coins needed for amount i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;  // Base case: 0 amount needs 0 coins
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Usage
console.log(coinChange([1, 3, 4], 6));  // 2 ([3, 3])
console.log(coinChange([2], 3));        // -1 (impossible)
console.log(coinChange([1, 2, 5], 11)); // 3 ([5, 5, 1])

// Time: O(amount × coins), Space: O(amount)

// With path reconstruction
function coinChangeWithPath(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  const parent = Array(amount + 1).fill(-1);
  dp[0] = 0;
  
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin && dp[i - coin] + 1 < dp[i]) {
        dp[i] = dp[i - coin] + 1;
        parent[i] = coin;
      }
    }
  }
  
  if (dp[amount] === Infinity) return null;
  
  // Reconstruct path
  const path = [];
  let curr = amount;
  while (curr > 0) {
    path.push(parent[curr]);
    curr -= parent[curr];
  }
  
  return { minCoins: dp[amount], coins: path };
}`
        },
        {
          type: "code",
          title: "DP - 0/1 Knapsack",
          description: "Maximize value without fraction",
          code: `// 0/1 Knapsack Problem
// Can't break items (take all or nothing)

function knapsack(items, capacity) {
  const n = items.length;
  // dp[i][w] = max value with first i items, capacity w
  const dp = Array(n + 1).fill(0)
    .map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    
    for (let w = 0; w <= capacity; w++) {
      if (weight <= w) {
        // Max of: include item or exclude item
        dp[i][w] = Math.max(
          dp[i - 1][w],              // Exclude
          dp[i - 1][w - weight] + value  // Include
        );
      } else {
        dp[i][w] = dp[i - 1][w];  // Can't include
      }
    }
  }
  
  return dp[n][capacity];
}

// Usage
const items = [
  { weight: 2, value: 3 },
  { weight: 3, value: 4 },
  { weight: 4, value: 5 },
  { weight: 5, value: 6 }
];

console.log(knapsack(items, 5));  // 7 (items 0 and 1)

// Time: O(n × capacity), Space: O(n × capacity)
// Can optimize space to O(capacity)`
        },
        {
          type: "code",
          title: "DP - Longest Common Subsequence",
          description: "Find longest common subsequence",
          code: `// Longest Common Subsequence (LCS)
function lcs(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill(0)
    .map(() => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // Characters match
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Take max from top or left
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}

// With path reconstruction
function lcsWithString(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill(0)
    .map(() => Array(n + 1).fill(0));
  
  // Build DP table (same as above)
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  // Reconstruct LCS
  let i = m, j = n, lcs = '';
  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      lcs = text1[i - 1] + lcs;
      i--; j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  
  return { length: dp[m][n], sequence: lcs };
}

console.log(lcs("abcde", "ace"));  // 3
console.log(lcsWithString("abcde", "ace"));
// { length: 3, sequence: "ace" }`
        },
        {
          type: "code",
          title: "DP - Longest Increasing Subsequence",
          description: "Find longest increasing subsequence",
          code: `// Longest Increasing Subsequence (LIS)
function lis(nums) {
  if (nums.length === 0) return 0;
  
  const n = nums.length;
  // dp[i] = length of LIS ending at index i
  const dp = Array(n).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  
  return Math.max(...dp);
}

console.log(lis([10, 9, 2, 5, 3, 7, 101, 18]));
// Output: 4 ([2, 3, 7, 101] or [2, 3, 7, 18])

// Time: O(n²), Space: O(n)

// Optimized with Binary Search - O(n log n)
function lisOptimized(nums) {
  const tails = [];
  
  for (let num of nums) {
    let left = 0, right = tails.length;
    
    // Binary search
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }
  
  return tails.length;
}

console.log(lisOptimized([10, 9, 2, 5, 3, 7, 101, 18]));
// Output: 4`
        },
        {
          type: "code",
          title: "DP - Edit Distance",
          description: "Minimum operations to convert strings",
          code: `// Edit Distance (Levenshtein Distance)
// Minimum operations: insert, delete, replace

function editDistance(word1, word2) {
  const m = word1.length, n = word2.length;
  const dp = Array(m + 1).fill(0)
    .map(() => Array(n + 1).fill(0));
  
  // Base cases
  for (let i = 0; i <= m; i++) dp[i][0] = i;  // Delete all
  for (let j = 0; j <= n; j++) dp[0][j] = j;  // Insert all
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // Characters match, no operation needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],      // Delete
          dp[i][j - 1],      // Insert
          dp[i - 1][j - 1]   // Replace
        );
      }
    }
  }
  
  return dp[m][n];
}

console.log(editDistance("horse", "ros"));  // 3
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

console.log(editDistance("intention", "execution"));  // 5

// Time: O(m × n), Space: O(m × n)`
        },
        {
          type: "code",
          title: "DP - Matrix Chain Multiplication",
          description: "Optimal parenthesization",
          code: `// Matrix Chain Multiplication
// Find minimum cost to multiply chain of matrices

function matrixChainOrder(dims) {
  const n = dims.length - 1;  // Number of matrices
  // dp[i][j] = min cost to multiply matrices i to j
  const dp = Array(n).fill(0)
    .map(() => Array(n).fill(0));
  
  // Length of chain
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1;
      dp[i][j] = Infinity;
      
      // Try all possible splits
      for (let k = i; k < j; k++) {
        const cost = dp[i][k] + dp[k + 1][j] + 
                     dims[i] * dims[k + 1] * dims[j + 1];
        dp[i][j] = Math.min(dp[i][j], cost);
      }
    }
  }
  
  return dp[0][n - 1];
}

// Example: matrices A(10×20), B(20×30), C(30×40)
// dims = [10, 20, 30, 40]
console.log(matrixChainOrder([10, 20, 30, 40]));
// Output: 18000
// (A×B)×C = 10×20×30 + 10×30×40 = 18000
// A×(B×C) = 20×30×40 + 10×20×40 = 32000

// Time: O(n³), Space: O(n²)`
        },
        {
          type: "content",
          title: "Time & Space Complexity",
          points: [
            "**Greedy**: O(n) to O(n log n) typically",
            "**Fibonacci DP**: O(n) time, O(n) or O(1) space",
            "**Coin Change**: O(n × amount) time, O(amount) space",
            "**Knapsack**: O(n × capacity) time and space",
            "**LCS**: O(m × n) time and space",
            "**Edit Distance**: O(m × n) time and space"
          ]
        },
        {
          type: "content",
          title: "Practice Problems",
          points: [
            "1. House Robber problem",
            "2. Maximum subarray sum (Kadane's)",
            "3. Partition Equal Subset Sum",
            "4. Word Break problem",
            "5. Unique paths in grid",
            "6. Palindrome partitioning",
            "7. Burst balloons"
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Mock Tests & Debugging",
      duration: "1 hour",
      slides: [
        {
          type: "title",
          title: "Mock Tests & Debugging",
          subtitle: "Practice Problems & Debugging Techniques",
          description: "Test your knowledge and master debugging"
        },
        {
          type: "content",
          title: "Problem-Solving Approach",
          points: [
            "1. **Understand**: Read problem carefully, clarify doubts",
            "2. **Examples**: Work through examples, edge cases",
            "3. **Approach**: Choose data structure & algorithm",
            "4. **Pseudocode**: Write high-level solution",
            "5. **Code**: Implement with clean, readable code",
            "6. **Test**: Verify with multiple test cases",
            "7. **Optimize**: Analyze time/space complexity"
          ]
        },
        {
          type: "content",
          title: "Common Patterns",
          points: [
            "**Two Pointers**: Sorted arrays, palindromes",
            "**Sliding Window**: Subarray/substring problems",
            "**Fast & Slow Pointers**: Cycle detection",
            "**HashMap/Set**: Frequency counting, lookups",
            "**Stack**: Parentheses, next greater element",
            "**Queue**: BFS, level-order traversal",
            "**Recursion/Backtracking**: Permutations, combinations"
          ]
        },
        {
          type: "code",
          title: "Mock Test - Problem 1",
          description: "Two Sum - HashMap approach",
          code: `// Problem: Find two numbers that add up to target
// Return indices of the two numbers

function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));    // [0, 1]
console.log(twoSum([3, 2, 4], 6));         // [1, 2]
console.log(twoSum([3, 3], 6));            // [0, 1]

// Edge cases
console.log(twoSum([1], 2));               // []
console.log(twoSum([-1, -2, -3], -5));     // [1, 2]

// Time: O(n), Space: O(n)

// Analysis:
// ✓ Single pass through array
// ✓ HashMap for O(1) lookup
// ✓ Handles duplicates correctly
// ✓ Works with negative numbers`
        },
        {
          type: "code",
          title: "Mock Test - Problem 2",
          description: "Valid Parentheses - Stack approach",
          code: `// Problem: Check if parentheses string is valid
// Valid: (), [], {}, ([{}])
// Invalid: (], ([)]

function isValidParentheses(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      // Opening bracket
      stack.push(char);
    } else {
      // Closing bracket
      if (stack.length === 0) return false;
      if (stack.pop() !== pairs[char]) return false;
    }
  }
  
  return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()"));        // true
console.log(isValidParentheses("()[]{}"));    // true
console.log(isValidParentheses("(]"));        // false
console.log(isValidParentheses("([)]"));      // false
console.log(isValidParentheses("{[]}"));      // true

// Edge cases
console.log(isValidParentheses(""));          // true
console.log(isValidParentheses("("));         // false
console.log(isValidParentheses(")"));         // false

// Time: O(n), Space: O(n)`
        },
        {
          type: "code",
          title: "Mock Test - Problem 3",
          description: "Reverse Linked List",
          code: `// Problem: Reverse a singly linked list
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: 5 -> 4 -> 3 -> 2 -> 1

// Iterative approach
function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}

// Recursive approach
function reverseListRecursive(head) {
  if (!head || !head.next) {
    return head;
  }
  
  const newHead = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  
  return newHead;
}

// Test
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const reversed = reverseList(list.head);
// Result: 5 -> 4 -> 3 -> 2 -> 1

// Time: O(n), Space: O(1) iterative, O(n) recursive`
        },
        {
          type: "code",
          title: "Mock Test - Problem 4",
          description: "Binary Tree Level Order Traversal",
          code: `// Problem: Return level-by-level values
// Input:     3
//          /   \\
//         9    20
//             /  \\
//            15   7
// Output: [[3], [9, 20], [15, 7]]

function levelOrder(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.value);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    result.push(currentLevel);
  }
  
  return result;
}

// Test case
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrder(root));
// Output: [[3], [9, 20], [15, 7]]

// Time: O(n), Space: O(n)`
        },
        {
          type: "code",
          title: "Mock Test - Problem 5",
          description: "Maximum Subarray Sum (Kadane's Algorithm)",
          code: `// Problem: Find contiguous subarray with largest sum
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6 (subarray [4,-1,2,1])

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    // Either extend current subarray or start new
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

// With subarray indices
function maxSubArrayWithIndices(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let start = 0, end = 0, tempStart = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] < nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }
    
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }
  
  return { 
    maxSum, 
    subarray: nums.slice(start, end + 1) 
  };
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));  // 6
console.log(maxSubArray([1]));                      // 1
console.log(maxSubArray([5,4,-1,7,8]));             // 23

// Time: O(n), Space: O(1)`
        },
        {
          type: "code",
          title: "Mock Test - Problem 6",
          description: "Merge Intervals",
          code: `// Problem: Merge overlapping intervals
// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  
  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];
    
    if (current[0] <= lastMerged[1]) {
      // Overlapping, merge
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // Non-overlapping, add new interval
      merged.push(current);
    }
  }
  
  return merged;
}

// Test cases
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
// Output: [[1,6],[8,10],[15,18]]

console.log(mergeIntervals([[1,4],[4,5]]));
// Output: [[1,5]]

console.log(mergeIntervals([[1,4],[0,4]]));
// Output: [[0,4]]

// Time: O(n log n), Space: O(n)`
        },
        {
          type: "content",
          title: "Debugging Techniques",
          points: [
            "**Console Logging**: Print variables at key points",
            "**Debugger**: Use browser/VSCode debugger",
            "**Rubber Duck**: Explain code to understand it",
            "**Edge Cases**: Test empty, single element, duplicates",
            "**Boundary Values**: Min/max values, overflow",
            "**Error Messages**: Read carefully, Google if needed",
            "**Simplify**: Break complex function into smaller parts"
          ]
        },
        {
          type: "code",
          title: "Debugging Example",
          description: "Common mistakes and fixes",
          code: `// Common Bug #1: Off-by-one errors
// Wrong:
for (let i = 0; i < arr.length - 1; i++) {  // Misses last element!
  console.log(arr[i]);
}

// Correct:
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Common Bug #2: Infinite loops
// Wrong:
let i = 0;
while (i < 10) {
  console.log(i);
  // Forgot to increment i!
}

// Correct:
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Common Bug #3: Reference vs Value
// Wrong:
const original = [1, 2, 3];
const copy = original;  // Both point to same array!
copy.push(4);
console.log(original);  // [1, 2, 3, 4] - Modified!

// Correct:
const original = [1, 2, 3];
const copy = [...original];  // Create new array
copy.push(4);
console.log(original);  // [1, 2, 3] - Unchanged

// Common Bug #4: Async/Await
// Wrong:
function getData() {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      return data;  // This returns to Promise, not to caller!
    });
}

// Correct:
async function getData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  return data;  // Now returns data properly
}`
        },
        {
          type: "code",
          title: "Performance Debugging",
          description: "Identifying and fixing slow code",
          code: `// Debugging Time Complexity
// Slow: O(n²) - Nested loops
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// Fast: O(n) - Using Set
function hasDuplicatesFast(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

// Even faster: O(n)
function hasDuplicatesFastest(arr) {
  return new Set(arr).size !== arr.length;
}

// Benchmarking
console.time('Slow');
hasDuplicates(Array.from({length: 10000}, (_, i) => i));
console.timeEnd('Slow');  // ~100ms

console.time('Fast');
hasDuplicatesFast(Array.from({length: 10000}, (_, i) => i));
console.timeEnd('Fast');  // ~2ms

// Memory Debugging
console.log('Memory:', process.memoryUsage());

// Profile with Chrome DevTools:
// 1. Open DevTools -> Performance tab
// 2. Record profile
// 3. Analyze flame graph`
        },
        {
          type: "content",
          title: "Testing Strategies",
          points: [
            "**Unit Tests**: Test individual functions",
            "**Edge Cases**: Empty, null, single element",
            "**Boundary Values**: Max int, min int, overflow",
            "**Performance**: Large inputs, worst case",
            "**Negative Tests**: Invalid inputs, errors",
            "**Regression Tests**: Previously fixed bugs",
            "**Integration**: Multiple components together"
          ]
        },
        {
          type: "code",
          title: "Writing Test Cases",
          description: "Comprehensive testing approach",
          code: `// Example: Testing binary search
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}

// Test Suite
function testBinarySearch() {
  // Normal cases
  console.assert(binarySearch([1,2,3,4,5], 3) === 2, "Find middle");
  console.assert(binarySearch([1,2,3,4,5], 1) === 0, "Find first");
  console.assert(binarySearch([1,2,3,4,5], 5) === 4, "Find last");
  
  // Edge cases
  console.assert(binarySearch([], 1) === -1, "Empty array");
  console.assert(binarySearch([1], 1) === 0, "Single element found");
  console.assert(binarySearch([1], 2) === -1, "Single element not found");
  
  // Not found
  console.assert(binarySearch([1,2,3,4,5], 6) === -1, "Larger than max");
  console.assert(binarySearch([1,2,3,4,5], 0) === -1, "Smaller than min");
  
  // Duplicates
  console.assert(binarySearch([1,2,2,2,3], 2) >= 1 && 
                 binarySearch([1,2,2,2,3], 2) <= 3, "Find duplicate");
  
  // Large array
  const large = Array.from({length: 1000000}, (_, i) => i);
  console.assert(binarySearch(large, 500000) === 500000, "Large array");
  
  console.log("All tests passed!");
}

testBinarySearch();`
        },
        {
          type: "content",
          title: "Interview Tips",
          points: [
            "1. **Communicate**: Think out loud, explain approach",
            "2. **Ask Questions**: Clarify requirements, constraints",
            "3. **Start Simple**: Brute force first, then optimize",
            "4. **Test as You Go**: Verify logic with examples",
            "5. **Time/Space Analysis**: State complexity",
            "6. **Handle Edge Cases**: Don't assume perfect input",
            "7. **Clean Code**: Readable variable names, comments"
          ]
        },
        {
          type: "content",
          title: "Final Practice Problems",
          points: [
            "1. Implement LRU Cache",
            "2. Serialize and deserialize binary tree",
            "3. Find median of two sorted arrays",
            "4. Trapping rain water problem",
            "5. Regular expression matching",
            "6. Longest palindromic substring",
            "7. Design Twitter/Instagram feed"
          ]
        },
        {
          type: "content",
          title: "Resources & Next Steps",
          points: [
            "**Practice Sites**: LeetCode, HackerRank, CodeSignal",
            "**Books**: Cracking the Coding Interview, CTCI",
            "**Visualizers**: VisuAlgo, Algorithm Visualizer",
            "**Communities**: Reddit r/cscareerquestions, Discord",
            "**Mock Interviews**: Pramp, interviewing.io",
            "**System Design**: Educative.io, Grokking series",
            "**Keep Coding**: Consistency is key! 🚀"
          ]
        }
      ]
    }
  ]
};
