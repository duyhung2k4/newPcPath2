import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getDataHeatDissipation } from "../../redux/thunk/getAccessories";



export const HeatDissipations = () => {

    const heat_dissipations = useSelector(state => state.get.heat_dissipations);
    const disPlayset = useSelector(state => state.set.displayAddHeatDissipation);
    const updatedAddHeatDissipation = useSelector(state => state.update.heat_dissipation);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataHeatDissipation());    
    }, [disPlayset, updatedAddHeatDissipation]);

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
                        type: "setAddheat_dissipation",
                        payload: !disPlayset,
                    })
                }}
                type="button" className="btn btn-primary">Add</button>
            <div style={{ clear: "both" }}></div>
            <div className="col-md-12" style={{ marginTop: "30px" }} >
                <ul className="col-md-10 offset-md-1 row">
                    {
                        heat_dissipations.map((obj, i) =>
                            <li key={i} className="col-md-4" style={{
                                listStyle: "none",
                                marginBottom: "30px",
                            }}>
                                <div className="card">
                                    <img className="card-img-top" src={obj.Image} alt="#" />
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.Heat_dissipation}</h5>
                                        <p className="card-text">Giá: đang cập nhật...</p>
                                        <button
                                            style={{ float: "right" }}
                                            type="button" className="btn btn-secondary"
                                            onClick={() => {
                                                dispatch({
                                                    type: "updateheat_dissipation",
                                                    payload: {
                                                        display: !updatedAddHeatDissipation.display,
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
}