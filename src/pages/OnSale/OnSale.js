import http from "../../http";
import { Link } from "react-router-dom";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css"; // core styles
import "swiper/css/navigation"; // if using navigation
import "swiper/css/pagination"; // if using pagination

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./OnSale.css";

export const OnSale = () => {

 const [OnSaleDetails, setOnSaleDetails] = useState({});

    useEffect(() => {
        const fetchOnSale = async () => {
            // setLoading(true);
            try {
                const getresponse = await http.get("/fetch-onsale-page");
                // console.log("API response:", getresponse.data);
                setOnSaleDetails(getresponse.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally{
                // setLoading(false);
            }
        };

        fetchOnSale();
    }, []);


  return (
    <div>
      <div class="dfgjhdfgdf">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <Link to={OnSaleDetails?.data?.url}>
            <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.banner_image}`} className="img-fluid" alt="Slide 1" />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={OnSaleDetails?.data?.url}>
            <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.banner_image}`} className="img-fluid" alt="Slide 2" />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to={OnSaleDetails?.data?.url}>
            <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.banner_image}`} className="img-fluid" alt="Slide 2" />
            </Link>
          </SwiperSlide>

        </Swiper>
      </div>

      <div class="dfgnhidfjugd">
        <div class="container-fluid">
          <div class="dfjvdgd">
             <h2>{OnSaleDetails?.data?.section2_title}</h2>
          </div>
          <div class="dffgydfdf mt-4">
            <div class="row">

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url1}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image1})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text1}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url2}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image2})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text2}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url3}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image3})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text3}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url4}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image4})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text4}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url5}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image5})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text5}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url6}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image6})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text6}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url7}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image7})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text7}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url8}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image8})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text8}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url9}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image9})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text9}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url10}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image10})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text10}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url11}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image11})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text11}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-3">
                 <Link to={OnSaleDetails?.data?.section2_url12}>
                <div
                  class="fhgdfg"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section2_image12})`,
                  }}
                >
                  
                  <div class="overlay-sales">
                    <div class="cvbjhdfdf">
                      <h4>{OnSaleDetails?.data?.section2_text12}</h4>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
 
            </div>
          </div>
        </div>
      </div>

      <div class="fkvbhjhdfgdfg mt-4">
        <div class="container-fluid">
          <div class="dfjvdgd">
            <h2>{OnSaleDetails?.data?.section3_title}</h2>
          </div>
          <div class="fghdfg mt-4">
            <div class="row">

              
              <div class="col-lg-4 mb-4">
                <Link to={OnSaleDetails?.data?.section3_url1}></Link>
                <div
                  class="dfgfdg7853"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section3_image1})`,
                  }}
                >
                  <div class="hdfbjh554">
                    <h5>STYLIES UNDER</h5>
                    <h5>
                      <i class="fa-solid fa-indian-rupee-sign"></i>{OnSaleDetails?.data?.section3_text1} 
                    </h5>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <Link to={OnSaleDetails?.data?.section3_url2}>
                <div
                  class="dfgfdg7853"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section3_image2})`,
                  }}
                >
                  <div class="hdfbjh554">
                    <h5>STYLIES UNDER</h5>
                    <h5>
                      <i class="fa-solid fa-indian-rupee-sign"></i>{OnSaleDetails?.data?.section3_text2} 
                    </h5>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-4 mb-4">
                <Link to={OnSaleDetails?.data?.section3_url3}>
                <div
                  class="dfgfdg7853"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section3_image3})`,
                  }}
                >
                  <div class="hdfbjh554">
                    <h5>STYLIES UNDER</h5>
                    <h5>
                      <i class="fa-solid fa-indian-rupee-sign"></i>{OnSaleDetails?.data?.section3_text3} 
                    </h5>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-4 mb-4">
                <Link to={OnSaleDetails?.data?.section3_url4}>
                <div
                  class="dfgfdg7853"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section3_image4})`,
                  }}
                >
                  <div class="hdfbjh554">
                    <h5>STYLIES UNDER</h5>
                    <h5>
                      <i class="fa-solid fa-indian-rupee-sign"></i>{OnSaleDetails?.data?.section3_text4} 
                    </h5>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-4 mb-4">
                <Link to={OnSaleDetails?.data?.section3_url5}>
                <div
                  class="dfgfdg7853"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section3_image5})`,
                  }}
                >
                  <div class="hdfbjh554">
                    <h5>STYLIES UNDER</h5>
                    <h5>
                      <i class="fa-solid fa-indian-rupee-sign"></i>{OnSaleDetails?.data?.section3_text5} 
                    </h5>
                  </div>
                </div>
                </Link>
              </div>

              <div class="col-lg-4 mb-4">
                <Link to={OnSaleDetails?.data?.section3_url6}>
                <div
                  class="dfgfdg7853"
                  style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section3_image6})`,
                  }}
                >
                  <div class="hdfbjh554">
                    <h5>STYLIES UNDER</h5>
                    <h5>
                      <i class="fa-solid fa-indian-rupee-sign"></i>{OnSaleDetails?.data?.section3_text6} 
                    </h5>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sdhfdfgdf mt-5">
        <div class="container-fluid">
          <div class="dfjvdgd">
            <h2>{OnSaleDetails?.data?.section4_title}</h2>
          </div>
            <Link to={OnSaleDetails?.data?.section4_url}>
          <div class="dfngjhfdgdf">
            <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section4_image}`}  alt="onsale"/>
          </div>
          </Link>   
        </div>
      </div>

      <div class="fjsdjhfsdf55">
        <div class="container-fluid">
          <div class="dfjvdgd">
            <h2>{OnSaleDetails?.data?.section5_title}</h2>
          </div>

          <div class="dfgjhdfgdfgf mt-4">

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image1})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text1}</h5>
                  <Link to={OnSaleDetails?.data?.section5_url1}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image2})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text2}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url2}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image3})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text3}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url3}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image4})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text4}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url4}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image5})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text5}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url5}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image6})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text6}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url6}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image7})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text7}</h5>
                  <Link to={OnSaleDetails?.data?.section5_url7}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image8})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text8}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url8}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image9})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text9}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url9}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              class="dfbdff"
              style={{
                    backgroundImage: `url(${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section5_image10})`,
                  }}
            >
              <div class="overlay-sale">
                <div class="fdbdfgdf">
                  <h6>Up to 50% off</h6>
                </div>
                <div class="bsdfhsdfsdf">
                  <h5>{OnSaleDetails?.data?.section5_text10}</h5>
                   <Link to={OnSaleDetails?.data?.section5_url10}>
                  <button>SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div class="sdhfdfgdf">
        <div class="container-fluid">
          <div class="dfjvdgd">
            <h2>{OnSaleDetails?.data?.section6_title}</h2>
          </div>

          <div class="dfngjhfdgdf sdcvewfaasd overflow-hidden">
            <div className="row">
              <div className="col-lg-4 pe-0">
                <Link to={OnSaleDetails?.data?.section6_url1}>
                <div className="donhweirwer_inner">
                  <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section6_image1}`} className="img-fluid" alt="onsale" />
                </div>
                </Link>
              </div>

              <div className="col-lg-4 px-0">
                <Link to={OnSaleDetails?.data?.section6_url2}>
                <div className="donhweirwer_inner">
                  <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section6_image2}`} className="img-fluid" alt="onsale" />
                </div>
                </Link>
              </div>

              <div className="col-lg-4 ps-0">
                <Link to={OnSaleDetails?.data?.section6_url3}>
                <div className="donhweirwer_inner">
                  <img src={`${OnSaleDetails?.image_url}/${OnSaleDetails?.data?.section6_image3}`} className="img-fluid" alt="onsale" />
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lknaknjdoijweewpr py-4 mb-5">
        <div className="container-fluid">
          <img src="./images/On-Sale-Last-Row.jpg" className="img-fluid" alt="" />
        </div>
      </div>

      <hr />
      <FooterTopComponent />
    </div>
  );
};
