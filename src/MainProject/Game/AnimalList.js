import React from 'react'
import BetAnimal from './BetAnimal'
import { useSelector } from 'react-redux'

export default function AnimalList() {
    const betList = useSelector((state) => state.AnimalBetGameReducer.betList);

    // console.log("betList: ", betList);

    const renderBetList = () => {
        return betList.map((item, index) => {
            return <div className="col-4" key={index}>
                <BetAnimal betItem={item}/>
            </div>
        })
    };

    return (
        <div>
            <div className="row mt-3">
                {renderBetList()}
            </div>
        </div>
    )
}
