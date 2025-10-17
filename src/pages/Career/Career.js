import "./Css/Career.css";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";
import http from "../../http";
import { useEffect, useState } from "react";
import { CareerForm } from "./FormComponent/CareerForm";

export const Career = () => {

  const [CareerDetails, setCareerDetails] = useState({});
  
    useEffect(() => {
        const fetchCareer = async () => {
            // setLoading(true);
            try {
                const getresponse = await http.get("/get-career-content");
                setCareerDetails(getresponse.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally{
                // setLoading(false);
            }
        };

        fetchCareer();
    }, []);

  return (
    <div>
      <div 
        class="aboutusbannr"
        style={{
          backgroundImage: CareerDetails?.image_url && CareerDetails?.data?.banner_image
              ? `url(${CareerDetails.image_url}/${CareerDetails.data.banner_image})`
              : "none",
          }}
      >
        <div class="container-fluid">
          <div class="dfgnhdfjhgdf">
            <div class="row">
              <div class="col-lg-7"></div>
              <div class="col-lg-5">
                <div class="dfbhdf">
                  <h2>{CareerDetails.data?.banner_title && CareerDetails.data.banner_title}</h2>
                  <p>
                    {CareerDetails.data?.banner_description && CareerDetails.data.banner_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xfnhvjhdfbvgdfg">
        <div class="container">
          <div class="sdfhdfgdf">
            <div class="row">
              <div class="col-lg-4">
                <div class="fghdfgdf">
                  <div class="dfgdf">
                    {CareerDetails.data?.second_section_image_one && (
                      <img
                          src={`${CareerDetails.image_url}/${CareerDetails.data.second_section_image_one}`}
                          alt=""
                      />
                    )}
                  </div>
                  <div class="fbgdfg">
                    <h4>{CareerDetails.data?.second_section_title_one && CareerDetails.data.second_section_title_one}</h4>
                    <p>{CareerDetails.data?.second_section_description_one && CareerDetails.data.second_section_description_one}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="fghdfgdf">
                  <div class="dfgdf">
                    {CareerDetails.data?.second_section_image_two && (
                      <img
                          src={`${CareerDetails.image_url}/${CareerDetails.data.second_section_image_two}`}
                          alt=""
                      />
                    )}
                  </div>
                  <div class="fbgdfg">
                    <h4>{CareerDetails.data?.second_section_title_two && CareerDetails.data.second_section_title_two}</h4>
                    <p>{CareerDetails.data?.second_section_description_two && CareerDetails.data.second_section_description_two}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="fghdfgdf">
                  <div class="dfgdf">
                    {CareerDetails.data?.second_section_image_three && (
                      <img
                          src={`${CareerDetails.image_url}/${CareerDetails.data.second_section_image_three}`}
                          alt=""
                      />
                    )}
                  </div>
                  <div class="fbgdfg">
                    <h4>{CareerDetails.data?.second_section_title_three && CareerDetails.data.second_section_title_three}</h4>
                    <p>{CareerDetails.data?.second_section_description_three && CareerDetails.data.second_section_description_three}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ffgbhgdfgf">
        <div class="container">
          <div class="dfbgghdfgdfg">
            <h2>
              {CareerDetails.data?.third_section_title && CareerDetails.data.third_section_title}
            </h2>
            <div
                dangerouslySetInnerHTML={{
                __html:
                    CareerDetails.data?.third_section_description &&
                    CareerDetails.data.third_section_description,
                }} 
            />
          </div>
        </div>
      </div>

      <div
        class="dfhgdfbgdfbhjh65"
        style={{ backgroundImage: "url('/images/careerbgdown (1).png')", backgroundSize: "100% 100%"  }}
      >
        <div class="container">
          <div class="dfgndfgdfg">
            <div class="fbfdf">
              <h2>{CareerDetails.data?.form_title && CareerDetails.data.form_title}</h2>
              <div
                  dangerouslySetInnerHTML={{
                  __html:
                      CareerDetails.data?.form_description &&
                      CareerDetails.data.form_description,
                  }} 
              />
            </div>
            <CareerForm />
          </div>
        </div>
      </div>
      <div class="dfhfjhdfdf">
        <hr />
        <FooterTopComponent />
      </div>
    </div>
  );
};
