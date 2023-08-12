import React from 'react'
import BetPoint from './BetPoint'
import AnimalList from './AnimalList'
import DiceList from './DiceList'
import './StyleItem.css'

export default function AnimalBetGame(props) {
    return (
        <div id="AnimalBetGame" className="container-fluid">
            <BetPoint />
            <div className="row">
                <div className="col-7">
                    <AnimalList/>
                </div>
                <div className="col-5">
                    <DiceList/>
                </div>
            </div>
        </div>
    )
}
