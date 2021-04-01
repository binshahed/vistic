
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Slider = () => {
  return (
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                      We Provide 
                      Electrical Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                      We Provide 
                      Electrical Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-lg-10 col-md-11 mx-auto">
                  <div className="detail-box">
                    <h1>
                      We Provide 
                      Electrical Services
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
          <FontAwesomeIcon  icon={faArrowLeft} />
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            
            <FontAwesomeIcon  icon={faArrowRight} />

            {/* <span classNameName="sr-only">Next</span> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
