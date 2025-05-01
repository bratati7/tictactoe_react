import Styles from "./Cell.module.css";
export default function Cell({ value, onClick }) {
  return (
    <div
      className={Styles.Cell}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
