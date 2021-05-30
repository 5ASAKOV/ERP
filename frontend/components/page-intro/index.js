import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import Link from 'next/link';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">

      <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/orng.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>RINNEOR</h2>
                <Link href={'/products'}>
                    <a href="" className="btn-shop"><i className="icon-right"></i>Shop now</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/back1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>RINNEOR</h2>
                <Link href={'/products'}>
                    <a href="" className="btn-shop"><i className="icon-right"></i>Shop now</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>Summer opportunity</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Available on every location in Europe</h4>
                <p>Two click away</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Giving your money back</h4>
                <p>If you are not satisfied with our product, we will refund.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro