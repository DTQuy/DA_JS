import React from "react";
import logo from '../../img/logofn.png';
import '../../App.css'
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="container">
      <div className="grid backgroundWhite">
        <div className="grid__row">
          <div className="gird-column-2">
            <div className="danhmuc">
              <div className="fixed-menu">
                <ion-icon style={{ color: "white" }} name="list-outline" />
                <span>Danh mục sản phẩm</span>
              </div>
              <div className="listPC">
                <ul className="listsanpham">
                  <li className="itemsanpham">
                    <i class="fa-solid fa-laptop"></i>
                    <span>Laptop</span>
                  </li>
                  <li className="itemsanpham">
                    <i class="fa-solid fa-computer"></i>
                    <span>PC</span>
                  </li>
                  <li className="itemsanpham">
                    <i class="fa-solid fa-microchip"></i>
                    <span>CPU</span>
                  </li>
                  <li className="itemsanpham">
                    <i class="fa-solid fa-desktop"></i>
                    <span>Màn hình</span>
                  </li>
                  <li className="itemsanpham">
                    <i class="fa-regular fa-keyboard"></i>
                    <span>Bàn phím</span>
                  </li>
                  <li className="itemsanpham">
                    <i class="fa-solid fa-computer-mouse"></i>
                    <span>Chuột</span>
                  </li>
                  <li className="itemsanpham">
                    <i class="fa-solid fa-headphones"></i>
                    <span>Tai nghe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gird-column-10">
            <div className="danhmucoption">
              <div className="gird-column-1-4 mgtb10px">
                <div className="supportlist">
                  <i className="fa-solid fa-building-columns"></i>
                  <span>Hướng dẫn trả góp</span>
                </div>
              </div>
              <div className="gird-column-1-4 mgtb10px">
                <div className="supportlist">
                  <i className="fa-solid fa-building-columns"></i>
                  <span>Hướng dẫn thanh toán</span>
                </div>
              </div>
              <div className="gird-column-1-4 mgtb10px">
                <div className="supportlist">
                  <i className="fa-solid fa-wrench"></i>
                  <span>Chính sách bảo hành</span>
                </div>
              </div>
              <div className="gird-column-1-4 mgtb10px">
                <div className="supportlist">
                  <i className="fa-solid fa-truck-fast"></i>
                  <span>Chính sách vận chuyển</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Category;
