import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function BetPoint(props) {
  const totalPoint = useSelector((state) => state.AnimalBetGameReducer.totalPoint);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 className="text-center display-4">Animal Bet Game</h3>
      <div className="text-center mt-4">
        <span style={{ fontSize: '20px', borderRadius: '5%' }} className="p-3 text-white bg-danger">Reward: <span className="text-warning">{totalPoint.toLocaleString()}$</span></span>
      </div>

      <div className="text-center mt-4">
        <button onClick={()=>{
          dispatch({
            type: 'PLAY_AGAIN',
          })
        }} style={{ fontSize: '20px', borderRadius: '5%' }} className="p-2 text-white bg-success">Play Again</button>
      </div>
    </div>
  )
}
