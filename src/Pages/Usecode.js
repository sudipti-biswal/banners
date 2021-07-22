import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Business from "./Business";
import Development from "./Development";
import Soft from "./Soft";

const Usecode = () => {
    const mystyle = {
      marginTop: "3rem",
      fontSize: "20px",
      fontWeight: "900",
    };
  
    const banner = {
      marginTop: "3rem",
      fontSize: "40px",
      fontWeight: "900",
      textAlign: "center",
    };
    const nextlearn = {
      marginTop: "3rem",
      fontSize: "28px",
      fontWeight: "900",
    };
    const studentview = {
      marginTop: "1rem",
      fontSize: "20px",
      fontWeight: "900",
    };
  
    return (
      <Container>
        <h1 style={nextlearn}>What To learn next</h1>
        <h6 style={studentview}>Students are viewing</h6>
        <Row>
            <Business />
         </Row>
        <h1 style={mystyle}>Top courses in Desing</h1>
        <Row>
            <Business />
         </Row>
  
        {/* Banner part start here */}
  
        <div>
          <h1 style={banner}>BANNER</h1>
        </div>
        <h1 style={mystyle}>Top courses in Business</h1>
         <Row>
            <Business />
         </Row>
        <h1 style={mystyle}>Top courses in Development</h1>
        <Row>
            <Development />
         </Row>
        <h1 style={mystyle}>Top courses in IT & Software</h1>
        <Row>
            <Soft />
         </Row>
      </Container>
    );
  }
  
  export default Usecode;