import PharmacyImage from "../../Images/DrugstoreImages/banner-pharmacy-technician.jpg";

export const ExploreTopProducts = () => {
  return (
    <div
      className="p-5 mb-4 bg-info"
      style={{
        backgroundImage: `url(${PharmacyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-5 fw-bold text-light">
            Find the best Shampoo for your hair
          </h1>
          <p className="col-md-8 fs-4 text-info">What smell would you like to have?</p>
          <a
            type="button"
            className="btn btn-outline-light btn-lg text-light"
            href="#"
          >
            Explore Top Products
          </a>
        </div>
      </div>
    </div>
  );
};