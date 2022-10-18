import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/thunk/addAccessories";


export const AddMain = () => {

    const display = useSelector(state => state.set.displayAddMain);
    const dispatch = useDispatch();

    const [main, setMain] = useState("");
    const [size, setSize] = useState("");
    const [socket, setSocket] = useState("");
    const [chipset, setChipset] = useState("");
    const [hdmi, setHdmi] = useState("");
    const [display_port, setDisplayPort] = useState("");
    const [vga, setVga] = useState("");
    const [divi, setDivi] = useState("");
    const [wifi, setWifi] = useState("");
    const [rgb, setRgb] = useState("");
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
                        value={main}
                        onChange={(e) => { setMain(e.target.value) }}
                        type="text" className="form-control" placeholder="Main" />
                </div>
                <div className="form-group">
                    <input
                        value={size}
                        onChange={(e) => { setSize(e.target.value) }}
                        type="text" className="form-control" placeholder="Size" />
                </div>
                <div className="form-group">
                    <input
                        value={socket}
                        onChange={(e) => { setSocket(e.target.value) }}
                        type="text" className="form-control" placeholder="Socket" />
                </div>
                <div className="form-group">
                    <input
                        value={chipset}
                        onChange={(e) => { setChipset(e.target.value) }}
                        type="text" className="form-control" placeholder="Chipset" />
                </div>
                <div className="form-group">
                    <input
                        value={hdmi}
                        onChange={(e) => { setHdmi(e.target.value) }}
                        type="text" className="form-control" placeholder="HDMI" />
                </div>
                <div className="form-group">
                    <input
                        value={display_port}
                        onChange={(e) => { setDisplayPort(e.target.value) }}
                        type="text" className="form-control" placeholder="Display port" />
                </div>
                <div className="form-group">
                    <input
                        value={vga}
                        onChange={(e) => { setVga(e.target.value) }}
                        type="text" className="form-control" placeholder="VGA" />
                </div>
                <div className="form-group">
                    <input
                        value={divi}
                        onChange={(e) => { setDivi(e.target.value) }}
                        type="text" className="form-control" placeholder="Divi" />
                </div>
                <div className="form-group">
                    <input
                        value={wifi}
                        onChange={(e) => { setWifi(e.target.value) }}
                        type="text" className="form-control" placeholder="Wifi" />
                </div>
                <div className="form-group">
                    <input
                        value={rgb}
                        onChange={(e) => { setRgb(e.target.value) }}
                        type="text" className="form-control" placeholder="Rgb" />
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
                                type: "setAddmain",
                                payload: !display,
                            })
                        }}
                        type="button" className="btn btn-danger">Cancer</button>
                    <button
                        style={{
                            float: "right"
                        }}
                        onClick={() => {
                            const newMain = {
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
                            };
                            console.log(newMain);
                            dispatch(addData(newMain, "main"));
                        }}
                        type="button" className="btn btn-success"
                    >Add</button>
                </div>
            </form>
        </div>
    )
}