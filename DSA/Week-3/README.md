# Data Structures & Algorithms Presentation Website

A comprehensive, interactive React-based presentation covering **Data Structures & Algorithms in JavaScript**. Features smooth animations, minimalistic design, and complete theoretical + practical content.

## 🚀 Features

- **🎨 Beautiful Animations**: Powered by Framer Motion for smooth slide transitions
- **📚 Comprehensive Content**: 6 major topics covering all essential DSA concepts
- **💻 Code Syntax Highlighting**: PrismJS for beautiful code display
- **⌨️ Keyboard Navigation**: Arrow keys, space, Home/End support
- **📊 Progress Tracking**: Visual progress bar and slide counter
- **🎯 Topic Navigation**: Easy switching between topics
- **📱 Responsive Design**: Works on all screen sizes
- **✨ Minimalistic UI**: Clean, professional, PowerPoint-like presentation

## 📖 Topics Covered

### 1. **Linked Lists** (1 hour)
- Node implementation
- Singly, Doubly, Circular lists
- Insert, Delete, Search operations
- Time/Space complexity analysis
- Practice problems

### 2. **Recursion & Backtracking** (1 hour)
- Recursion fundamentals
- Factorial, Fibonacci, String reversal
- Backtracking template
- N-Queens, Sudoku solver
- Subsets, Permutations, Combinations
- Practice problems

### 3. **Trees (BST, Trie, Heap)** (1 hour)
- Binary Search Tree operations
- Tree traversals (DFS, BFS)
- Trie implementation & auto-complete
- Min/Max Heap
- Priority Queue
- Practice problems

### 4. **Graphs (DFS, BFS, Dijkstra, MST)** (1 hour)
- Graph representations
- Depth-First Search (DFS)
- Breadth-First Search (BFS)
- Dijkstra's shortest path algorithm
- Prim's & Kruskal's MST algorithms
- Topological sort, Cycle detection
- Practice problems

### 5. **Greedy & Dynamic Programming** (1 hour)
- Greedy algorithm patterns
- Activity selection, Fractional knapsack
- DP fundamentals (Memoization & Tabulation)
- Coin change, 0/1 Knapsack
- LCS, LIS, Edit Distance
- Matrix chain multiplication
- Practice problems

### 6. **Mock Tests & Debugging** (1 hour)
- Problem-solving approach
- Common coding patterns
- Two Sum, Valid Parentheses
- Linked list reversal
- Maximum subarray (Kadane's)
- Debugging techniques
- Interview tips

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animations
- **PrismJS** - Code syntax highlighting
- **CSS3** - Styling

## 📦 Installation

```bash
# Clone the repository
cd Week-3

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

## ⌨️ Keyboard Shortcuts

- **→ / Space** - Next slide
- **←** - Previous slide
- **Home** - First slide
- **End** - Last slide
- **Hover on topic menu** - See all topics

## 📂 Project Structure

```
src/
├── components/
│   ├── Slide.jsx          # Slide component with animations
│   ├── Slide.css          # Slide styling
│   ├── Navigation.jsx     # Navigation controls
│   └── Navigation.css     # Navigation styling
├── data/
│   └── presentationData.js # All content & code examples
├── App.jsx                # Main application
├── App.css                # Global styles
└── main.jsx               # Entry point
```

## 🎯 Usage

1. Click "Start Presentation" on welcome screen
2. Navigate using arrow keys or navigation buttons
3. Hover over topic menu to switch between topics
4. View progress bar at top and slide counter at bottom
5. Read through theory, examine code examples, and practice problems

## 📝 Content Features

Each topic includes:
- ✅ **Theory slides** - Concept explanations
- ✅ **Code examples** - Complete JavaScript implementations
- ✅ **Complexity analysis** - Time & space complexity
- ✅ **Practice problems** - Real-world coding challenges

## 🎨 Design Philosophy

- **Minimalistic**: Clean, distraction-free design
- **Professional**: PowerPoint-style presentation
- **Readable**: Large fonts, good contrast
- **Smooth**: 60fps animations
- **Accessible**: Keyboard navigation support

## 🚀 Build for Production

```bash
npm run build
npm run preview
```

## 📄 License

Free to use for educational purposes.

## 👨‍💻 Created By

A comprehensive DSA study guide for developers learning algorithms and data structures in JavaScript.

---

**Happy Learning! 🚀📚**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
