import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../redux/thunk/updateAccessories";
import { deleteData } from "../../redux/thunk/deleteAccressories";

export const InfoRam = () => {

    const infoRam = useSelector(state => state.update.ram);
    const id = infoRam.data.Id;
    const dispatch = useDispatch();
    
    const [ram, setRam] = useState(infoRam.data.Ram);
    const [type, setType] = useState(infoRam.data.Type);
    const [ddr, setDdr] = useState(infoRam.data.Ddr);
    const [dual_channel, setDualChannel] = useState(infoRam.data.Dual_channel);
    const [bus_speed, setBusSpeed] = useState(infoRam.data.Bus_speed);
    const [bandwidth, setBandwidth] = useState(infoRam.data.Bandwidth);
    const [image, setImage] = useState(infoRam.data.Image);

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
                            type: "updateram",
                            payload: !infoRam.display,
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
                                        value={ram}
                                        onChange={(e) => { setRam(e.target.value) }}
                                        type="text" className="form-control" placeholder="Ram" />
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
                                <td>DDR</td>
                                <td>
                                    <input
                                        value={ddr}
                                        onChange={(e) => { setDdr(e.target.value) }}
                                        type="text" className="form-control" placeholder="DDR" />
                                </td>
                            </tr>
                            <tr>
                                <td>Dual channel</td>
                                <td>
                                    <input
                                        value={dual_channel}
                                        onChange={(e) => { setDualChannel(e.target.value) }}
                                        type="text" className="form-control" placeholder="Dual channel" />
                                </td>
                            </tr>
                            <tr>
                                <td>Bus Speed</td>
                                <td>
                                    <input
                                        value={bus_speed}
                                        onChange={(e) => { setBusSpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Bus Speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Band width</td>
                                <td>
                                    <input
                                        value={bandwidth}
                                        onChange={(e) => { setBandwidth(e.target.value) }}
                                        type="text" className="form-control" placeholder="BandWidth" />
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
                                            const newRam = {
                                                id,
                                                ram,
                                                type,
                                                ddr,
                                                dual_channel,
                                                bus_speed,
                                                bandwidth,
                                                image,
                                            }
                                            dispatch(updateData({
                                                data: newRam,
                                                display: infoRam.display,
                                            }, "ram"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newRam = {
                                                id,
                                                ram,
                                                type,
                                                ddr,
                                                dual_channel,
                                                bus_speed,
                                                bandwidth,
                                                image,
                                            }

                                            dispatch(deleteData({
                                                data: newRam,
                                                display: infoRam.display,
                                            }, "ram"))
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