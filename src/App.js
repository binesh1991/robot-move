import { useEffect, useState } from 'react';
import robotIcon from './img/robot.png';

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square/>
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  return <div className="square"  />
}

function Robot({ rotation, xPos, yPos }) {
  return (
    <div className="robot" style={{transform: `rotate(${rotation}deg)`, left: `${xPos}px`, top: `${yPos}px`}}>
      <img src={robotIcon} />
    </div>);
}

export default function RobotMover() {
  const [rotation, setRotation] = useState(90);
  const [xPos, setXpos] = useState(20);
  const [yPos, setYpos] = useState(20);

  const marginLeftTop = 20;
  const marginBottomRight = 420;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 32) {
        if (rotation === 0 && yPos > marginLeftTop) {
          setYpos(yPos => yPos - 100);
        } else if (rotation === 90 && xPos < marginBottomRight) {
          setXpos(xPos => xPos + 100);
        } else if (rotation === 180 && yPos < marginBottomRight) {
          setYpos(yPos => yPos + 100);
        } else if (rotation === 270 && xPos > marginLeftTop) {
          setXpos(xPos => xPos - 100);
        }
      } else if (e.keyCode === 37) {
        if (rotation === 0) {
          setRotation(270);
        } else {
          setRotation(rotation => rotation - 90);
        }
      } else if (e.keyCode === 39) {
        if (rotation === 270) {
          setRotation(0);
        } else {
          setRotation(rotation => rotation + 90);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [rotation, xPos, yPos]);

  return (
    <div className="game" >
      <div className="game-board" >
        <Board />
      </div>
      <Robot rotation={rotation} xPos={xPos} yPos={yPos} />
      <br />
      Arrow Left/Right: Turn left/right
      <br />
      Spacebar: Move 1 block forward
    </div>
  );
}
