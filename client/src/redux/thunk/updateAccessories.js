

export const updateData = (data, accessories) => async dispatch => {
    
    await fetch(`http://localhost:3001/update/${accessories}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data.data)
    })
        .then(res => res.json())
        .then(res => { console.log(res) })

    dispatch({
        type: `update${accessories}`,
        payload: {
            data: {},
            display: !data.display,
        }
    })
}