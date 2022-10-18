import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/thunk/addAccessories";


export const AddPsup = () => {

    const display = useSelector(state => state.set.displayAddPsup);
    const dispatch = useDispatch();

    const [psup, setPsup] = useState("");
    const [model, setModel] = useState("");
    const [input_voltage, setInput_voltage] = useState("");
    const [maximum_capacity, setMaximum_capacity] = useState("");
    const [image, setImage] = useState("");

    return (
        <div className="col-md-12" style={{
            backgroundColor: "rgb(185, 185, 185)",
            paddingTop: "50px",
            height: "100%",
            position: "fixed",
            zIndex: "2",
        }}>
            <form className="container">
                <div className="form-group">
                    <input
                        value={psup}
                        onChange={(e) => { setPsup(e.target.value) }}
                        type="text" className="form-control" placeholder="Psup" />
                </div>
                <div className="form-group">
                    <input
                        value={model}
                        onChange={(e) => { setModel(e.target.value) }}
                        type="text" className="form-control" placeholder="Model" />
                </div>
                <div className="form-group">
                    <input
                        value={input_voltage}
                        onChange={(e) => { setInput_voltage(e.target.value) }}
                        type="text" className="form-control" placeholder="Input voltage" />
                </div>
                <div className="form-group">
                    <input
                        value={maximum_capacity}
                        onChange={(e) => { setMaximum_capacity(e.target.value) }}
                        type="text" className="form-control" placeholder="Maximum capaity" />
                </div>
                <div className="form-group">
                    <input
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                        type="text" className="form-control" placeholder="Image" />
                </div>
                <div className="form-group">
                    <button
                        style={{
                            float: "right",
                            marginLeft: "20px"
                        }}
                        onClick={() => {
                            dispatch({
                                type: "setAddpsup",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                           const newPsup = {
                            psup,
                            model,
                            input_voltage,
                            maximum_capacity,
                            image,
                           }
                            console.log(newPsup);
                            dispatch(addData(newPsup, "psup"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )

}