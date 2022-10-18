import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateData } from "../../redux/thunk/updateAccessories";
import { deleteData } from "../../redux/thunk/deleteAccressories";


export const InfoRom = () => {

    const infoRom = useSelector(state => state.update.rom);
    const id = infoRom.data.Id;
    const dispatch = useDispatch();

    const [rom, setRom] = useState(infoRom.data.Rom);
    const [type, setType] = useState(infoRom.data.Type);
    const [capacity, setCapacity] = useState(infoRom.data.Capacity);
    const [read_speed, setReadSpeed] = useState(infoRom.data.Read_speed);
    const [write_speed, setWriteSpeed] = useState(infoRom.data.Write_speed);
    const [image, setImage] = useState(infoRom.data.Image);

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
                            type: "updaterom",
                            payload: !infoRom.display,
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
                                        value={rom}
                                        onChange={(e) => { setRom(e.target.value) }}
                                        type="text" className="form-control" placeholder="Rom" />
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
                                <td>Capacity</td>
                                <td>
                                    <input
                                        value={capacity}
                                        onChange={(e) => { setCapacity(e.target.value) }}
                                        type="text" className="form-control" placeholder="Capacity" />
                                </td>
                            </tr>
                            <tr>
                                <td>Read Speed</td>
                                <td>
                                    <input
                                        value={read_speed}
                                        onChange={(e) => { setReadSpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Read Speed" />
                                </td>
                            </tr>
                            <tr>
                                <td>Write Speed</td>
                                <td>
                                    <input
                                        value={write_speed}
                                        onChange={(e) => { setWriteSpeed(e.target.value) }}
                                        type="text" className="form-control" placeholder="Write Speed" />
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
                                            const newRom = {
                                                id,
                                                rom,
                                                type,
                                                capacity,
                                                read_speed,
                                                write_speed,
                                                image,
                                            }
                                            dispatch(updateData({
                                                data: newRom,
                                                display: infoRom.display,
                                            }, "rom"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newRom = {
                                                id,
                                                rom,
                                                type,
                                                capacity,
                                                read_speed,
                                                write_speed,
                                                image,
                                            }

                                            dispatch(deleteData({
                                                data: newRom,
                                                display: infoRom.display,
                                            }, "rom"))
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