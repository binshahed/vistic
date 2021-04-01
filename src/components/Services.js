import OwlCarousel from 'react-owl-carousel';
import boxImg1 from '../assets/images/s1.png'
import boxImg2 from '../assets/images/s2.png'
import boxImg3 from '../assets/images/s3.png'
import boxImg4 from '../assets/images/s4.png'
import boxImg5 from '../assets/images/s5.png'

const Services = () => {
    return (
        <section className="service_section layout_padding-bottom">
        <div className="container-fluid">
          <div className="heading_container heading_center ">
            <h2 className="">
              Our Services
            </h2>
            <p className="col-lg-8 px-0">
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
            </p>
          </div>
          <div className="service_container">
            <div className="carousel-wrap ">
              <OwlCarousel 
              items={3}
              loop={true}
              autoPlay={true}
              active={true}
               className="service_owl-carousel owl-carousel">
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={boxImg1} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Electrical Repairs
                      </h5>
                      <p>
                        Repellat perspiciatis sint in minus! Quaerat numquam nobis expedita debitis aut optio omnis voluptas quos voluptatem possimus reprehenderit repellendus mollitia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={boxImg2} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Equipment Installation
                      </h5>
                      <p>
                        Repellat perspiciatis sint in minus! Quaerat numquam nobis expedita debitis aut optio omnis voluptas quos voluptatem possimus reprehenderit repellendus mollitia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                      <img src={boxImg3} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Electrical Wiring
                      </h5>
                      <p>
                        Repellat perspiciatis sint in minus! Quaerat numquam nobis expedita debitis aut optio omnis voluptas quos voluptatem possimus reprehenderit repellendus mollitia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                    <img src={boxImg4} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Electrical Security
                      </h5>
                      <p>
                        Repellat perspiciatis sint in minus! Quaerat numquam nobis expedita debitis aut optio omnis voluptas quos voluptatem possimus reprehenderit repellendus mollitia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box ">
                    <div className="img-box">
                    <img src={boxImg5} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>
                        Lighting
                      </h5>
                      <p>
                        Repellat perspiciatis sint in minus! Quaerat numquam nobis expedita debitis aut optio omnis voluptas quos voluptatem possimus reprehenderit repellendus mollitia.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel >
            </div>
          </div>
          <div className="btn-box">
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </section>
    );
};

export default Services;