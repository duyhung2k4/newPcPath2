

export const deleteData = (data, accessories) => async dispatch => {

    console.log(data);
    
    await fetch(`http://localhost:3001/delete/${accessories}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data.data),
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