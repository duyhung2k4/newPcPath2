
const initialValue = {
    displayAddCard: false,
    displayAddMain: false,
    displayAddCpu: false,
    displayAddRam: false,
    displayAddRom: false,
    displayAddPsup: false,
    displayAddHeatDissipation: false,
}

export const reducerSetAccessories = (state = initialValue, action) => {

    switch (action.type) {
        case "setAddcard":
            state = {
                ...state,
                displayAddCard: action.payload,
            }
            break;
        case "setAddmain":
            state = {
                ...state,
                displayAddMain: action.payload,
            }
            break;
        case "setAddcpu":
            state = {
                ...state,
                displayAddCpu: action.payload,
            }
            break;
        case "setAddram":
            state = {
                ...state,
                displayAddRam: action.payload,
            }
            break;
        case "setAddrom":
            state = {
                ...state,
                displayAddRom: action.payload,
            }
            break;
        case "setAddpsup":
            state = {
                ...state,
                displayAddPsup: action.payload,
            }
            break;
        case "setAddheat_dissipation":
            state = {
                ...action,
                displayAddHeatDissipation: action.payload,
            }
            break;
        default:
            break;
    }

    return state;
}