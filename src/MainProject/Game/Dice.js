import React, { Fragment } from 'react'
import { useSpring, animated } from 'react-spring'

export default function Dice(props) {

  const { diceItem } = props;

  const [propsDice, set] = useSpring(() => ({
    to:{
      xyz: [1800,1800,1800]
    },
    from:{
      xyz: [0,0,0]
    },
    config:{
      duration: 1200
    },
    reset: true
  }));

  // set({xyz:[360,360,360]})
  set({xyz:[1800,1800,1800]})

  return (
    <Fragment>
      <div className="scene">
        <animated.div className="cube" style={{transform: propsDice.xyz.to((x,y,z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)}}>
          <div className="ml-3 cube__face front">
            <img style={{ width: 50 }} src={diceItem?.pic} alt={diceItem?.id} />
          </div>
          <div className="ml-3 cube__face back">
            <img style={{ width: 50 }} src="./img/AnimalBetGameImage/ca.png" alt="" />
          </div>
          <div className="ml-3 cube__face left">
            <img style={{ width: 50 }} src="./img/AnimalBetGameImage/bau.png" alt={diceItem?.id} />
          </div>
          <div className="ml-3 cube__face right">
            <img style={{ width: 50 }} src="./img/AnimalBetGameImage/nai.png" alt={diceItem?.id} />
          </div>
          <div className="ml-3 cube__face back">
            <img style={{ width: 50 }} src="./img/AnimalBetGameImage/tom.png" alt={diceItem?.id} />
          </div>
          <div className="ml-3 cube__face back">
            <img style={{ width: 50 }} src="./img/AnimalBetGameImage/cua.png" alt={diceItem?.id} />
          </div>
        </animated.div>
      </div>
    </Fragment>
  )
}
