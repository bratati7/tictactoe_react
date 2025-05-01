import Cell from './Cell';

export default function TicTacToeBoard({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}
