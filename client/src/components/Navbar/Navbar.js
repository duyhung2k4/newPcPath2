import { Link } from "react-router-dom";

const NavBar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/card">Card <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/main">Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cpu">Cpu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ram">Ram</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rom">Rom</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/psup">Psup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/heat_dissipations">Heat Dissipations</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar