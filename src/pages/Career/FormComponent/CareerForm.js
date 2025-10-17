import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import http from "../../../http";


export const CareerForm = () => {

    const fileInputRef = useRef(null);

    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        contact_no: "",
        email: "",
        hightest_education: "",
        specification: "",
        job_position: "",
        date_of_birth: "",
        address: "",
        upload_cv: null,

    });
    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "upload_cv") {
        setInputs({ ...inputs, [name]: files[0] });
        } else {
        setInputs({ ...inputs, [name]: value });
        }
    };



    const validateInputs = (inputs) => {
        const newErrors = {};
    
        if (!inputs.first_name.trim()) {
          newErrors.first_name = "First Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.first_name)) {
          newErrors.first_name = "First Name can only contain letters and spaces";
        }

        if (!inputs.last_name.trim()) {
          newErrors.last_name = "Last Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.last_name)) {
          newErrors.last_name = "Last Name can only contain letters and spaces";
        }

        if (!inputs.contact_no.trim()) {
          newErrors.contact_no = "Contact No is required";
        } else if (!/^\d{10}$/.test(inputs.contact_no)) {
          newErrors.contact_no = "Enter a valid 10-digit Contact No";
        }

        if (!inputs.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
          newErrors.email = "Enter a valid email address";
        }
    
        if (!inputs.hightest_education) {
          newErrors.hightest_education = "Hightest Education is required";
        }
    
        if (!inputs.specification.trim()) {
          newErrors.specification = "Specification is required";
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.specification)) {
          newErrors.specification = "Specification can only contain letters and spaces";
        }

        if (!inputs.job_position.trim()) {
          newErrors.job_position = "Job Position is required";
        }
        if (!inputs.date_of_birth.trim()) {
          newErrors.date_of_birth = "Date Of Birth is required";
        }
        if (!inputs.address.trim()) {
          newErrors.address = "Address is required";
        }

        if (!inputs.upload_cv) {
            newErrors.upload_cv = "CV upload is required";
        } else if (
            inputs.upload_cv.type !== "application/pdf" &&
            !inputs.upload_cv.type.startsWith("image/")
        ) {
            newErrors.upload_cv = "Only PDF or image files allowed";
        } else if (inputs.upload_cv.size > 2 * 1024 * 1024) {
            newErrors.upload_cv = "File size must be under 2MB";
        }
    
        return newErrors;
    };

    // Form submission
    const submitForm = async (e) => {
        e.preventDefault();
        
          const validationErrors = validateInputs(inputs);
    
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
    
          setErrors({});
        //   loading(true);
    
        try {
            const formData = new FormData();
            Object.entries(inputs).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await http.post("/apply-for-job", formData, {
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
                    first_name: "",
                    last_name: "",
                    contact_no: "",
                    email: "",
                    hightest_education: "",
                    specification: "",
                    job_position: "",
                    date_of_birth: "",
                    address: "",
                    upload_cv: null,
                });
            }else{
              toast.error(response.data.message, {
                  style: {
                    background: "#e74c3c", // red for error
                    color: "#fff",
                  },
                });
                setInputs({
                    first_name: "",
                    last_name: "",
                    contact_no: "",
                    email: "",
                    hightest_education: "",
                    specification: "",
                    job_position: "",
                    date_of_birth: "",
                    address: "",
                    upload_cv: null,
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
    <div>
      <form noValidate onSubmit={submitForm} encType="multipart/form-data">
        <div className="row">
          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-control"
                name="first_name"
                value={inputs.first_name}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors.first_name}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-control"
                name="last_name"
                value={inputs.last_name}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors.last_name}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Contact No</label>
              <input
                type="text"
                placeholder="Enter Contact No"
                className="form-control"
                name="contact_no"
                maxLength={10}
                value={inputs.contact_no}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors.contact_no}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors.email}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Highest Educational Level</label>
              <select name="hightest_education" id="" className="form-select" value={inputs.hightest_education} onChange={handleChange}>
                <option value="">Choose One</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
                <option value="BCS">BCS</option>
                <option value="MCA">MCA</option>
                <option value="B.TECH">B.TECH</option>
                <option value="M.TECH">M.TECH</option>
              </select>
              <p style={{ color: "red" }}>{errors.hightest_education}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Specification</label>
              <input
                type="text"
                placeholder="Enter Specification"
                className="form-control"
                name="specification"
                value={inputs.specification}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors.specification}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Post applied For</label>
              <select name="job_position" id="" className="form-select" value={inputs.job_position} onChange={handleChange}>
                <option value="">Choose One</option>
                <option value="web_developer">Web Developer</option>
                <option value="web_designer">Web Designer</option>
                <option value="content_writer">Content Writer</option>
                <option value="graphics_designer">Graphics Designer</option>
                <option value="digital_marketer">Digital Marketer</option>
              </select>
              <p style={{ color: "red" }}>{errors.job_position}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Date of Birth</label>
              <input
                type="date"
                placeholder="Enter Date of Birth"
                className="form-control"
                name="date_of_birth"
                value={inputs.date_of_birth}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{errors.date_of_birth}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Address</label>
              <textarea
                name="address"
                id=""
                className="form-control"
                rows="3"
                cols="3"
                placeholder="Text here"
                value={inputs.address}
                onChange={handleChange}
              ></textarea>
              <p style={{ color: "red" }}>{errors.address}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="jhgdfg57">
              <label for="">Upload CV</label>
              <input
                type="file"
                placeholder="Enter Upload CV"
                className="form-control"
                name="upload_cv"
                accept=".pdf,image/*"
                onChange={handleChange}
                ref={fileInputRef}
              />
              <p style={{ color: "red" }}>{errors.upload_cv}</p>
            </div>
          </div>
        </div>
        <div className="">
            <button className="btn btn-main">Submit</button>
        </div>
      </form>
      <ToastContainer
            position="top-right"
            autoClose={3000}
            style={{ zIndex: 9999999999 }}
        />
    </div>
  );
};
