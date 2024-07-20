import React, { useState, useEffect } from "react";
import SpecialOffer from "../../../Images/PublicImages/special-offer.png";
import Countdown from "./Countdown";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const CountdownCard: React.FC = () => {
  const expirationDate = new Date("2024-12-01T23:59:59");
  const [imageWidth, setImageWidth] = useState<string>("100%");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 767) {
        setImageWidth("38%");
      } else if (windowWidth >= 768 && windowWidth <= 991) {
        setImageWidth("58%");
      } else {
        setImageWidth("68%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial image width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MDBCard className="bg-info text-center">
      <MDBCardBody>
        <MDBCardTitle>Markdown Madness</MDBCardTitle>
        <MDBRipple rippleColor="light" rippleTag="div" className="bg-image">
          <MDBCardImage
            src={SpecialOffer}
            fluid
            alt="..."
            style={{ width: imageWidth }}
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardText className="fw-bold fs-6">
          These products are available for
        </MDBCardText>
        <Countdown expirationDate={expirationDate} />
        <MDBBtn
          className="btn btn-light btn-outline-dark btn-xs text-dark"
          href="#"
        >
          More products
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CountdownCard;
