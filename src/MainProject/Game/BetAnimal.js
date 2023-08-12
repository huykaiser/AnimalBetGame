import React from 'react'
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';

export default function BetAnimal(props) {

    const dispatch = useDispatch();

    const { betItem } = props;

    const [propsUseSpringIncrease, setIncrease, stopIncrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset: true
        }
    });

    const [propsUseSpringDecrease, setDecrease, stopDecrease] = useSpring(() => {
        return {
            to: { scale: 1.25 },
            from: { scale: 1 },
            reset: true
        }
    });

    return (
        <div className="betItem mt-3">
            <img src={betItem?.pic} style={{ width: '70%' }} alt="pic" />

            <div className="bg-success mt-2 pb-2 text-center" style={{ borderRadius: '10px', width: '100%' }}>
                <animated.button style={{ transform: propsUseSpringIncrease.scale.to(scale => `scale(${scale})`) }} onClick={() => {
                    setIncrease({ scale: 1 })
                    setIncrease({ scale: 1.5 })

                    dispatch({
                        type: 'BET',
                        betItem,
                        plusMinus: true,
                    })
                }} className="btn btn-danger mr-3">+</animated.button>

                <span className="mt-2" style={{ color: 'yellow', fontSize: 25 }}>{betItem?.betPoint}</span>

                <animated.button style={{ transform: propsUseSpringDecrease.scale.to(scale => `scale(${scale})`) }} onClick={() => {
                    setDecrease({ scale: 1 })
                    setDecrease({ scale: 1.5 })

                    dispatch({
                        type: 'BET',
                        betItem,
                        plusMinus: false,
                    })
                }} className="btn btn-danger ml-3">-</animated.button>
            </div>
        </div>
    )
}
