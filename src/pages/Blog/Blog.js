// eslint-disable-next-line
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../http";
import "./Css/Blog.css";


export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [popularblogs, setPopularBlogs] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState("");
    useEffect(() => {
      const fetchBlogs = async () => {
          try {
                const getresponse = await http.get("/blogs");
               
                const dataBlogs = getresponse.data;
               setBlogs(dataBlogs.data);
               setPopularBlogs(dataBlogs.popularblog);
               setImageBaseUrl(dataBlogs.image_url);

                console.log("API response:", dataBlogs);

            } catch (error) {
                console.error("Error fetching users:", error);
            } finally{
                // setLoading(false);
            }
      };
      fetchBlogs();
    }, []);


  return (
    <div className="blog-wrapper">
      <div className="container-fluid">
      <section className="dfgvswrfcxcfsrfsddf mb-5">
        <div id="topCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded-2 shadow-sm">
            <div className="carousel-item active">
              <img
                src="./images/23653.jpg"
                className="d-block w-100"
                alt="Young fashionable woman passionately posing with leather jacket"
                onError="this.style.display='none'"
              />
              <div className="carousel-caption text-start">
                <h5>It Burns With New Desire</h5>
                <p>Fashion insights to keep you inspired.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="./images/23653.jpg"
                className="d-block w-100"
                alt="Black shoes, leather bag and stylish accessories displayed artistically on dark background"
                onError="this.style.display='none'"
              />
              <div className="carousel-caption text-start">
                <h5>Life That Shape The Soul</h5>
                <p>Essentials for a refined look.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="./images/23653.jpg"
                className="d-block w-100"
                alt="Woman modeling a stylish modern denim jacket in urban street setting"
                onError="this.style.display='none'"
              />
              <div className="carousel-caption text-start">
                <h5>The Spirit of New Design</h5>
                <p>Breaking boundaries and trends.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#topCarousel"
            data-bs-slide="prev"
            aria-label="Previous Slide"
          >
            <span className="carousel-control-prev-icon" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#topCarousel"
            data-bs-slide="next"
            aria-label="Next Slide"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </section>

      <div className="diewhrnweirwer">
        <div className="row">       
          <div className="col-lg-8">          
            {blogs.map(blog => (
              <article className="mb-5 article-card" key={blog.id}>
                <img
                  src={`${imageBaseUrl}/${blog?.blog_image}`}
                  alt={blog.title}
                  className="img-fluid rounded mb-3"
                />

                <h2 className="article-title">{blog.title}</h2>

                <p
                  className="article-text"
                  dangerouslySetInnerHTML={{
                    __html: blog.blog_description
                      ? blog.blog_description.replace(/<[^>]+>/g, "").slice(0, 120) + "..."
                      : ""
                  }}
                ></p>
                <Link to={`/blog/${blog.slug}`} className="btn btn-main mt-2">
                  Read More
                </Link>
              </article>
            ))}
          </div>

          <aside className="col-lg-4">
            <div className="sticky-top">              
              <div className="sidebar-block border rounded p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Popular Posts</h5>
                <ul className="csdvfgherdfvsdf list-unstyled">
                  {popularblogs.map(popularblog => (
                    <li className="mb-3 d-flex align-items-center">
                          <img
                            src={`${imageBaseUrl}/${popularblog?.blog_image}`}
                            alt={popularblog?.title}
                            className="me-3 rounded"
                          />
                          <div>
                            <Link to={`/blog/${popularblog.slug}`} className="text-decoration-none fw-semibold">
                              {popularblog?.title}
                            </Link>
                            {/* <p className="mb-0 small text-muted">
                              Exploring bold hair trends.
                            </p> */}
                          </div>
                        </li>
                  ))}
                  {/* <li className="mb-3 d-flex align-items-center"> */}
                      {/* eslint-disable-next-line */}
                    {/* <img
                      src="./images/17550.jpg"
                      alt="Thumbnail of woman wearing avant-garde hairstyle"
                      className="me-3 rounded"
                    />
                    <div>
                      <Link to="/" className="text-decoration-none fw-semibold">
                        Avant-Garde Hairstyles
                      </Link>
                      <p className="mb-0 small text-muted">
                        Exploring bold hair trends.
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>

              <div className="sidebar-block border rounded p-3 mb-4 shadow-sm">
                <h5 className="mb-3">Newsletter</h5>
                <p>
                  Subscribe to get the latest stories, fashion tips, and exclusive
                  offers straight to your inbox.
                </p>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="newsletterEmail"
                      className="form-label visually-hidden"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="newsletterEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className="btn btn-main w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
      </div>
    </div>
  )
}