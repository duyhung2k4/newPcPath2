import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCpu } from "../../redux/thunk/getAccessories";


export const Cpu = () => {

    const cpus = useSelector(state => state.get.cpus);
    const disPlayset = useSelector(state => state.set.displayAddCpu);
    const updateCpu = useSelector(state => state.update.cpu);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCpu())
    }, [disPlayset, updateCpu])

    return (
        <div>
            <button
                style={{
                    float: "right",
                    marginTop: "20px",
                    marginRight: "20px",
                }}
                onClick={() => {
                    dispatch({
                        type: "setAddcpu",
                        payload: !disPlayset,
                    })
                }}
                type="button" className="btn btn-primary">Add</button>
            <div style={{ clear: "both" }}></div>
            <div className="col-md-12" style={{ marginTop: "30px" }} >
                <ul className="col-md-10 offset-md-1 row">
                    {
                        cpus.map((obj, i) =>
                            <li key={i} className="col-md-4" style={{
                                listStyle: "none",
                                marginBottom: "30px",
                            }}>
                                <div className="card">
                                    <img className="card-img-top" src={obj.Image} alt="#" />
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.Cpu}</h5>
                                        <p className="card-text">Giá: đang cập nhật...</p>
                                        <button
                                            style={{ float: "right" }}
                                            type="button" className="btn btn-secondary"
                                            onClick={() => {
                                                dispatch({
                                                    type: "updatecpu",
                                                    payload: {
                                                        display: !updateCpu.display,
                                                        data: obj,
                                                    },
                                                })
                                            }}
                                        >Chi tiết</button>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>

    )
}