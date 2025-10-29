import { Link } from "react-router-dom";
import { UserProfileNavMenu } from "../../components";
import styles from "./Css/Profile.module.css";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import http from "../../http";
import { ToastContainer, toast } from "react-toastify";

export const Profile = () => {
  const { user, token, dispatch } = useAuth(); // ✅ from AuthContext

  const [previewImage, setPreviewImage] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    gender: "",
    bio: "",
    date_of_birth: "",
    national_id: "",
    country: "",
    city: "",
    pin: "",
  });

  // ✅ Load user into state
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone_no: user.phone_no || "",
        gender: user.gender || "",
        bio: user.bio || "",
        date_of_birth: user.date_of_birth || "",
        national_id: user.national_id || "",
        country: user.country || "",
        city: user.city || "",
        pin: user.pin || "",
      });

      if (user.profile_picture) {
        setPreviewImage(user.profile_picture);
      }
    }
  }, [user]);

  const handleEdit = () => setIsEditable(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Save profile
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await http.post("/user/profile/update", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message || "Profile updated!");

        dispatch({
          type: "UPDATE_PROFILE",
          payload: response.data.data, // only user data
        });

        setIsEditable(false);
      } else {
        toast.error(response.data.message || "Failed to update profile");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.");
    }
  };

  // ✅ Image upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // preview instantly
      await handleImageUpload(file);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const fd = new FormData();
      fd.append("profile_image", file);

      const response = await http.post("/user/profile/upload-image", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success("Profile picture updated!");

        if (response.data.image_url) {
          setPreviewImage(response.data.image_url);

          dispatch({
            type: "UPDATE_PROFILE",
            payload: { profile_picture: response.data.image_url }, // merge into user
          });
        }
      } else {
        toast.error("Failed to upload image.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Upload failed.");
    }
  };


  return (
    <div className="sdfgtrfegrgtrg">
      <div className={styles.ffhfdf}>
        <div className={styles.fbghdfg}>
          <div className="row">
            <div className="col-lg-3">
              <UserProfileNavMenu />
            </div>

            <div className="col-lg-9">
              <div className={`${styles.fgcbdfgdf} pt-3 pb-5`}>
                <div className={`${styles.dfjhdsbfsdf} mb-4`}>
                  <h4 className="mb-0">Profile Information</h4>
                  <p className="mb-0">
                    <Link to="/">
                      <i className="fa-solid me-1 fa-arrow-left"></i> Back To
                      Home <i className="fa-solid ms-1 fa-house"></i>
                    </Link>
                  </p>
                </div>

                <div className={`${styles.fbhdfs} mb-4`}>
                  <div className={`${styles.dfghdfgdf} mb-4`}>
                    <div className={`${styles.sdfjhsdfs} position-relative`}>
                      <img
                        src={previewImage || "./images/pfle.jpg"}
                        alt="Profile"
                      />

                      <label
                        htmlFor="usr-prfle-upld"
                        className={`${styles.indiwerwer} position-absolute`}
                      >
                        <i className="bi text-white position-absolute bi-upload"></i>
                      </label>

                      <input
                        type="file"
                        className="d-none"
                        id="usr-prfle-upld"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className={styles.dfbghdfg}>
                      <h5 className="mb-0">{formData.name}</h5>
                    </div>
                  </div>
                </div>

                <div className={styles.sdfnsdjkfsdf}>
                  <div
                    className={`mb-3 ${styles.fbhdfs} ${styles.fdndfjh} d-flex align-items-center justify-content-between`}
                  >
                    <h5 className={`${styles.acdfvdscvdrtefr}`}>
                      Personal Details
                    </h5>
                    <button className="btn" onClick={handleEdit}>
                      <i className="fa-solid fa-pen"></i> Edit
                    </button>
                  </div>

                  <form>
                    <div className={styles.sdksdfsdf}>
                      <div className="row">
                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>Full Name</label>

                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              disabled={!isEditable}
                              placeholder="Ravindra Jadeja"
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>Email Address</label>

                            <input
                              type="email"
                              className="form-control"
                              placeholder="jaddu@gmail.com"
                              name="email"
                              value={formData.email}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>Phone Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="7854952585"
                              oninput="this.value = this.value.replace(/[^0-9.]/g, '');"
                              name="phone_no"
                              maxLength={10}
                              value={formData.phone_no}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>Gender</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Male"
                              name="gender"
                              value={formData.gender}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>Bio</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Customer Service Manager"
                              name="bio"
                              value={formData.bio}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>Date Of Birth</label>
                            <input
                              type="date"
                              className="form-control"
                              placeholder="10 june 2004"
                              name="date_of_birth"
                              value={formData.date_of_birth}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4 mb-3">
                          <div className={styles.dhfsdfd}>
                            <label>National ID</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="658-8568-8586"
                              name="national_id"
                              value={formData.national_id}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.dfgdfg6526} mt-5`}>
                      <h5 className={`mb-3 ${styles.acdfvdscvdrtefr}`}>
                        Address Details
                      </h5>
                    </div>

                    <div className={styles.dfgdfhdf5156}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className={styles.dhfsdfd}>
                            <label>Country</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="India"
                              name="country"
                              value={formData.country}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className={styles.dhfsdfd}>
                            <label>City</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Jamnagar"
                              name="city"
                              value={formData.city}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className={styles.dhfsdfd}>
                            <label>Pin Code</label>
                            <input
                              type="text"
                              className="form-control"
                              oninput="this.value = this.value.replace(/[^0-9.]/g, '');"
                              placeholder="742121"
                              name="pin"
                              maxLength={6}
                              value={formData.pin}
                              disabled={!isEditable}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${styles.dienwrhwerwer}`}>
                      <div className={styles.dnjhsddsfsd}>
                        {!isEditable ? (
                          <button disabled>Submit</button>
                        ) : (
                          <button onClick={handleSave}>Submit</button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
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
