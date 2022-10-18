

export const getCard = () => async dispatch => {

    let cards;

    await fetch("http://localhost:3001/get/card")
                .then(res => res.json())
                .then(res => {
                    cards = res;
                })
    
    dispatch({
        type: "getDataCard",
        payload: cards,
    })
}

export const getMain = () => async dispatch => {

    let mains;

    await fetch("http://localhost:3001/get/main")
            .then(res => res.json())
            .then(res => { mains = res; })

    dispatch({
        type: "getDataMain",
        payload: mains,
    })
}

export const getCpu = () => async dispatch => {
    
    let cpus;

    await fetch("http://localhost:3001/get/cpu")
            .then(res => res.json())
            .then(res => { cpus = res; })

    dispatch({
        type: "getDataCpu",
        payload: cpus,
    })
}

export const getRam = () => async dispatch => {

    let rams;

    await fetch("http://localhost:3001/get/ram")
            .then(res => res.json())
            .then(res => { rams = res; })

    dispatch({
        type: "getDataRam",
        payload: rams,
    })
}

export const getRom = () => async dispatch => {

    let roms;

    await fetch("http://localhost:3001/get/rom")
            .then(res => res.json())
            .then(res => { roms = res; })

    dispatch({
        type: "getDataRom",
        payload: roms,
    })
}

export const getPsup = () => async dispatch => {

    let psups;

    await fetch("http://localhost:3001/get/psup")
            .then(res => res.json())
            .then(res => { psups = res; })

    dispatch({
        type: "getDatapsup",
        payload: psups,
    })
}

export const getDataHeatDissipation = () => async dispatch => {

    let heat_dissipations;

    await fetch("http://localhost:3001/get/heat_dissipation")
            .then(res => res.json())
            .then(res => { heat_dissipations = res })

    dispatch({
        type: "getDataHeatDissipation",
        payload: heat_dissipations,
    })
}