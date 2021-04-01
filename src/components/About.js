import aboutImg from '../assets/images/about-img.jpg'

const About = () => {
    return (
        <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="detail-box pr-md-2">
            <div className="heading_container">
              <h2 className="">
                About Us
              </h2>
            </div>
            <p className="detail_p_mt">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
            </p>
            <a href="about.html" className="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="img-box ">
            <img src={aboutImg} className="box_img" alt="about img"/>
                
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default About;