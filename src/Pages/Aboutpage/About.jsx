import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="about mt-5 mb-3">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6">
              <h3>Aktif Peduli dengan Lingkungan</h3>
              <img src="https://trade-leaks.org/wp-content/uploads/2017/06/Slideshow-1.jpg" className="img-fluid rounded-4 mb-4" alt="" />
              <p>My Nature hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. My Nature memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami.</p>
              <p>
                {" "}
                Kami akan melakukan suatu perubahan positif untuk lingkungan di seluruh Indonesia yang dimulai dari lingkup terkecil. Terima kasih atas kepedulian dan bantuanmu. Inilah kemenangan kita, inilah kemenangan untuk lingkungan!
              </p>
            </div>

            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">My Nature memiliki Visi Misi yang melandasi semangat kami</p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Kedaulatan masyarakat untuk pengelolaan sumber daya alam yang berkeadilan dan berkelanjutan
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Merancang, melakukan riset dan mengkampanyekan langkah-langkah nyata demi terwujudnya masa depan yang hijau dan damai bagi kita semua
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Meningkatkan kepedulian dan kesadaran generasi penerus akan pentingnya menjaga bumi
                  </li>
                </ul>

                <div className="position-relative mt-4">
                  <img src="https://photo.kontan.co.id/photo/2022/02/27/677516015p.jpg" className="img-fluid rounded-4" alt="" />
                  <a href="https://youtu.be/MAWv4SlDg-E" className="glightbox play-btn"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team text-center mt-5 mb-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Team</h2>
            <h5>FEBE 12</h5>
          </div>

          <div id="team-card" className="row gy-4 text-center">
            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1669991589/avatar/Donita_okcpfv.jpg" className="img-fluid" alt="" />
                <h4>Donita Primi</h4>
                <span>Front-End Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/donitaprimi">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/donitaprimimw">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="member">
                <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1669991250/avatar/tegar_fnkfxb.jpg" className="img-fluid" alt="" />
                <h4>Tegar Risqy Ys</h4>
                <span>Front-End Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/tgr_rys/" target="_blank">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/tegar-risqy-yulian-santoso/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1669991594/avatar/PotoReza_bvjkze.jpg" className="img-fluid" alt="" />
                <h4>Reza Saputra</h4>
                <span>Front-End Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="team-card" className="row mt-3 gy-4 text-center">
            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="member">
                <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1669991702/avatar/sheha_n8s6es.png" className="img-fluid" alt="" />
                <h4>Sheha Luthfi</h4>
                <span>Back-End Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/donitaprimi">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/donitaprimimw">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="member">
                <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1669991591/avatar/fanuel_cechac.jpg" className="img-fluid" alt="" />
                <h4>Fanuel Ari</h4>
                <span>Back-End Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/tgr_rys/" target="_blank">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/tegar-risqy-yulian-santoso/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div className="member">
                <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1669991592/avatar/foto_saya_etn3rh.jpg" className="img-fluid" alt="" />
                <h4>Dustin Bayu</h4>
                <span>Back-End Development</span>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact mt-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
            <h5>Terima kasih atas minat kamu pada My Nature.</h5>
            <p>Jika kamu mempunyai pertanyaan, atau keperluan silakan langsung hubungi kami melalui email, telepon, atau berkunjung langsung ke kantor kami.</p>
          </div>

          <div className="row gx-lg-0 gy-4">
            <div className="col-lg-4">
              <div className="info-container d-flex flex-column align-items-center justify-content-center">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>Kecamatan Menteng, Jakarta Pusat</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>info.id@greenpeace.org</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+62 21 3148521</p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-clock flex-shrink-0"></i>
                  <div>
                    <h4>Open Hours:</h4>
                    <p>Mon-Sat: 11AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
