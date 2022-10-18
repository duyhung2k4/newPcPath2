import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/thunk/addAccessories";


export const AddRom = () => {

    const display = useSelector(state => state.set.displayAddRom);
    const dispatch = useDispatch();

    const [rom, setRom] = useState("");
    const [type, setType] = useState("");
    const [capacity, setCapacity] = useState("");
    const [read_speed, setReadSpeed] = useState("");
    const [write_speed, setWriteSpeed] = useState("");
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
                        value={rom}
                        onChange={(e) => { setRom(e.target.value) }}
                        type="text" className="form-control" placeholder="Rom" />
                </div>
                <div className="form-group">
                    <input
                        value={type}
                        onChange={(e) => { setType(e.target.value) }}
                        type="text" className="form-control" placeholder="Type" />
                </div>
                <div className="form-group">
                    <input
                        value={capacity}
                        onChange={(e) => { setCapacity(e.target.value) }}
                        type="text" className="form-control" placeholder="Capacity" />
                </div>
                <div className="form-group">
                    <input
                        value={read_speed}
                        onChange={(e) => { setReadSpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Read Speed" />
                </div>
                <div className="form-group">
                    <input
                        value={write_speed}
                        onChange={(e) => { setWriteSpeed(e.target.value) }}
                        type="text" className="form-control" placeholder="Write Speed" />
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
                                type: "setAddrom",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                            const newRom = {
                                rom,
                                type,
                                capacity,
                                read_speed,
                                write_speed,
                                image,
                            }

                            dispatch(addData(newRom, "rom"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )
}