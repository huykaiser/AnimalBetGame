import React from 'react'
import Dice from './Dice'
import { useDispatch, useSelector } from 'react-redux'

export default function DiceList() {

    const diceArray = useSelector(state => state.AnimalBetGameReducer.diceArray);
    const dispatch = useDispatch();

    // console.log("diceArray: ", diceArray);

    // const renderDiceArray = () => {
    //     return diceArray.map((dice, index) => {
    //         return <div key={index} className="col-12 text-center" style={{ marginTop: "75px" }}>
    //             <Dice />
    //         </div>
    //     })
    // };

    return (
        <div className="mt-5 ml-5" >
            <div className="bg-white" style={{ width: 300, height: 300, borderRadius: "50%", paddingLeft:"10px" }}>
                <div className="row">
                    <div className="col-12 text-center" style={{ marginLeft: "75px" }}>
                        <Dice diceItem={diceArray[0]}/>
                    </div>
                </div>

                <div className="row" style={{ marginTop: "-20px" }}>
                    <div className="col-4 text-right" >
                        <Dice diceItem={diceArray[1]}/>
                    </div>
                    <div className="col-4 text-right">
                        <Dice diceItem={diceArray[2]}/>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button onClick={() => {
                    dispatch({
                        type: 'PLAY',
                    })
                }} className="btn btn-success p2" style={{ fontSize: "25px" }}>SHAKE</button>
            </div>
        </div>
    )
}
