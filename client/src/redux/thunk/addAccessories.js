

export const addData = (data, accessories) => async dispatch => {

    let display;

    await fetch(`http://localhost:3001/post/${accessories}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => {
            display = res;
        })

    dispatch({
        type: `setAdd${accessories}`,
        payload: !display,
    })

} 
