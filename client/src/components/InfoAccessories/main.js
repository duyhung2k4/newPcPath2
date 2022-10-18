import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { updateData } from "../../redux/thunk/updateAccessories";
import { deleteData } from "../../redux/thunk/deleteAccressories";


export const InfoMain = () => {

    const mainInfo = useSelector(state => state.update.main);
    const id = mainInfo.data.Id;

    const [main, setMain] = useState(mainInfo.data.Main);
    const [size, setSize] = useState(mainInfo.data.Size);
    const [socket, setSocket] = useState(mainInfo.data.Socket);
    const [chipset, setChipset] = useState(mainInfo.data.Chipset);
    const [hdmi, setHdmi] = useState(mainInfo.data.Hdmi);
    const [display_port, setDisplayPort] = useState(mainInfo.data.Display_port);
    const [vga, setVga] = useState(mainInfo.data.Vga);
    const [divi, setDivi] = useState(mainInfo.data.Divi);
    const [wifi, setWifi] = useState(mainInfo.data.Wifi);
    const [rgb, setRgb] = useState(mainInfo.data.Rgb);
    const [image, setImage] = useState(mainInfo.data.Image);

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
                            type: "updatemain",
                            payload: !mainInfo.display,
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
                                        value={main}
                                        onChange={(e) => { setMain(e.target.value) }}
                                        type="text" className="form-control" placeholder="Main" />
                                </td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>
                                    <input
                                        value={size}
                                        onChange={(e) => { setSize(e.target.value) }}
                                        type="text" className="form-control" placeholder="Size" />
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
                                <td>Chipset</td>
                                <td>
                                    <input
                                        value={chipset}
                                        onChange={(e) => { setChipset(e.target.value) }}
                                        type="text" className="form-control" placeholder="Chipset" />
                                </td>
                            </tr>
                            <tr>
                                <td>HDMI</td>
                                <td>
                                    <input
                                        value={hdmi}
                                        onChange={(e) => { setHdmi(e.target.value) }}
                                        type="text" className="form-control" placeholder="HDMI" />
                                </td>
                            </tr>
                            <tr>
                                <td>Display port</td>
                                <td>
                                    <input
                                        value={display_port}
                                        onChange={(e) => { setDisplayPort(e.target.value) }}
                                        type="text" className="form-control" placeholder="Display port" />
                                </td>
                            </tr>
                            <tr>
                                <td>Vga</td>
                                <td>
                                    <input
                                        value={vga}
                                        onChange={(e) => { setVga(e.target.value) }}
                                        type="text" className="form-control" placeholder="Vga" />
                                </td>
                            </tr>
                            <tr>
                                <td>Divi</td>
                                <td>
                                    <input
                                        value={divi}
                                        onChange={(e) => { setDivi(e.target.value) }}
                                        type="text" className="form-control" placeholder="Divi" />
                                </td>
                            </tr>
                            <tr>
                                <td>Wifi</td>
                                <td>
                                    <input
                                        value={wifi}
                                        onChange={(e) => { setWifi(e.target.value) }}
                                        type="text" className="form-control" placeholder="Wifi" />
                                </td>
                            </tr>
                            <tr>
                                <td>Rgb</td>
                                <td>
                                    <input
                                        value={rgb}
                                        onChange={(e) => { setRgb(e.target.value) }}
                                        type="text" className="form-control" placeholder="Rgb" />
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
                                            const newMain = {
                                                id,
                                                main,
                                                size,
                                                socket,
                                                chipset,
                                                hdmi,
                                                display_port,
                                                vga,
                                                divi,
                                                wifi,
                                                rgb,
                                                image,
                                            }
                                            dispatch(updateData({
                                                data: newMain,
                                                display: mainInfo.display,
                                            }, "main"))
                                        }}
                                        type="button" style={{ float: "right", marginLeft: "20px" }} className="btn btn-success">Update</button>
                                    <button
                                        onClick={() => {
                                            const newMain = {
                                                id,
                                                main,
                                                size,
                                                socket,
                                                chipset,
                                                hdmi,
                                                display_port,
                                                vga,
                                                divi,
                                                wifi,
                                                rgb,
                                                image,
                                            }
                                            dispatch(deleteData({
                                                data: newMain,
                                                display: mainInfo.display,
                                            }, "main"))
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