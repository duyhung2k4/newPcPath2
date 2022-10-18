const initialValue = {
    card: {
        display: false,
        data: {},
    },
    main: {
        display: false,
        data: {},
    },
    cpu: {
        display: false,
        data: {},
    },
    ram: {
        display: false,
        data: {},
    },
    rom: {
        display: false,
        data: {},
    },
    psup: {
        display: false,
        data: {},
    },
    heat_dissipation: {
        display: false,
        data: {},
    }
}


export const reducerUpdateAccressories = (state = initialValue, action) => {
    switch (action.type) {
        case "updatecard":
            state = {
                ...state,
                card: action.payload,
            }
            break;
        case "updatemain":
            state = {
                ...state,
                main: action.payload,
            }
            break;
        case "updatecpu":
            state = {
                ...state,
                cpu: action.payload,
            }
            break;
        case "updateram":
            state = {
                ...state,
                ram: action.payload,
            }
            break;
        case "updaterom":
            state = {
                ...state,
                rom: action.payload,
            }
            break;
        case "updatepsup":
            state = {
                ...state,
                psup: action.payload,
            }
            break;
        case "updateheat_dissipation":
            state = {
                ...state,
                heat_dissipation: action.payload,
            }
            break;
        default:
            break;
    }

    return state;
}