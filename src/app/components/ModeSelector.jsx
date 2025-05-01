import Styles from "./ModeSelector.module.css";

export default function ModeSelector({ setMode }) {
  return (
    <div className={Styles.gameModeDiv}>
      <h2 className={Styles.chooseGameMode}>Choose Game Mode</h2>
      <div className={Styles.buttons}>
      <button
        onClick={() => setMode('PLAYER')}
        className={Styles.pvpBtn}
      >
      Play vs Player
      </button>
      <button
        onClick={() => setMode('AI')}
        className={Styles.pvcBtn}
      >Play vs Computer
      </button>
      </div>
    </div>
  );
}
