import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCard } from "../../redux/thunk/getAccessories";


export const Card = React.memo(() => {

    const disPlayset = useSelector(state => state.set.displayAddCard);
    const updateCard = useSelector(state => state.update.card);
    const cards = useSelector(state => state.get.cards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCard());
    }, [disPlayset, updateCard])

    return (
        <div>
            <button
                style={{
                    float: "right",
                    marginTop: "20px",
                    marginRight: "20px",
                }}
                onClick={() => {
                    dispatch({
                        type: "setAddcard",
                        payload: !disPlayset,
                    })
                }}
                type="button" className="btn btn-primary">Add</button>
            <div style={{ clear: "both" }}></div>
            <div className="col-md-12" style={{ marginTop: "30px" }} >
                <ul className="col-md-10 offset-md-1 row">
                    {
                        cards.map((obj, i) =>
                            <li key={i} className="col-md-4" style={{
                                listStyle: "none",
                                marginBottom: "30px",
                            }}>
                                <div className="card">
                                    <img className="card-img-top" src={obj.Image} alt="#" />
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.GPU}</h5>
                                        <p className="card-text">Giá: đang cập nhật...</p>
                                        <button
                                            style={{ float: "right" }}
                                            type="button" className="btn btn-secondary"
                                            onClick={() => {
                                                dispatch({
                                                    type: "updatecard",
                                                    payload: {
                                                        display: !updateCard.display,
                                                        data: obj,
                                                    },
                                                })
                                            }}
                                        >Chi tiết</button>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
})