import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/thunk/addAccessories";


export const AddCpu = () => {

    const display = useSelector(state => state.set.displayAddCpu);
    const dispatch = useDispatch();

    const [cpu, setCpu] = useState("");
    const [clock_speed, setClockSpeed] = useState("");
    const [bus_speed, setBusSpeed] = useState("");
    const [register_width, setRegisterWidth] = useState("");
    const [cache, setCache] = useState("");
    const [socket, setSocket] = useState("");
    const [cores_threads, setCoresThreads] = useState("");
    const [tdp, setTdp] = useState("");
    const [image, setImage] = useState("");
    const [psu, setPsu] = useState("");

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
                        value={cpu}
                        onChange={(e) => { setCpu(e.target.value) }}
                        type="text" className="form-control" placeholder="Cpu" />
                </div>
                <div className="form-group">
                    <input
                        value={clock_speed}
                        onChange={(e) => { setClockSpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Clock Speed" />
                </div>
                <div className="form-group">
                    <input
                        value={bus_speed}
                        onChange={(e) => { setBusSpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Bus speed" />
                </div>
                <div className="form-group">
                    <input
                        value={register_width}
                        onChange={(e) => { setRegisterWidth(e.target.value) }}
                        type="text" className="form-control" placeholder="Register width" />
                </div>
                <div className="form-group">
                    <input
                        value={cache}
                        onChange={(e) => { setCache(e.target.value) }}
                        type="text" className="form-control" placeholder="Cache" />
                </div>
                <div className="form-group">
                    <input
                        value={socket}
                        onChange={(e) => { setSocket(e.target.value) }}
                        type="text" className="form-control" placeholder="Socket" />
                </div>
                <div className="form-group">
                    <input
                        value={cores_threads}
                        onChange={(e) => { setCoresThreads(e.target.value) }}
                        type="text" className="form-control" placeholder="Cores threads" />
                </div>
                <div className="form-group">
                    <input
                        value={tdp}
                        onChange={(e) => { setTdp(e.target.value) }}
                        type="text" className="form-control" placeholder="TDP" />
                </div>
                <div className="form-group">
                    <input
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                        type="text" className="form-control" placeholder="Image" />
                </div>
                <div className="form-group">
                    <input
                        value={psu}
                        onChange={(e) => { setPsu(e.target.value) }}
                        type="text" className="form-control" placeholder="Psup" />
                </div>
                <div className="form-group">
                    <button
                        style={{
                            float: "right",
                            marginLeft: "20px"
                        }}
                        onClick={() => {
                            dispatch({
                                type: "setAddcpu",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                            const newCpu = {
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
                            };
                            console.log(newCpu);
                            dispatch(addData(newCpu, "cpu"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )
}