// import React, { useState, useEffect } from "react";
// // import { useLocation } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Image } from "react-bootstrap";
// import "../Styles/Header.css";
// import Logo from "../ImagesFolder/CarRepairLOGO.jpg";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { app } from "../Firebase";
// import profilePicture from "../ImagesFolder/male-profile-image-_2.png";

// const auth = getAuth(app);

// function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userProfile, setUserProfile] = useState(null);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setIsLoggedIn(true);
//         setUserProfile(user);
//       } else {
//         setIsLoggedIn(false);
//         setUserProfile(null);
//       }
//     });
//   }, []);

//   const handleToggle = () => setExpanded(!expanded);

//   return (
//     <Navbar expand="lg" className="navbar top-navbar">
//       <Container fluid>
//         <Image id="Brandlogo" src={Logo} fluid />
//         <Navbar.Brand
//           className="navbar-brand fs-1 m-lg-2 fw-bold fst-italic"
//           href="/"
//         >
//           Rapid Car Repairs
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="navbar-toggler"
//             onClick={handleToggle}
//         />
//         <Navbar.Collapse id="basic-navbar-nav" className="navbar-menu">
//           <Nav className="me-auto">
//             <Nav.Link href="/" className="navbar-item">
//               Home
//             </Nav.Link>
//             <Nav.Link href="/about" className="navbar-item">
//               About
//             </Nav.Link>
//             <NavDropdown
//               title="Services"
//               id="basic-nav-dropdown"
//               className="navbar-item"
//             >
//               <NavDropdown.Item href="/diagnostics">
//                 Diagnostics
//               </NavDropdown.Item>
//               <NavDropdown.Item href="dent&paint">
//                 Dent & Paint
//               </NavDropdown.Item>
//               <NavDropdown.Item href="oil-filters">
//                 Oil/ Lube/ Filters
//               </NavDropdown.Item>
//               <NavDropdown.Item href="brakes">Brakes</NavDropdown.Item>
//               <NavDropdown.Item href="detailing">Detailing</NavDropdown.Item>
//               <NavDropdown.Item href="suspension">Suspension</NavDropdown.Item>
//               <NavDropdown.Item href="Wash">
//                 Wash and Clean
//               </NavDropdown.Item>
//               <NavDropdown.Item href="alignment">Alignment</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/faqs" className="navbar-item">
//               FAQs
//             </Nav.Link>
//             <Nav.Link href="/contact" className="navbar-item">
//               Contact
//             </Nav.Link>
//           </Nav>
//           <div className="d-flex">
//             {isLoggedIn ? (
//               <>
//                 <Button
//                   style={{
//                     marginRight: "20px",
//                     backgroundColor: "red",
//                     border: "1px solid black",
//                   }}
//                   href="/appointment"
//                 >
//                   BOOK A SERVICE
//                 </Button>
//                 <Image
//                   src={profilePicture}
//                   roundedCircle
//                   style={{ width: "40px", height: "40px", marginRight: "10px" }}
//                   alt="User Profile"
//                 />
//                 <Button id="logout-btn" onClick={() => signOut(auth)}>
//                   Logout
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <Button
//                   style={{
//                     marginRight: "20px",
//                     backgroundColor: "red",
//                     border: "1px solid black",
//                   }}
//                   href="/appointment"
//                 >
//                   BOOK A SERVICE
//                 </Button>
//                 <Button id="login-btn" href="/login">
//                   Login
//                 </Button>
//                 <Button id="signup-btn" href="/signup">
//                   SignUp
//                 </Button>
//               </>
//             )}
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import "../Styles/Header.css";
import Logo from "../ImagesFolder/CarRepairLOGO.jpg";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../Firebase";
import profilePicture from "../ImagesFolder/male-profile-image-_2.png";

const auth = getAuth(app);

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [expanded, setExpanded] = useState(false); // State to control navbar collapse

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserProfile(user);
      } else {
        setIsLoggedIn(false);
        setUserProfile(null);
      }
    });
  }, []);

  return (
    <Navbar expanded={expanded} expand="lg" className="navbar top-navbar">
      <Container fluid>
        <Image id="Brandlogo" src={Logo} fluid />
        <Navbar.Brand
          className="navbar-brand fs-1 m-lg-2 fw-bold fst-italic"
          href="/"
        >
          Rapid Car Repairs
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")} // Toggle the state
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className="navbar-item"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="navbar-item"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="navbar-item"
              // onClick={() => setExpanded(false)}
            >
              <NavDropdown.Item href="/diagnostics">
                Diagnostics
              </NavDropdown.Item>
              <NavDropdown.Item href="dent&paint">
                Dent & Paint
              </NavDropdown.Item>
              <NavDropdown.Item href="oil-filters">
                Oil/ Lube/ Filters
              </NavDropdown.Item>
              <NavDropdown.Item href="brakes">Brakes</NavDropdown.Item>
              <NavDropdown.Item href="detailing">Detailing</NavDropdown.Item>
              <NavDropdown.Item href="suspension">Suspension</NavDropdown.Item>
              <NavDropdown.Item href="Wash">Wash and Clean</NavDropdown.Item>
              <NavDropdown.Item href="alignment">Alignment</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="/faqs"
              className="navbar-item"
              onClick={() => setExpanded(false)}
            >
              FAQs
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="navbar-item"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex">
            {isLoggedIn ? (
              <>
                <Button
                  style={{
                    marginRight: "20px",
                    backgroundColor: "red",
                    border: "1px solid red",
                  }}
                  href="/appointment"
                  onClick={() => {
                    const user = auth.currentUser;
                    if (user) {
                      window.location.href = "/appointment";
                    } else {
                      window.location.href = "/login";
                    }
                    setExpanded(false);
                  }}
                >
                  BOOK A SERVICE
                </Button>
                <Image
                  src={profilePicture}
                  roundedCircle
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                  alt="User Profile"
                />
                <Button
                  id="logout-btn"
                  onClick={() => {
                    signOut(auth);
                    setExpanded(false); // Close navbar on logout
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{
                    marginRight: "20px",
                    backgroundColor: "red",
                    border: "1px solid black",
                  }}
                  href="/appointment"
                  onClick={() => setExpanded(false)}
                >
                  BOOK A SERVICE
                </Button>
                <Button
                  id="login-btn"
                  href="/login"
                  onClick={() => setExpanded(false)}
                >
                  Login
                </Button>
                <Button
                  id="signup-btn"
                  href="/signup"
                  onClick={() => setExpanded(false)}
                >
                  SignUp
                </Button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
