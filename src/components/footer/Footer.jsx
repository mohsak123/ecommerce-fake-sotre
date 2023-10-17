import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/apiCalls/categoryApiCall";
import { Container } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className="footer">
      <Container className="container-footer d-flex justify-content-between px-5">
        <div className="footer-links">
          <h3 className="footer-links-header">Category</h3>
          <ul className="footer-links-item">
            {categories && categories.length > 0
              ? categories.map((cat) => <li className="footer-link">{cat}</li>)
              : null}
          </ul>
        </div>
        <div className="footer-social">
          <h3 className="footer-social-title">My Social Media</h3>
          <div className="social-icons">
            <div className="social-icon">
              <i class="bi bi-facebook"></i>
              <div className="social-icon-title">Facebook</div>
            </div>
            <div className="social-icon">
              <i class="bi bi-github"></i>
              <div className="social-icon-title">Github</div>
            </div>
            <div className="social-icon">
              <i class="bi bi-linkedin"></i>
              <div className="social-icon-title">Linkedin</div>
            </div>
            <div className="social-icon">
              <i class="bi bi-whatsapp"></i>
              <div className="social-icon-title">Whatsapp</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
