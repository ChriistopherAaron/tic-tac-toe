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