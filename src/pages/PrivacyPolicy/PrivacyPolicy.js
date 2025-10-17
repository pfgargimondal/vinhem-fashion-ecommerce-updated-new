import http from "../../http";
import { useEffect, useState } from "react";
import { PolicyComponent } from "../PolicyComponent/PolicyComponent";
import { FooterTopComponent } from "../../components/Others/FooterTopComponent";

export const PrivacyPolicy = () => {

    // const [loading, setLoading] = useState(false);
    const [PrivacyPolicyDetails, setPrivacyPolicyDetails] = useState({});

    useEffect(() => {
        const fetchPrivacyPolicyData = async () => {
            // setLoading(true);
            try {
                const getresponse = await http.get("/get-privacy-policy-content");
                setPrivacyPolicyDetails(getresponse.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally{
                // setLoading(false);--------------------------------
            }
        };

        fetchPrivacyPolicyData();
    }, []);

  return (
    <div>
        {/* {loading && <Loader />}      */}
        <PolicyComponent PolicyDetails={PrivacyPolicyDetails}/>
        <hr />

      <FooterTopComponent />
    </div>
  );
};
