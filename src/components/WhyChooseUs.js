import CountUp from 'react-countup';
import WhyBgBox from '../assets/images/why-bg.jpg'


const WhyChooseUs = () => {
    return (
        <section className="why_us_section layout_padding">
    <div className="why_bg_box">
      <img src={WhyBgBox} alt=""/>
    </div>
    <div className="why_us_container">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Why Choose Us
          </h2>
          <p>
            Pariatur ullam dolore commodi explicabo minima maxime quisquam
          </p>
        </div>
        <div className="box_container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="box">
                <div className="num-box">
                  <span id="countDay" className="count">
                  <CountUp start={0} end={3650} duration={5} />
                  </span>
                </div>
                <h5>
                  Hours Of Work
                </h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="box">
                <div className="num-box">
                  <span id="countHour" className="count">
                  <CountUp start={0} end={246} duration={5} />
                  </span>
                </div>
                <h5>
                  Satisfied Clients
                </h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="box">
                <div className="num-box">
                  <span id="countMin" className="count">
                  <CountUp start={0} end={1278} duration={5} />
                  </span>
                </div>
                <h5>
                  Projects Done
                </h5>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="box">
                <div className="num-box">
                  <span id="countSec" className="count">
                  <CountUp start={0} end={119} duration={5} />
                  </span>
                </div>
                <h5>
                  Awards Won
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box ">
          <a href="why_us.html">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>
    );
};

export default WhyChooseUs;