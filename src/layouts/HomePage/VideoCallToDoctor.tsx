import VideCallImage from "../../Images/PublicImages/videocall-2.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const VideoCallToDoctor = () => {
  return (
    
    <div
      className="p-5 mb-4 d-flex align-items-center justify-content-center"
      style={{
        // backgroundImage: `url(${VideCallImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <div className="container">
        <div className=" m-5 text-uppercase font-weight-bold ">
          <div className="col-md">
            <div className="m-4">
              <i className="bi bi-hdd-network m-2"></i>
              Connect with a doctor via video call
            </div>
            <div className="m-4">
              <i className="bi bi-capsule m-2"></i>
              Verify your medication before purchase
            </div>
            <div className="m-4">
              <i className="bi bi-clock m-2"></i>
              Convenient and time-saving
            </div>
            <div className="m-4">
              <i className="bi bi-shield-check m-2"></i>
              Secure and confidential consultation
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-2 d-none d-md-block">
        <MDBRipple rippleColor="light" rippleTag="div" className="bg-image">
          <MDBCardImage src={VideCallImage} fluid alt="..." className="w-75" />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
      </div>

      

      
      <div className="container ">
        <div className="row">
          <div className="col-md-10 offset-md-2">
            <h1 className="display-5 fw-bold text-dark">
              Unsure about your medication? Connect with a doctor online for a
              video consultation now.
            </h1>
            <p className="col-md-12 fs-4 text-dark">
              Don't take chances with your health. Speak to a doctor online to
              verify your medication.
            </p>
            <a
              type="button"
              className="btn btn-outline-dark btn-lg text-dark"
              href="#"
            >
              <i className="bi bi-file-earmark-person m-2"></i>
              Call the Doctor Now...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallToDoctor;
