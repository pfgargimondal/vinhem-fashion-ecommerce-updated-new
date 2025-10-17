import { useEffect, useRef, useState } from "react";
import styles from "./ContactUs.module.css";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactUs = () => {
  const [ContactUsDetails, setContactUsDetails] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");


  useEffect(() => {
    const fetchContactUsData = async () => {
      // setLoading(true);
      try {
        const getresponse = await http.get("/get-contact-us-details");
        setContactUsDetails(getresponse.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchContactUsData();
  }, []);

  const fileInputRef = useRef(null);

    const [inputs, setInputs] = useState({
          email: "",
          like_toKnow: "",
          need_help: "",
          more_details: "",
          attached_file: null,

    });
    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "attached_file") {
        setInputs({ ...inputs, [name]: files[0] });
        } else {
        setInputs({ ...inputs, [name]: value });
        }
    }; 



    const validateInputs = (inputs) => {
        const newErrors = {};

        if (!inputs.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
          newErrors.email = "Enter a valid email address";
        }
    
        if (!inputs.like_toKnow) {
          newErrors.like_toKnow = "Like To Know Feild is required";
        }
    
        if (!inputs.need_help) {
          newErrors.need_help = "Need Help Feild is required";
        }
        if (!inputs.more_details.trim()) {
          newErrors.more_details = "More Details Feild is required";
        }

        // if (!inputs.attached_file) {
        //     newErrors.attached_file = "Choose File Feild is required";
        // }  
        
        if (!inputs.attached_file.type.startsWith("image/")) {
            newErrors.attached_file = "Only image files allowed";
        } else if (inputs.attached_file.size > 2 * 1024 * 1024) {
            newErrors.attached_file = "File size must be under 2MB";
        }
    
        return newErrors;
    };

      const handleCaptcha = (token) => setCaptchaToken(token);

    // Form submission
    const submitForm = async (e) => {
        e.preventDefault();
        
          const validationErrors = validateInputs(inputs);
    
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }

            if (!captchaToken) {
              toast.error("Please verify reCAPTCHA");
              return;
            }
    
          setErrors({});
        //   loading(true);
    
        try {
            const formData = new FormData();
            Object.entries(inputs).forEach(([key, value]) => {
                formData.append(key, value);
            });
            formData.append("recaptcha_token", captchaToken);

            const response = await http.post("/store-enquiry", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            if (response.data.success) {

                toast.success(response.data.message, {
                  style: {
                    background: "#2ecc71",
                    color: "#fff",
                  },
                });
    
                setInputs({
                    email: "",
                    like_toKnow: "",
                    need_help: "",
                    more_details: "",
                    attached_file: null,
                });
            }else{
              toast.error(response.data.message, {
                  style: {
                    background: "#e74c3c", // red for error
                    color: "#fff",
                  },
                });
                setInputs({
                    email: "",
                    like_toKnow: "",
                    need_help: "",
                    more_details: "",
                    attached_file: null,
                });
            }

            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }
          } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong.");
          } finally {
            // loading(false);
          }
        };


  return (
    <div className={` ${styles.jvjhubjkjoij} mt-5`}>
      <div className="container">
        <h1> {ContactUsDetails.data?.title && ContactUsDetails.data.title} </h1>
        <div
          className={styles.p1}
          dangerouslySetInnerHTML={{
            __html:
              ContactUsDetails.data?.description &&
              ContactUsDetails.data.description,
          }} 
        />

        <br/>

        <div className={styles.addressSection}>
            {ContactUsDetails.data?.office_status === 'warehouse_office' && (
              <>
                <h3>Warehouse Address: (Operation Center)</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ContactUsDetails.data?.wholeale_address || "",
                  }}
                />
              </>
            )}

            {ContactUsDetails.data?.office_status === 'regd_office' && (
              <>
                <h3 className={styles.sjkdefnvb}>Regd. Office Address: </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      ContactUsDetails.data?.regd_address &&
                      ContactUsDetails.data.regd_address,
                  }}
                />
              </>
            )}

            {ContactUsDetails.data?.office_status === 'branch_office' && (
              <>
                <h3> Branch Office Address: (Operation Center) </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      ContactUsDetails.data?.branch_office_address &&
                      ContactUsDetails.data.branch_office_address,
                  }}
                />
              </>
            )}
        
        <br />
        <p>
          {ContactUsDetails.data?.form_title &&
            ContactUsDetails.data.form_title}
        </p>
        <div className={styles.xfhgjhusfgsd}>
            <div className="container">
                <div className={styles.bfghfds}>
                  <form noValidate onSubmit={submitForm} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className={styles.fgsdhfsdf66546}>
                                <div className={styles.sdbfsdhf}>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className={styles.dsbfsdjhf}>
                                                <label for="">My Email Id <span>*</span></label>

                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className={styles.dfdfg55}>
                                                 <input type="email"
                                                    name="email"
                                                    placeholder="E-Mail Address"
                                                    value={inputs.email}
                                                    onChange={handleChange} 
                                                    className="form-control" />
                                              <p style={{ color: "red" }}>{errors.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.sdbfsdhf}>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className={styles.dsbfsdjhf}>
                                                <label for="">I'd like to know about <span>*</span></label>

                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                           <div className={styles.dfdfg55}>
                                                 <input type="text" name="like_toKnow" value={inputs.like_toKnow}
                                                    onChange={handleChange} className="form-control" placeholder="" />

                                                <p style={{ color: "red" }}>{errors.like_toKnow}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                  <div className={styles.sdbfsdhf}>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className={styles.dsbfsdjhf}>
                                                <label for="">I Need help at <span>*</span></label>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                           <div className={styles.dfdfg5www5}>
                                                <select name="need_help" id="" value={inputs.need_help} className="form-select" onChange={handleChange}>
                                                    <option value="">Choose One..</option>
                                                    <option value="Check the status of order">Check the status of order</option>
                                                    <option value="Question about our producct">Question about our producct</option>
                                                    <option value="Technical assistance">Technical assistance</option>
                                                    <option value="Shiping information">Shiping information</option>
                                                </select>
                                                <p style={{ color: "red" }}>{errors.need_help}</p>
                                            </div>
                                        </div>
                                    </div>
                                  </div>

                                  <div className={styles.sdbfsdhf}>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className={styles.dsbfsdjhf}>
                                                <label for="">More Details  <span>*</span></label>

                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className={styles.fbdf454}>
                                                <textarea name="more_details" id="" placeholder="Text Me..." value={inputs.more_details} 
                                                  onChange={handleChange} rows="4" cols="4" className="form-control"></textarea>

                                                <p style={{ color: "red" }}>{errors.more_details}</p>

                                                <input type="file" className={styles.inputFile} id="file" 
                                                    name="attached_file"
                                                    accept="image/*"
                                                    onChange={handleChange}
                                                    ref={fileInputRef}
                                                    // multiple data-multiple-caption="{count} files selected" 
                                                    />

                                                <label for="file" className={`btn ${styles.btnUpload}`}>
                                                  <i className="fa-solid fa-plus"></i> Choose File
                                                </label>
                                                <p style={{ color: "red" }}>{errors.attached_file}</p>
                                            </div>


                                            <ReCAPTCHA
                                                sitekey="6Lfg6HwrAAAAAIFNXRViSAvHT3R3edYCk8Hg_pHA" // 🔁 Replace this
                                                onChange={handleCaptcha}
                                                className="mb-3"
                                              />
                                              {!captchaToken && (
                                                <p style={{ color: "red" }}>Please verify reCAPTCHA</p>
                                              )}

                                            <div className={styles.dfbdfhsd}>
                                                <button type="submit" className={styles.btn55}>Submit</button>
                                                <button className={styles.btn55aa}>Cancel</button>  
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div>
                    </form>
                </div>
            </div>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={3000}
            style={{ zIndex: 9999999999 }}
        />
      </div>
      </div>
    </div>
  );
};
