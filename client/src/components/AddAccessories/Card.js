import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/thunk/addAccessories";


export const AddCard = () => {

    const display = useSelector(state => state.set.displayAddCard);
    const dispatch = useDispatch();

    const [gpu, setGpu] = useState("");
    const [core_speed, setCoreSpeed] = useState("");
    const [boost_speed, setBoostSpped] = useState("");
    const [cuda_cores, setCudaCores] = useState("");
    const [video_memory, setVideoMemory] = useState("");
    const [memory_type, setMemoryType] = useState("");
    const [memory_speed, setMemorySpeed] = useState("");
    const [memory_bus_width, setMemoryBusWidth] = useState("");
    const [memory_bandwidth, setMemoryBandwidth] = useState("");
    const [image, setImage] = useState("");
    const [psup, setPsup] = useState("");

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
                        value={gpu}
                        onChange={(e) => { setGpu(e.target.value) }}
                        type="text" className="form-control" placeholder="Card" />
                </div>
                <div className="form-group">
                    <input
                        value={core_speed}
                        onChange={(e) => { setCoreSpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Core speed" />
                </div>
                <div className="form-group">
                    <input
                        value={boost_speed}
                        onChange={(e) => { setBoostSpped(e.target.value) }}
                        type="text" className="form-control" placeholder="Boost speed" />
                </div>
                <div className="form-group">
                    <input
                        value={cuda_cores}
                        onChange={(e) => { setCudaCores(e.target.value) }}
                        type="text" className="form-control" placeholder="Cude cores" />
                </div>
                <div className="form-group">
                    <input
                        value={video_memory}
                        onChange={(e) => { setVideoMemory(e.target.value) }}
                        type="text" className="form-control" placeholder="Video memory" />
                </div>
                <div className="form-group">
                    <input
                        value={memory_type}
                        onChange={(e) => { setMemoryType(e.target.value) }}
                        type="text" className="form-control" placeholder="Memory type" />
                </div>
                <div className="form-group">
                    <input
                        value={memory_speed}
                        onChange={(e) => { setMemorySpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Memory speed" />
                </div>
                <div className="form-group">
                    <input
                        value={memory_bus_width}
                        onChange={(e) => { setMemoryBusWidth(e.target.value) }}
                        type="text" className="form-control" placeholder="Memory bus width" />
                </div>
                <div className="form-group">
                    <input
                        value={memory_bandwidth}
                        onChange={(e) => { setMemoryBandwidth(e.target.value) }}
                        type="text" className="form-control" placeholder="Memory bandwidth" />
                </div>
                <div className="form-group">
                    <input
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                        type="text" className="form-control" placeholder="Image" />
                </div>
                <div className="form-group">
                    <input
                        value={psup}
                        onChange={(e) => { setPsup(e.target.value) }}
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
                                type: "setAddcard",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                            const card = {
                                gpu,
                                core_speed,
                                boost_speed,
                                cuda_cores,
                                video_memory,
                                memory_type,
                                memory_speed,
                                memory_bus_width,
                                memory_bandwidth,
                                image,
                                psup,
                            };
                            dispatch(addData(card, "card"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )
}