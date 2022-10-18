import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateData } from "../../redux/thunk/updateAccessories";
import { deleteData } from "../../redux/thunk/deleteAccressories";

export const InfoPsup = () => {

    const infoPsup = useSelector(state => state.update.psup);
    const id = infoPsup.data.Id;
    const dispatch = useDispatch();

    const [psup, setPsup] = useState(infoPsup.data.Psup);
    const [model, setModel] = useState(infoPsup.data.Model);
    const [input_voltage, setInput_voltage] = useState(infoPsup.data.Input_voltage);
    const [maximum_capacity, setMaximum_capacity] = useState(infoPsup.data.Maximum_capacity);
    const [image, setImage] = useState(infoPsup.data.Image);

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
                            type: "updatepsup",
                            payload: !infoPsup.display,
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
                                        value={psup}
                                        onChange={(e) => { setPsup(e.target.value) }}
                                        type="text" className="form-control" placeholder="Psup" />
                                </td>
                            </tr>
                            <tr>
                                <td>Model</td>
                                <td>
                                    <input
                                        value={model}
                                        onChange={(e) => { setModel(e.target.value) }}
                                        type="text" className="form-control" placeholder="Model" />
                                </td>
                            </tr>
                            <tr>
                                <td>Input voltage</td>
                                <td>
                                    <input
                                        value={input_voltage}
                                        onChange={(e) => { setInput_voltage(e.target.value) }}
                                        type="text" className="form-control" placeholder="Input voltage" />
                                </td>
                            </tr>
                            <tr>
                                <td>Maximum capacity</td>
                                <td>
                                    <input
                                        value={maximum_capacity}
                                        onChange={(e) => { setMaximum_capacity(e.target.value) }}
                                        type="text" className="form-control" placeholder="Maximum capacity" />
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
                                            const newPsup = {
                                                id,
                                                psup,
                                                model,
                                                input_voltage,
                                                maximum_capacity,
                                                image,
                                            };
                                            dispatch(updateData({
                                                data: newPsup,
                                                display: infoPsup.display,
                                            }, "psup"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newPsup = {
                                                id,
                                                psup,
                                                model,
                                                input_voltage,
                                                maximum_capacity,
                                                image,
                                            };
                                            console.log(newPsup);
                                            dispatch(deleteData({
                                                data: newPsup,
                                                display: infoPsup.display,
                                            }, "psup"))
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