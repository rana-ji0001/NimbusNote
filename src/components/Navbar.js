// import React ,{useEffect}from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({token,setToken}) => {
    let location = useLocation();
    const [showdiv, setshowdiv] = useState(false);
    const [user, setUser] = useState({ name: "", email: "" });
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null); 
        setUser({ name: "", email: "" }); 
        setshowdiv(false);
        navigate("/login");

    }
    
    
    useEffect(() => {
        const fetchUser = async () => {
            if (!token) return;
            try {
                const response = await fetch("http://localhost:5000/api/auth/getuser", {
                    method: "GET", // or GET depending on backend
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": token,
                    },
                });

                const data = await response.json();
                setUser({ name: data.name, email: data.email });
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [token]);


    //   useEffect(() => {
    //     console.log(location.pathname);

    //   }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NimbusNote</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {token ? (<li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>) : null}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!token ? <form className="d-flex">
                            <Link style={{
                                backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                                color: "white",
                                border: "none"
                            }} className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link style={{
                                backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                                color: "white",
                                border: "none"
                            }} className="btn btn-primary mx-1" to="/SignUp" role="button">SignUp</Link>

                        </form> : <button onClick={handleLogout} style={{
                            backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                            color: "white",
                            border: "none"
                        }} className="btn btn-primary mx-1">Logout</button>}


                        {/* user button to show details */}
                        {token ? (<button className='mx-2' style={{ borderRadius: "50%", backgroundColor: "#eee" }} onClick={() => { setshowdiv((prev) => !prev) }}><span><i class="fa-solid fa-user"></i></span></button>) : null}


                    </div>
                </div>
            </nav>
            {showdiv && token && (<div style={{
                background: "#8b5cf6", boxShadow: "0 2px 8px rgba(248, 245, 245, 1)", borderRadius: "10px", padding: "15px", right: "5px", position: "fixed", height: "300px", width: "200px", top: "60px"

                , marginRight: "15px"
            }}>
                <h5><i class="fa-solid fa-face-smile"></i>Hi! {user.name} 👋</h5>
                <h6>Email: {user.email}</h6>
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</Link>
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about"><i class="fa-solid fa-thumbtack"></i> About</Link>

                <p
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        fontFamily: "'Poppins', sans-serif",
                        color: "#fff", // Tailwind's gray-500
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <i className="fa-solid fa-code"></i> Build by :-{" "}
                    <a
                        href="https://www.linkedin.com/in/karan-rana-a67b46350/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff", fontWeight: "600", textDecoration: "none" }}
                    >
                        Karan Rana
                    </a><i class="fa-solid fa-link"></i>
                </p>

            </div>)}
        </>
    )
}

export default Navbar
