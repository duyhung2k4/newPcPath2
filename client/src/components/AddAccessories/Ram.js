import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/thunk/addAccessories";


export const AddRam = () => {

    const display = useSelector(state => state.set.displayAddRam);
    const dispatch = useDispatch();

    const [ram, setRam] = useState("");
    const [type, setType] = useState("");
    const [ddr, setDdr] = useState("");
    const [dual_channel, setDualChannel] = useState("");
    const [bus_speed, setBusSpeed] = useState("");
    const [bandwidth, setBandwidth] = useState("");
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
                        value={ram}
                        onChange={(e) => { setRam(e.target.value) }}
                        type="text" className="form-control" placeholder="Ram" />
                </div>
                <div className="form-group">
                    <input
                        value={type}
                        onChange={(e) => { setType(e.target.value) }}
                        type="text" className="form-control" placeholder="Model" />
                </div>
                <div className="form-group">
                    <input
                        value={ddr}
                        onChange={(e) => { setDdr(e.target.value) }}
                        type="text" className="form-control" placeholder="DDR" />
                </div>
                <div className="form-group">
                    <input
                        value={dual_channel}
                        onChange={(e) => { setDualChannel(e.target.value) }}
                        type="text" className="form-control" placeholder="Dual Channel" />
                </div>
                <div className="form-group">
                    <input
                        value={bus_speed}
                        onChange={(e) => { setBusSpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Bus Speed" />
                </div>
                <div className="form-group">
                    <input
                        value={bandwidth}
                        onChange={(e) => { setBandwidth(e.target.value) }}
                        type="text" className="form-control" placeholder="Bandwidth" />
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
                                type: "setAddram",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                            const newRam = {
                                ram,
                                type,
                                ddr,
                                dual_channel,
                                bus_speed,
                                bandwidth,
                                image,
                            }

                            dispatch(addData(newRam, "ram"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )

}