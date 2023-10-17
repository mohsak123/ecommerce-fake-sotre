import React from "react";
import "./header.css";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container style={{ height: "100% !important" }}>
        <Row
          style={{ height: "100%" }}
          className="d-flex justify-content-between align-items-center"
        >
          <Col lg="6">
            <div className="header-info">
              <h1 className="header-info-title">Welcome To Our Store</h1>
              <p className="header-info-description">
                Buying And Selling Of Goods Or Services Using The internet
              </p>
              <div className="header-info-search">
                <div className="header-info-search-title">
                  Search For Any Product You Want
                </div>
                <input type="search" placeholder="search" />
              </div>
              <button className="search-btn">Search</button>
            </div>
          </Col>
          <Col sm="12" lg="6">
            <div className="header-img">
              <img src="/images/home.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
