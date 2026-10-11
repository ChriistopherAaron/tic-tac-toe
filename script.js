// 1. Gameboard Module (IIFE)
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setCell = (index, marker) => {
        if (index >= 0 && index < 9 && board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setCell, resetBoard };
})();

// 2. Player Factory Function
const Player = (name, marker) => {
    return {name, marker };
};

// 3. Game Controller Module (IIFE)
const GameController = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let isGameOver = false;

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];

    const startGame = (player1Name, player2Name) => {
        players = [
            Player(player1Name || "Player 1", "X"),
            Player(player2Name || "Player 2", "O")
        ];
        currentPlayerIndex = 0;
        isGameOver = false;
        Gameboard.resetBoard();
    };

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const checkWin = (board, marker) => {
        return winPatterns.some(pattern =>
            pattern.every(index => board[index] === marker)
        );
    };

        const checkTie = (board) => {
            return board.every(cell => cell !== "");
        };

        const playTurn = (index) => {
            if (isGameOVer) return;

            const currentMarker = getCurrentPlayer().marker;
            const isMoveValid = Gameboard.setCell(index, currentMarker);

            if (!isMoveValid) return;

            const board = Gameboard.getBoard();

            if (checkWin(board, currentMarker)) {
                isGameOver = true;
                DisplayController.setMessage(`${getCurrentPlayer().name} wins! 🎉`);
                // Handle win logic
            } else if (checkTie(board)) {
                isGameOver = true;
                DisplayController.setMessage("It's a tie! 🤝");
                // Handle tie logic
            } else {
                currentPlayerIndex = (currentPlayerIndex + 1) % 2;
            }
        };

    return { startGame, getCurrentPlayer, playTurn };
})();
