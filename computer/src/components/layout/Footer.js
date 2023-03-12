import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  padding: 50px 0;
  font-size: 16px;
`;

const FooterHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    color: #666;
  }
`;
function Footer() {
    return (
        <FooterWrapper>
            <footer className="footer">
                <div className="grid wide footer__content">
                    <div className="grid__row">
                        <div className="gird-column-2-4-inline">
                            <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Hướng Dẫn Mua Hàng</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Chính Sách Vận Chuyển</a>
                                </li>
                            </ul>
                        </div>
                        <div className="gird-column-2-4-inline">
                            <h3 className="footer__heading">VỀ CHÚNG TÔI</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Giới Thiệu Về Shop</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Tuyển Dụng</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-item__link">Điều Khoản Shop</a>
                                </li>
                            </ul>
                        </div>
                        <div className="gird-column-2-4-inline">
                            <h3 className="footer__heading">DANH MỤC</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link to="#" className="footer-item__link">PC</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="#" className="footer-item__link">LAPTOP</Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="#" className="footer-item__link">LINH KIỆN</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="gird-column-2-4-inline">
                            <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <Link to="#" className="footer-item__link">
                                        <i className="footer-item__icon fab fa-facebook-square"></i>
                                        Facebook
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="#" className="footer-item__link">
                                        <i className="footer-item__icon fab fa-instagram-square"></i>
                                        Instagram
                                    </Link>
                                </li>
                                <li className="footer-item">
                                    <Link to="#" className="footer-item__link">
                                        <i className="footer-item__icon fab fa-linkedin"></i>
                                        Linkedin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="gird-column-2-4-inline">
                            <h3 className="footer__heading">VÀO CỬA HÀNG TRÊN ỨNG DỤNG</h3>
                            {/* <div className="footer__download">
                            <img
                                src="./assets/img/qr_code.png"
                                alt="Download QR"
                                className="footer__dowload-qr"
                            />
                            <div className="footer__download-apps">
                                <a href="#" className="footer__download-app-link">
                                    <img
                                        src="./assets/img/google_play.png"
                                        alt="Google Play"
                                        className="footer__download-app-img"
                                    />
                                </a>
                                <a href="#" className="footer__download-app-link">
                                    <img
                                        src="./assets/img/appstore.png"
                                        alt="App store"
                                        className="footer__download-app-img"
                                    />
                                </a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="grid wide" >
                        <p className="footer__text">
                            NHÓM TEAM
                        </p>
                    </div>
                </div>
            </footer>
        </FooterWrapper>

    );
}

export default Footer;
