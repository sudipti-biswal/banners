import React from "react";
import { Row, Col } from "react-bootstrap";

const Development = () => {
  const mytitle = {
    color: "Black",
    fontWeight: "600",
  };
  const mytext = {
    marginBottom: "5px",
    color: "gray",
    fontSize: "12px",
  };
  const cardrank = {
    fontWeight: "600",
    paddingRight: "5px",
  };
  const cardrankSpan = {
    color: "gray",
    paddingLeft: "3px",
    fontWeight: "600",
    fontSize: "15px",
  };
  const cardprice = {
    fontWeight: "600",
  };

  const cardpriceSpan = {
    fontWeight: "600",
    fontSize: "10px",
    paddingLeft: "15px",
  };

  return (
    <div>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div className="card">
            <img
              className="card-img-top "
              src="https://picsum.photos/200/100.webp"
              alt="Card image cap"
            />

            <div className="card-body">
              <h6 className="card-title" style={mytitle}>
                Card title publishing and graphic design
              </h6>
              <p className="card-text" style={mytext}>
                Some one name
              </p>
              <div className="card-rank" style={{ color: "#f39c12" }}>
                <span style={cardrank}>4</span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <span style={cardrankSpan}>(17,332)</span>
              </div>
              <div style={cardprice}>
                <i class="fas fa-rupee-sign"></i>455
                <span style={cardpriceSpan}>
                  <i class="fas fa-rupee-sign"></i>655
                </span>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className="card">
            <img
              className="card-img-top "
              src="https://picsum.photos/200/100.webp"
              alt="Card image cap"
            />

            <div className="card-body">
              <h6 className="card-title" style={mytitle}>
                Card title publishing and graphic design
              </h6>
              <p className="card-text" style={mytext}>
                Some one name
              </p>
              <div className="card-rank" style={{ color: "#f39c12" }}>
                <span style={cardrank}>4</span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <span style={cardrankSpan}>(17,332)</span>
              </div>
              <div style={cardprice}>
                <i class="fas fa-rupee-sign"></i>455
                <span style={cardpriceSpan}>
                  <i class="fas fa-rupee-sign"></i>655
                </span>
              </div>
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className="card-wrap">
            <div className="img-card">
              <img
                className="card-img-top "
                src="https://picsum.photos/200/100.webp"
                alt="Card image cap"
              />
              <span className="arrow">
                <i class="fas fa-chevron-right"></i>
              </span>
            </div>
            <div className="card-body">
              <h6 className="card-title" style={mytitle}>
                Card title publishing and graphic design
              </h6>
              <p className="card-text" style={mytext}>
                Some one name
              </p>
              <div className="card-rank" style={{ color: "#f39c12" }}>
                <span style={cardrank}>4</span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <span style={cardrankSpan}>(17,332)</span>
              </div>
              <div style={cardprice}>
                <i class="fas fa-rupee-sign"></i>455
                <span style={cardpriceSpan}>
                  <i class="fas fa-rupee-sign"></i>655
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Development;
