import React from 'react';
import ProductImage from "../../Images/DrugstoreImages/Vitamin.jpg";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const FeaturedProductsVitamin: React.FC = () => {
    return (
      <MDBCard>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image'>
          <MDBCardImage src={ProductImage} fluid alt='...' />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody className="text-center">
          <MDBCardTitle>Vitamin</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn className='btn btn-light btn-outline-dark btn-xs text-dark' href='#'>Add to Card</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }

export default FeaturedProductsVitamin;