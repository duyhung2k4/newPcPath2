import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteData } from "../../redux/thunk/deleteAccressories";
import { updateData } from "../../redux/thunk/updateAccessories";



export const InfoHeatDissipation = () => {

    const infoHeatDissipation = useSelector(state => state.update.heat_dissipation);
    const id = infoHeatDissipation.data.Id;
    const dispatch = useDispatch();

    const [heat_dissipation, setHeatDissipation] = useState(infoHeatDissipation.data.Heat_dissipation);
    const [type, setType] = useState(infoHeatDissipation.data.Type);
    const [psus, setPsus] = useState(infoHeatDissipation.data.Psus);
    const [image, setImage] = useState(infoHeatDissipation.data.Image);

    return (
        <div
            style={{
                backgroundColor: "white",
                paddingTop: "50px",
                height: "100%",
                width: "100%",
                position: "fixed",
                zIndex: "2",
                overflow: "auto",
            }}>
            <div className="col-md-12" style={{ height: "50px" }} >
                <button
                    onClick={() => {
                        dispatch({
                            type: "updateheat_dissipation",
                            payload: !infoHeatDissipation.display,
                        })
                    }}
                    style={{ float: "right" }}
                    className="btn close-button" aria-label="Close alert" type="button" data-close>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="col-md-10 offset-1 row" style={{ borderRadius: "5px" }}>
                <img className="card-img-top col-md-6" style={{ height: "auto" }} src={image} alt="Card image cap" />
                <div className="card-body col-md-6" style={{ borderLeft: "2px solid black" }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        value={heat_dissipation}
                                        onChange={(e) => { setHeatDissipation(e.target.value) }}
                                        type="text" className="form-control" placeholder="Heat Dissipation" />
                                </td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>
                                    <input
                                        value={type}
                                        onChange={(e) => { setType(e.target.value) }}
                                        type="text" className="form-control" placeholder="Type" />
                                </td>
                            </tr>
                            <tr>
                                <td>PSUP</td>
                                <td>
                                    <input
                                        value={psus}
                                        onChange={(e) => { setPsus(e.target.value) }}
                                        type="text" className="form-control" placeholder="PSUP" />
                                </td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>
                                    <input
                                        value={image}
                                        onChange={(e) => { setImage(e.target.value) }}
                                        type="text" className="form-control" placeholder="Image" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button
                                        onClick={() => {
                                            const newHeatDissipation = {
                                                id,
                                                heat_dissipation,
                                                type,
                                                psus,
                                                image,
                                            };
                                            dispatch(updateData({
                                                data: newHeatDissipation,
                                                display: infoHeatDissipation.display,
                                            }, "heat_dissipation"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newHeatDissipation = {
                                                id,
                                                heat_dissipation,
                                                type,
                                                psus,
                                                image,
                                            };
                                            console.log(newHeatDissipation);
                                            dispatch(deleteData({
                                                data: newHeatDissipation,
                                                display: infoHeatDissipation.display,
                                            }, "heat_dissipation"))
                                        }}
                                        type="button" style={{ float: "right" }} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}