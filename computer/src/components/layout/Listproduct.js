import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
function Listproduct() {
  return (
    <div className="listproduct">
      <div className="grid">
        <div className="grid__row">
          <div className="titleproduct">
            <h1>Miễn Phí Giao Hàng Toàn Quốc</h1>
            <div className="showAll">
              <span>Xem Tất cả</span>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
          <div className="gird-column-2-4">
            <div className="itemproduct">
              <img src="https://product.hstatic.net/1000026716/product/viper_i1660s_610d90e1c8d3438bb35533c42e7a7df8_large.png" alt="" />
              <div className="nameproduct">
                <span>GVN VIPER i1660S</span>
              </div>
              <div className="poinproduct">
                <ul className="poin">
                  <li className="poinnow"><del>18,920,000₫</del></li>
                  <li className="poinnow">17,990,000₫</li>
                </ul>
                <div className="new-product-percent">-5%</div>
              </div>
            </div>
          </div>
          <div className="gird-column-2-4">
            <div className="itemproduct">
              <img src="https://product.hstatic.net/1000026716/product/viper_i1660s_610d90e1c8d3438bb35533c42e7a7df8_large.png" alt="" />
              <div className="nameproduct">
                <span>GVN VIPER i1660S</span>
              </div>
              <div className="poinproduct">
                <ul className="poin">
                  <li className="poinnow"><del>18,920,000₫</del></li>
                  <li className="poinnow">17,990,000₫</li>
                </ul>
                <div className="new-product-percent">-5%</div>
              </div>
            </div>
          </div>
          <div className="gird-column-2-4">
            <div className="itemproduct">
              <img src="https://product.hstatic.net/1000026716/product/viper_i1660s_610d90e1c8d3438bb35533c42e7a7df8_large.png" alt="" />
              <div className="nameproduct">
                <span>GVN VIPER i1660S</span>
              </div>
              <div className="poinproduct">
                <ul className="poin">
                  <li className="poinnow"><del>18,920,000₫</del></li>
                  <li className="poinnow">17,990,000₫</li>
                </ul>
                <div className="new-product-percent">-5%</div>
              </div>
            </div>
          </div>
          <div className="gird-column-2-4">
            <div className="itemproduct">
              <img src="https://product.hstatic.net/1000026716/product/viper_i1660s_610d90e1c8d3438bb35533c42e7a7df8_large.png" alt="" />
              <div className="nameproduct">
                <span>GVN VIPER i1660S</span>
              </div>
              <div className="poinproduct">
                <ul className="poin">
                  <li className="poinnow"><del>18,920,000₫</del></li>
                  <li className="poinnow">17,990,000₫</li>
                </ul>
                <div className="new-product-percent">-5%</div>
              </div>
            </div>
          </div>
          <div className="gird-column-2-4">
            <div className="itemproduct">
              <img src="https://product.hstatic.net/1000026716/product/viper_i1660s_610d90e1c8d3438bb35533c42e7a7df8_large.png" alt="" />
              <div className="nameproduct">
                <span>GVN VIPER i1660S</span>
              </div>
              <div className="poinproduct">
                <ul className="poin">
                  <li className="poinnow"><del>18,920,000₫</del></li>
                  <li className="poinnow">17,990,000₫</li>
                </ul>
                <div className="new-product-percent">-5%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="paging">
          <ul className="pagenext">
            <li className="pagenextitem">1</li>
            <li className="pagenextitem">2</li>
            <li className="pagenextitem">3</li>
            <li className="pagenextitem">...</li>
            <li className="pagenextitem">5</li>
            <li className="pagenextitem">6</li>
            <li className="pagenextitem">{'>'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// function Footer() {
//   return <footer />;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <ListProduct />
//     <Footer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default Listproduct;
