'use client';
import { useState, useEffect } from 'react';
import ModeSelector from './components/ModeSelector';
import TicTacToeBoard from './components/TicTacToeBoard';
import Styles from "./page.module.css";

export default function Home() {
  const [mode, setMode] = useState(null); // 'PLAYER' or 'AI'
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const checkWinner = (board) => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let [a,b,c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
    }
    return board.includes(null) ? null : 'Draw';
  };

  useEffect(() => {
    const result = checkWinner(board);
    if (result) setWinner(result);

    // AI move if mode is AI and it's O's turn
    if (mode === 'AI' && !isXNext && !winner) {
      const emptyIndices = board
        .map((val, idx) => val === null ? idx : null)
        .filter(i => i !== null);
      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      setTimeout(() => handleCellClick(randomIndex), 500);
    }
  }, [board, isXNext]);

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <main className={Styles.mainDiv}>
      <h1 className={Styles.gameName}>Tic Tac Toe</h1>
      {!mode ? (
        <ModeSelector setMode={setMode} />
      ) : (
        <>
          <p className={Styles.gameStatus}>
            {winner ? winner=='Draw' ? `Result: Draw!` : `Result: ${winner} Wins!!!` : `Next Turn: ${isXNext ? 'x' : 'o'}`}
          </p>
          <TicTacToeBoard board={board} onCellClick={handleCellClick} />
          <div className="mt-6 flex gap-4">
            <button onClick={resetGame} className={Styles.rstBtn}>
              Restart
            </button>
            <button onClick={() => { resetGame(); setMode(null); }} className={Styles.backBtn}>
              Back
            </button>
          </div>
        </>
      )}
    </main>
  );
}
