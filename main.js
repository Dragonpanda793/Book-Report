

document.addEventListener("DOMContentLoaded", function() {
    const board = document.querySelector('.board');
    const button = document.getElementById('changeColorBtn');
  
    button.addEventListener("click", function() {
      const squares = document.querySelectorAll('.square');
      squares.forEach(square => board.removeChild(square));
      generateBoard();
    });
  
    function generateBoard() {
      const colors1 = ['light1', 'light2', 'light3', 'light4', 'light5', 'light6', 'light7', 'light8'];
      const colors2 = ['dark1', 'dark2', 'dark3', 'dark4', 'dark5', 'dark6', 'dark7', 'dark8'];
      const color1 = colors1[Math.floor(Math.random()*colors1.length)];
      const color2 = colors2[Math.floor(Math.random()*colors2.length)];
  
      function createSquare(row, col) {
        const square = document.createElement('div');
        square.classList.add('square');
        if ((row + col) % 2 === 0) {
          square.classList.add(color1);
        } else {
          square.classList.add(color2);
        }
        square.dataset.row = row;
        square.dataset.col = col;
        return square;
      }
  
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const square = createSquare(i, j);
          if (i === 0 || i === 1 || i === 6 || i === 7) {
            let piece = document.createElement('span');
            if (i === 0 || i === 7) {
              piece.textContent = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'][j];
            } else if (i === 1 || i === 6) {
              piece.textContent = '♟︎';
            }
            square.appendChild(piece);
          }
          board.appendChild(square);
        }
      }
    }
  
    generateBoard();
  });
  

