import React from "react";
import logo from '../../img/logofn.png';
import '../../App.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="grid nav-header">
                <div className="grid__row height130px">
                    <div className="gird-column-2 logo9">
                        <img src={logo} alt="" className="logoimg" />
                    </div>
                    <div className="gird-column-10 navoption">
                        <div className="header-top" >
                            <div className="searchsp">
                                <input type="text" placeholder="Nhập mã hoặc tên sản phẩm" />
                                <button className="iconsearch">
                                    <ion-icon name="search-outline"></ion-icon>
                                </button>
                            </div>
                            <div className="optionKH">
                                <ul className="listoption">
                                    <Link to="/register" style={{ textDecoration: 'none' }}>
                                        <li className="optionItem">
                                            <ion-icon style={{ color: '#00FF02' }} name="person-add-outline"></ion-icon>
                                            <span> Đăng ký</span>
                                        </li>
                                    </Link>
                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                        <li className="optionItem">
                                            <ion-icon style={{ color: '#00FF02' }} name="person-circle-outline"></ion-icon>
                                            <span>Đăng Nhập</span>
                                        </li>
                                    </Link>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <li className="optionItem">
                                            <ion-icon style={{ color: '#00FF02' }} name="pricetags-outline"></ion-icon>
                                            <span>Khuyến mãi</span>
                                        </li>
                                    </Link>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <li className="optionItem">
                                            <ion-icon style={{ color: '#00FF02' }} name="cart-outline"></ion-icon>
                                            <span>Giỏ hàng</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="info-top">
                            <ul className="info-top-option">
                                <Link to="/">
                                    <li className="info-item">
                                        <ion-icon style={{ color: '#00FF02' }} name="call-outline"></ion-icon>
                                        <span>Tổng đài</span>
                                    </li>
                                </Link>
                                <span className="seperate"></span>
                                <Link to="/videos">
                                    <li className="info-item">
                                        <ion-icon style={{ color: '#00FF02' }} name="logo-youtube"></ion-icon>
                                        <span>Videos</span>
                                    </li>
                                </Link>
                                <span className="seperate"></span>
                                <Link to="/tin-cong-nghe">
                                    <li className="info-item">
                                        <ion-icon style={{ color: '#00FF02' }} name="globe-outline"></ion-icon>
                                        <span>Tin công nghệ</span>
                                    </li>
                                </Link>
                                <span className="seperate"></span>
                                <Link to="/tuyen-dung">
                                    <li className="info-item">
                                        <ion-icon style={{ color: '#00FF02' }} name="person-add-outline"></ion-icon>
                                        <span>Tuyển dụng</span>
                                    </li>
                                </Link>
                                <span className="seperate"></span>
                                <Link to="/showroom">
                                    <li className="info-item">
                                        <ion-icon style={{ color: '#00FF02' }} name="business-outline"></ion-icon>
                                        <span>Hệ thống ShowRoom</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
