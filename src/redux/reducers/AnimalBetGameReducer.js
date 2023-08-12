const initialState = {
    betList: [
        { id: "bau", pic: "./img/AnimalBetGameImage/bau.png", betPoint: 0 },
        { id: "ca", pic: "./img/AnimalBetGameImage/ca.png", betPoint: 0 },
        { id: "cua", pic: "./img/AnimalBetGameImage/cua.png", betPoint: 0 },
        { id: "ga", pic: "./img/AnimalBetGameImage/ga.png", betPoint: 0 },
        { id: "nai", pic: "./img/AnimalBetGameImage/nai.png", betPoint: 0 },
        { id: "tom", pic: "./img/AnimalBetGameImage/tom.png", betPoint: 0 },
    ],
    totalPoint: 1000,
    diceArray: [
        { id: "ga", pic: "./img/AnimalBetGameImage/bau.png" },
        { id: "nai", pic: "./img/AnimalBetGameImage/cua.png" },
        { id: "tom", pic: "./img/AnimalBetGameImage/nai.png" },
    ],
}

export const AnimalBetGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BET': {
            // console.log("action: ", action);
            const betListUpdate = [...state.betList];
            const index = betListUpdate.findIndex(item => item.id === action.betItem.id);

            if (index !== -1) {
                if (action.plusMinus && state.totalPoint > 0) {
                    betListUpdate[index].betPoint += 100;
                    state.totalPoint -= 100;
                } else {
                    if (betListUpdate[index].betPoint > 0) {
                        betListUpdate[index].betPoint -= 100;
                        state.totalPoint += 100;
                    }
                }
            }

            state.betList = betListUpdate;
            return { ...state };
        }
        case 'PLAY': {
            // console.log("action: ", action);

            const randomDiceArray = [];

            for(let i=0; i<3; i++) {
                let randomIndex = Math.floor(Math.random() * 6);
                const randomDiceItem = state.betList[randomIndex];
                randomDiceArray.push(randomDiceItem);
            }

            state.diceArray = randomDiceArray;

            // handle reward
            randomDiceArray.forEach((item, index) => {
                const indexItem = state.betList.findIndex(i => i.id === item.id);

                if (index !== -1) {
                    state.totalPoint += state.betList[indexItem].betPoint;
                }
            });

            // reset bet point
            state.betList = state.betList.map((item, index) => {
                return {...item, betPoint: 0};
            })

            return { ...state };
        }

        case 'PLAY_AGAIN': {
            state.totalPoint = 1000;

            // reset bet point
            state.betList = state.betList.map((item, index) => {
                return {...item, betPoint: 0};
            })

            return { ...state };
        }

        default:
            return state;
    }
}
