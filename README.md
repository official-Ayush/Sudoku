# 🧩 Sudoku Solver

A simple **Java-based Sudoku Solver** using the **backtracking algorithm**. This project takes an incomplete Sudoku board and fills it with a valid solution according to Sudoku rules.

---

## 🔍 Features

- Solves any valid 9x9 Sudoku puzzle
- Uses **backtracking algorithm**
- Clean and understandable code structure
- Easy to integrate into other Java applications

---

## 📸 Preview

Input Sudoku:
```
[5, 3, 0, 0, 7, 0, 0, 0, 0]
[6, 0, 0, 1, 9, 5, 0, 0, 0]
[0, 9, 8, 0, 0, 0, 0, 6, 0]
[8, 0, 0, 0, 6, 0, 0, 0, 3]
[4, 0, 0, 8, 0, 3, 0, 0, 1]
[7, 0, 0, 0, 2, 0, 0, 0, 6]
[0, 6, 0, 0, 0, 0, 2, 8, 0]
[0, 0, 0, 4, 1, 9, 0, 0, 5]
[0, 0, 0, 0, 8, 0, 0, 7, 9]
```
Solved Sudoku:
```
[5, 3, 4, 6, 7, 8, 9, 1, 2]
[6, 7, 2, 1, 9, 5, 3, 4, 8]
[1, 9, 8, 3, 4, 2, 5, 6, 7]
[8, 5, 9, 7, 6, 1, 4, 2, 3]
[4, 2, 6, 8, 5, 3, 7, 9, 1]
[7, 1, 3, 9, 2, 4, 8, 5, 6]
[9, 6, 1, 5, 3, 7, 2, 8, 4]
[2, 8, 7, 4, 1, 9, 6, 3, 5]
[3, 4, 5, 2, 8, 6, 1, 7, 9]
```

---

## 🧠 How It Works

- Uses recursion and backtracking to fill cells.
- Checks for validity at each step before placing a number.
- If dead-end is reached, it backtracks and tries other possibilities.

---

## 🛠️ How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/official-Ayush/Sudoku.git
2. Open in your preferred IDE (IntelliJ, Eclipse, VSCode).
3. Run index.html

## 📁 File Structure
```Sudoku/
│
├── Main.java         // Entry point
├── SudokuSolver.java // Backtracking algorithm
└── board[][]         // Example Sudoku board
```
## 📚 Concepts Used
Recursion\
Backtracking\
2D arrays
