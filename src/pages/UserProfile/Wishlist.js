import { Link } from "react-router-dom";

import { UserProfileNavMenu } from "../../components";
import { useAuth } from "../../context/AuthContext";
import http from "../../http";
import styles from "./Css/Wishlist.module.css";
import { useEffect, useState } from "react";


export const Wishlist = () => {

  const { token } = useAuth();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    if (!token) return;

    const fetchWishlist = async () => {
      try {
        const res = await http.get("/user/get-wishlist", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWishlistItems(res.data || []);
      } catch (error) {
        console.error("Failed to fetch wishlist", error);
      }
    };

    fetchWishlist();
  }, [token]);

  

    return (
        <div className={styles.ffhfdf}>
            <div className="ansjidnkuiweer container-fluid px-0">
                <div className={styles.fbghdfg}>
                    <div className="row">
                        <div className="col-lg-3">
                            <UserProfileNavMenu />
                        </div>

                        <div className="col-lg-9">
                            <div className={`${styles.fgcbdfgdf} pt-3 pb-5`}>
                                <div className={`${styles.dfjhdsbfsdf} mb-4`}>
                                    <h4 className="mb-0">Your Wishlist({wishlistItems?.data?.length ?? 0})</h4>

                                    <div className="dowehrkjwerwer d-flex align-items-center">
                                        <p className="ndiwhermweoewrr mb-0 me-3">
                                            <Link to="/"><i className="fa-solid me-1 fa-arrow-left"></i> Back To Home <i className="fa-solid ms-1 fa-house"></i></Link>
                                        </p>
                                        
                                        <button className="btn btn-main">Add To Cart <i class="fa-solid ms-1 fa-cart-arrow-down"></i></button>
                                    </div>
                                </div>

                                <div className={styles.fbgdfhgdfgdg}>
                                    <div className="row">
                                        {wishlistItems?.data?.map((wishlistProduct) => (
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <Link to={`/products/${wishlistProduct.slug}`}>
                                                            <img src={wishlistProduct.encoded_image_url_1} alt="not found" />

                                                            <img className={styles.first} src={wishlistProduct.encoded_image_url_2} alt="not found" />
                                                        </Link>

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>{wishlistProduct.designer}</h6>
                                                            
                                                            <h4>{wishlistProduct.product_name}</h4>
                                                            
                                                            <h5>{wishlistProduct.selling_price}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
{/* 
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                                            <div className={styles.dfgjhbdfg}>
                                                <div className={styles.images}>
                                                    <div className={`${styles.image} position-relative`}>
                                                        <img src="/images/product1 (1).webp" alt="not found" />
                                                       
                                                        <img className={styles.first} src="/images/product1 (2).webp" alt="not found" />

                                                        <div className={styles.dbgdfhgv}>
                                                            <button>QUICK ADD</button>
                                                        </div>

                                                        <div className={styles.fdbdfgdfgdf}>
                                                            <h6>COLLETTE</h6>
                                                            
                                                            <h4>(Product 35) Sample - Clothing And Accessory Boutiques For Sale</h4>
                                                            
                                                            <h5>$48.99</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}