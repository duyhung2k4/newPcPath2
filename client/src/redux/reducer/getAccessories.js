
const initialValue = {
    cards: [],
    mains: [],
    cpus: [],
    rams: [],
    roms: [],
    psups: [],
    heat_dissipations: [],
}


export const reducerGetAccesspries = (state = initialValue, action) => {

    switch (action.type) {
        case "getDataCard":
            state = {
                ...state,
                cards: [...action.payload],
            }
            break;
        case "getDataMain":
            state = {
                ...state,
                mains: [...action.payload],
            }
            break;
        case "getDataCpu":
            state = {
                ...state,
                cpus: [...action.payload],
            }
            break;
        case "getDataRam":
            state = {
                ...state,
                rams: [...action.payload],
            }
            break;
        case "getDataRom":
            state = {
                ...state,
                roms: [...action.payload],
            }
            break;
        case "getDatapsup":
            state = {
                ...state,
                psups: [...action.payload],
            }
            break;
        case "getDataHeatDissipation":
            state = {
                ...state,
                heat_dissipations: [...action.payload],
            }
            break;
        default:
            break;
    }

    return state;
}

