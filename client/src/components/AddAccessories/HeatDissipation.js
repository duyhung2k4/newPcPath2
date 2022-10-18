import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addData } from "../../redux/thunk/addAccessories";


export const AddHeatDissipation = () => {

    const display = useSelector(state => state.set.displayAddHeatDissipation);
    const dispatch = useDispatch();

    const [heat_dissipation, setHeatDissipation] = useState("");
    const [type, setType] = useState("");
    const [psus, setPsus] = useState("");
    const [image, setImage] = useState("");


    return  (
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
                        value={heat_dissipation}
                        onChange={(e) => { setHeatDissipation(e.target.value) }}
                        type="text" className="form-control" placeholder="Heat Dissipation" />
                </div>
                <div className="form-group">
                    <input
                        value={type}
                        onChange={(e) => { setType(e.target.value) }}
                        type="text" className="form-control" placeholder="Type" />
                </div>
                <div className="form-group">
                    <input
                        value={psus}
                        onChange={(e) => { setPsus(e.target.value) }}
                        type="text" className="form-control" placeholder="PSUP" />
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
                                type: "setAddheat_dissipation",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                            const newHeatDissipation = {
                                heat_dissipation,
                                type,
                                psus,
                                image,
                            };
                            console.log(newHeatDissipation);
                            dispatch(addData(newHeatDissipation, "heat_dissipation"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )
}