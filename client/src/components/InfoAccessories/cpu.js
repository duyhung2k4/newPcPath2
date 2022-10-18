import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteData } from "../../redux/thunk/deleteAccressories";
import { updateData } from "../../redux/thunk/updateAccessories";


export const InfoCpu = () => {

    const cpuInfo = useSelector(state => state.update.cpu);
    const id = cpuInfo.data.Id;

    const [cpu, setCpu] = useState(cpuInfo.data.Cpu);
    const [clock_speed, setClockSpeed] = useState(cpuInfo.data.Clock_speed);
    const [bus_speed, setBusSpeed] = useState(cpuInfo.data.Bus_speed);
    const [register_width, setRegisterWidth] = useState(cpuInfo.data.Register_width);
    const [cache, setCache] = useState(cpuInfo.data.Cache);
    const [socket, setSocket] = useState(cpuInfo.data.Socket);
    const [cores_threads, setCoresThreads] = useState(cpuInfo.data.Cores_threads);
    const [tdp, setTdp] = useState(cpuInfo.data.Tdp);
    const [image, setImage] = useState(cpuInfo.data.Image);
    const [psu, setPsu] = useState(cpuInfo.data.Psu);

    const dispatch = useDispatch();

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
                            type: "updatecpu",
                            payload: !cpuInfo.display,
                        })
                    }}
                    style={{ float: "right" }}
                    className="btn close-button" aria-label="Close alert" type="button" data-close>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="col-md-10 offset-1 row" style={{ borderRadius: "5px" }}>
                <img className="card-img-top col-md-6" style={{ height: "auto" }} src={cpuInfo.data.Image} alt="Card image cap" />
                <div className="card-body col-md-6" style={{ borderLeft: "2px solid black" }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        value={cpu}
                                        onChange={(e) => { setCpu(e.target.value) }}
                                        type="text" className="form-control" placeholder="Cpu" />
                                </td>
                            </tr>
                            <tr>
                                <td>Clock Speed</td>
                                <td>
                                    <input
                                        value={clock_speed}
                                        onChange={(e) => { setClockSpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Clock Speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Bus Speed</td>
                                <td>
                                    <input
                                        value={bus_speed}
                                        onChange={(e) => { setBusSpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Bus speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Register Widthuda</td>
                                <td>
                                    <input
                                        value={register_width}
                                        onChange={(e) => { setRegisterWidth(e.target.value) }}
                                        type="text" className="form-control" placeholder="Register Width" />
                                </td>
                            </tr>
                            <tr>
                                <td>Cache</td>
                                <td>
                                    <input
                                        value={cache}
                                        onChange={(e) => { setCache(e.target.value) }}
                                        type="text" className="form-control" placeholder="Cache" />
                                </td>
                            </tr>
                            <tr>
                                <td>Socket</td>
                                <td>
                                    <input
                                        value={socket}
                                        onChange={(e) => { setSocket(e.target.value) }}
                                        type="text" className="form-control" placeholder="Socket" />
                                </td>
                            </tr>
                            <tr>
                                <td>Cores Threads</td>
                                <td>
                                    <input
                                        value={cores_threads}
                                        onChange={(e) => { setCoresThreads(e.target.value) }}
                                        type="text" className="form-control" placeholder="Cores Threads" />
                                </td>
                            </tr>
                            <tr>
                                <td>Tdp</td>
                                <td>
                                    <input
                                        value={tdp}
                                        onChange={(e) => { setTdp(e.target.value) }}
                                        type="text" className="form-control" placeholder="Tdp" />
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
                                <td>Psup</td>
                                <td>
                                    <input
                                        value={psu}
                                        onChange={(e) => { setPsu(e.target.value) }}
                                        type="text" className="form-control" placeholder="Psup" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button
                                        onClick={() => {
                                            const newCpu = {
                                                id,
                                                cpu,
                                                clock_speed,
                                                bus_speed,
                                                register_width,
                                                cache,
                                                socket,
                                                cores_threads,
                                                tdp,
                                                image,
                                                psu,
                                            }
                                            dispatch(updateData({
                                                data: newCpu,
                                                display: cpuInfo.display,
                                            }, "cpu"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newCpu = {
                                                id,
                                                cpu,
                                                clock_speed,
                                                bus_speed,
                                                register_width,
                                                cache,
                                                socket,
                                                cores_threads,
                                                tdp,
                                                image,
                                                psu,
                                            }
                                            dispatch(deleteData({
                                                data: newCpu,
                                                display: cpuInfo.display,
                                            }, "cpu"))
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