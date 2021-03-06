import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ClintImg from '../assets/images/client.jpg'

const Testimonial = () => {
    return (
        <section class="client_section layout_padding">
        <div class="container ">
          <div class="heading_container heading_center">
            <h2> Testimonial</h2>
            <hr/>
          </div>
          <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-lg-7 col-md-9 mx-auto">
                    <div class="client_container ">
                      <div class="detail-box">
                        <p>
                          Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                        </p>
                        <span>
                          
                          <FontAwesomeIcon  icon={faQuoteLeft} />
                        </span>
                      </div>
                      <div class="client_id">
                        <div class="img-box">
                          <img src={ClintImg} alt=""/>
                        </div>
                        <div class="client_name">
                          <h5>
                            Jone Mark
                          </h5>
                          <h6>
                            Customer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-7 col-md-9 mx-auto">
                    <div class="client_container ">
                      <div class="detail-box">
                        <p>
                          Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                        </p>
                        <span>
                        <FontAwesomeIcon  icon={faQuoteLeft} />
                        </span>
                      </div>
                      <div class="client_id">
                        <div class="img-box">
                        <img src={ClintImg} alt=""/>
                        </div>
                        <div class="client_name">
                          <h5>
                            Jone Mark
                          </h5>
                          <h6>
                            Customer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col-lg-7 col-md-9 mx-auto">
                    <div class="client_container ">
                      <div class="detail-box">
                        <p>
                          Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                        </p>
                        <span>
                        <FontAwesomeIcon  icon={faQuoteLeft} />
                        </span>
                      </div>
                      <div class="client_id">
                        <div class="img-box">
                        <img src={ClintImg} alt=""/>
                        </div>
                        <div class="client_name">
                          <h5>
                            Jone Mark
                          </h5>
                          <h6>
                            Customer
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel_btn-box">
              <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                <span>
                <FontAwesomeIcon  icon={faArrowLeft} />
                </span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                <span>
                <FontAwesomeIcon  icon={faArrowRight} />
                </span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Testimonial;