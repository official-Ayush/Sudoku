document.addEventListener("DOMContentLoaded", function() {

  const d = new Date().toDateString();
  // console.log(d);
  document.getElementById("date").innerHTML = d;
}); 


function loadContent() {
  // Fetch the content of the "easy.html" file
  fetch("level/easy.html")
    // Convert the response to text
 .then(response => response.text())
    // Set the content of the "hookgame" element to the fetched text
    .then(content => {

      document.getElementById("hookgame").innerHTML = content;

        let time = 0;
        let minutes = 0;
        let timerInterval;
      
        const pauseButton = document.getElementById('pauseButton');
        const timerDisplay = document.getElementById('timerDisplay');
      
        function formatTime(value) {
          return value.toString().padStart(2, '0');
        }
      
        function timer() {
          time++;
          if (time >= 60) {
            time = 0;
            minutes++;
          }
          timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(time)}`;
        }
      
        if (pauseButton && timerDisplay) {
          // Start the timer automatically when the page loads
          timerInterval = setInterval(timer, 1000);
      
          pauseButton.addEventListener('click', () => {
            clearInterval(timerInterval);
          });
        } else {
          console.error('One or more elements with the specified IDs were not found');
        }

        function fetchSudokuPuzzle() {
          fetch('https://sudokubackend-mhtz.onrender.com/api/puzzle-with-solution')
            .then(response => response.json())
            .then(data => {
              const puzzle = data.puzzle;
              const solution = data.solution;
              const timestamp = Date.now();
              
              // Store the puzzle and timestamp in local storage
              localStorage.setItem('sudokuPuzzle', JSON.stringify({ puzzle, solution, timestamp }));
              
              // Display the puzzle and solution
              displaySudoku(puzzle, solution);
            })
            .catch(error => console.error('Error:', error));
        }
        
        function displaySudoku(puzzle, solution) {
          const boardElement = document.getElementById('sudoku-board');
          boardElement.innerHTML = '';
        
          puzzle.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
              const cellElement = document.createElement('div');
              cellElement.classList.add('cell');
              cellElement.textContent = Number(cell) !== 0 ? cell : '';
        
              if (cell !== 0) {
                cellElement.contentEditable = false;
              } else {
                cellElement.contentEditable = true;
                
                // Add paste handler to block non-numeric pastes
                cellElement.addEventListener('paste', (e) => e.preventDefault());
        
                cellElement.addEventListener('input', (event) => {
                  let inputValue = event.target.textContent;
        
                  // Immediately sanitize input (remove non-digits, limit to 1 character)
                  inputValue = inputValue.replace(/[^1-9]/g, '').slice(0, 1);
                  event.target.textContent = inputValue;
        
                  if (!inputValue) {
                    cellElement.classList.remove('correct', 'incorrect');
                    return;
                  }
        
                  const numericValue = parseInt(inputValue);
                  if (numericValue === solution[rowIndex][cellIndex]) {
                    cellElement.classList.add('correct');
                    cellElement.classList.remove('incorrect');
                  } else {
                    cellElement.classList.add('incorrect');
                    cellElement.classList.remove('correct');
                  }
                });
              }
              boardElement.appendChild(cellElement);
            });
          });
          addArrowKeyNavigation();
        }

      function addArrowKeyNavigation() {
          const cells = document.querySelectorAll('.cell');
          let currentIndex = 0; // Start with the first cell

          // Focus the first cell initially
          cells[currentIndex].focus();

          document.addEventListener('keydown', (event) => {
              if (event.key.startsWith('Arrow')) {
                  event.preventDefault(); // Prevent default scrolling behavior
                  const row = Math.floor(currentIndex / 9);
                  const col = currentIndex % 9;

                  switch (event.key) {
                      case 'ArrowRight':
                          if (col < 8) {
                              currentIndex += 1; // Move right
                          }
                          break;
                      case 'ArrowLeft':
                          if (col > 0) {
                              currentIndex -= 1; // Move left
                          }
                          break;
                      case 'ArrowDown':
                          if (row < 8) {
                              currentIndex += 9; // Move down
                          }
                          break;
                      case 'ArrowUp':
                          if (row > 0) {
                              currentIndex -= 9; // Move up
                          }
                          break;
                  }

                  // Focus the new cell
                  cells[currentIndex].focus();
              }
          });
      }
        
        function loadSudoku() {
          const storedData = JSON.parse(localStorage.getItem('sudokuPuzzle'));
          
          if (storedData) {
            const currentTime = Date.now();
            const elapsed = currentTime - storedData.timestamp;
        
            // Check if 24 hours have passed (86400000 milliseconds)
            if (elapsed < 86400000) {
              // Use the stored puzzle
              displaySudoku(storedData.puzzle, storedData.solution);
              return;
            }
          }
          
          // Fetch a new puzzle
          fetchSudokuPuzzle();
        }
        
        // Load the Sudoku puzzle when the page loads
        loadSudoku();
 

// Initialize the board
// createSudokuBoard(initialBoard, solution);
});

  }