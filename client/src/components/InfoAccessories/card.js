import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { updateData } from "../../redux/thunk/updateAccessories";
import { deleteData } from "../../redux/thunk/deleteAccressories";


export const InfoCard = () => {

    const card = useSelector(state => state.update.card);
    const id = card.data.Id;
    const [gpu, setGpu] = useState(card.data.GPU);
    const [core_speed, setCoreSpeed] = useState(card.data.Core_speed);
    const [boost_speed, setBoostSpped] = useState(card.data.Boost_speed);
    const [cuda_cores, setCudaCores] = useState(card.data.CUDA_cores);
    const [video_memory, setVideoMemory] = useState(card.data.Video_memory);
    const [memory_type, setMemoryType] = useState(card.data.Memory_type);
    const [memory_speed, setMemorySpeed] = useState(card.data.Memory_speed);
    const [memory_bus_width, setMemoryBusWidth] = useState(card.data.Memory_bus_width);
    const [memory_bandwidth, setMemoryBandwidth] = useState(card.data.Memory_bandwidth);
    const [image, setImage] = useState(card.data.Image);
    const [psup, setPsup] = useState(card.data.PSUP);

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
                            type: "updatecard",
                            payload: !card.display,
                        })
                    }}
                    style={{ float: "right" }}
                    className="btn close-button" aria-label="Close alert" type="button" data-close>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="col-md-10 offset-1 row" style={{ borderRadius: "5px" }}>
                <img className="card-img-top col-md-6" style={{ height: "auto" }} src={card.data.Image} alt="Card image cap" />
                <div className="card-body col-md-6" style={{ borderLeft: "2px solid black" }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input
                                        value={gpu}
                                        onChange={(e) => { setGpu(e.target.value) }}
                                        type="text" className="form-control" placeholder="Card" />
                                </td>
                            </tr>
                            <tr>
                                <td>Core speed</td>
                                <td>
                                    <input
                                        value={core_speed}
                                        onChange={(e) => { setCoreSpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Core speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Boost speed</td>
                                <td>
                                    <input
                                        value={boost_speed}
                                        onChange={(e) => { setBoostSpped(e.target.value) }}
                                        type="text" className="form-control" placeholder="Boost speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Cuda cores</td>
                                <td>
                                    <input
                                        value={cuda_cores}
                                        onChange={(e) => { setCudaCores(e.target.value) }}
                                        type="text" className="form-control" placeholder="Cude cores" />
                                </td>
                            </tr>
                            <tr>
                                <td>Video memory</td>
                                <td>
                                    <input
                                        value={video_memory}
                                        onChange={(e) => { setVideoMemory(e.target.value) }}
                                        type="text" className="form-control" placeholder="Video memory" />
                                </td>
                            </tr>
                            <tr>
                                <td>Memory type</td>
                                <td>
                                    <input
                                        value={memory_type}
                                        onChange={(e) => { setMemoryType(e.target.value) }}
                                        type="text" className="form-control" placeholder="Memory type" />
                                </td>
                            </tr>
                            <tr>
                                <td>Memory speed</td>
                                <td>
                                    <input
                                        value={memory_speed}
                                        onChange={(e) => { setMemorySpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Memory speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Memory bus width</td>
                                <td>
                                    <input
                                        value={memory_bus_width}
                                        onChange={(e) => { setMemoryBusWidth(e.target.value) }}
                                        type="text" className="form-control" placeholder="Memory bus width" />
                                </td>
                            </tr>
                            <tr>
                                <td>Memory bandwidth</td>
                                <td>
                                    <input
                                        value={memory_bandwidth}
                                        onChange={(e) => { setMemoryBandwidth(e.target.value) }}
                                        type="text" className="form-control" placeholder="Memory bandwidth" />
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
                                        value={psup}
                                        onChange={(e) => { setPsup(e.target.value) }}
                                        type="text" className="form-control" placeholder="Psup" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button
                                        onClick={() => {
                                            const newCard = {
                                                id,
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
                                            }
                                            dispatch(updateData({
                                                data: newCard,
                                                display: card.display,
                                            }, "card"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newCard = {
                                                id,
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
                                            }
                                            dispatch(deleteData({
                                                data: newCard,
                                                display: card.display,
                                            }, "card"))
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
