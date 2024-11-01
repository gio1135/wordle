const gameBoard = document.getElementById('game-board');

// Game board grid
for (let i = 0; i < 6; i++) { // 6 rows
    for (let j = 0; j < 5; j++) { // 5 columns
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoard.appendChild(cell);
    }
}