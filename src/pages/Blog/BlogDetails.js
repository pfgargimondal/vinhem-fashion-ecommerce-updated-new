import { Link, useParams } from "react-router-dom";
import "./Css/Blog.css";
import { useEffect, useState } from "react";
import http from "../../http";

export const BlogDetails = () => {

  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [popularblogs, setPopularBlogs] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState("");

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const getresponse = await http.get(`/blogs/${slug}`);
        
        const dataBlogs = getresponse.data;
        setBlogs(dataBlogs.data);
        setPopularBlogs(dataBlogs.popularblog);
        setImageBaseUrl(dataBlogs.image_url);

      } catch (error) {
          console.error("Error fetching blog details:", error);
      } finally{
          // setLoading(false);
      }
    };
    fetchBlogDetails();
  }, [slug]);


  return (
    <div className="blog-wrapper py-5">
      <div className="container-fluid">
      <div className="diewhrnweirwer">
        <div className="row">       
          <div className="col-lg-8">          
            <article className="mb-5 article-card">
              <img
                src={`${imageBaseUrl}/${blogs?.blog_image}`}
                alt={blogs.title}
                className="img-fluid rounded mb-3"
                onerror="this.style.display='none'"
              />
              <h2 className="article-title">{blogs.title}</h2>
              
              <p className="article-subtitle d-none fst-italic text-muted">
                New trends and bold statements
              </p>
              <p
                className="article-text"
                dangerouslySetInnerHTML={{
                  __html: blogs.blog_description ? blogs.blog_description : ""
                }}
              ></p>
              </article>
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