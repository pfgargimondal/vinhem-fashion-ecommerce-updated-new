import styles from "./Css/PolicyComponent.module.css";

export const PolicyComponent = ({PolicyDetails}) => {
  return (
    <div> 
      <div className={`${styles.banner} postion-relative text-center`}>
        {PolicyDetails.data?.banner_image && (
          <img
            src={`${PolicyDetails.image_url}/${PolicyDetails.data.banner_image}`}
            className="img-fluid"
            alt=""
          />
        )}
      </div>

      <div className={styles.dhgdfhgdfg}>
        <div className="container">
          <h1 className="mb-4">
            {PolicyDetails.data?.title &&
              PolicyDetails.data.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html:
                PolicyDetails.data?.description &&
                PolicyDetails.data.description,
            }}
          />
        </div>
      </div>
    </div>
  );
};
