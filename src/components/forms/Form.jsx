import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { MDBCheckbox, MDBRadio } from "mdb-react-ui-kit";
import swal from "sweetalert";

export default function Form(props) {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol size="12" lg="1" md="6" sm="12"></MDBCol>
        <MDBCol size="12" lg="10" md="12" sm="12" className="main">
          {forms(props)}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  swal({
    title: "Are you sure you want to submit?",
    text: "Once submitted, you will not be able edit!",
    icon: "warning",
    buttons: true,
    dangerMode: false,
  }).then((confirm) => {
    if (confirm) {
      swal("Form submitted Successfully", {
        icon: "success",
      }).then((okay) => {
        if (okay) {
          window.location.reload();
        }
      });
    }
  });
}

const forms = (props) => {
  console.log(props.type);
  return (
    <div className="card">
      <div className="card-body">
        <div className={"heading h3 text-center"}>
          Singles' Summit 2022 Registration Form
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <MDBRow>
            <MDBCol lg="6" md="6" sm="12">
              <MDBInput label="First Name" type="text" required />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <MDBInput label="Last Name" type="text" required />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <MDBInput label="Email" type="text" required />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <MDBInput label="Telephone" type="text" required />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <br />
              <b>Gender</b>
              <MDBRadio
                name="gender"
                id="flexRadioDefault1"
                label="Male"
                required
              />
              <MDBRadio
                name="gender"
                id="flexRadioDefault2"
                label="Female"
                required
              />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <br />
              <b>Are you a KICC member?</b>
              <MDBRadio
                name="member"
                id="flexRadioDefault1"
                label="Yes"
                required
              />
              <MDBRadio
                name="member"
                id="flexRadioDefault2"
                label="No"
                required
              />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <br />
              <b>Is this your first time at the KICC Summit?</b>
              <MDBRadio
                name="first"
                id="flexRadioDefault1"
                label="Yes"
                required
              />
              <MDBRadio
                name="first"
                id="flexRadioDefault2"
                label="No"
                required
              />
            </MDBCol>
            <MDBCol lg="6" md="6" sm="12">
              <br />
              <b>
                Kindly indicate if you will want to be picked by any of our
                buses.
              </b>
              <select className="browser-default custom-select" required>
                <option value="circle">Circle</option>
                <option value="accra-mall">Accra Mall</option>
                <option value="coca-cola">Coca-Cola</option>
              </select>
            </MDBCol>
            <MDBCol lg="12" md="12" sm="12">
              <br />
              <b>How did you hear about this event?</b>
              <br />
              <MDBCheckbox
                name="Newspaper"
                value=""
                id="Newspaper"
                label="Newspaper"
                inline
              />
              <MDBCheckbox
                name="SunnyFM"
                value=""
                id="sfm"
                label="Sunny FM"
                inline
              />
              <MDBCheckbox
                name="billboard"
                value=""
                id="billboard"
                label="Bill board"
                inline
              />
              <MDBCheckbox
                name="smfm"
                value=""
                id="smfm"
                label="Sweet Melodies FM"
                inline
              />
              <MDBCheckbox name="sms" value="" id="sms" label="SMS" inline />
              <MDBCheckbox name="fb" value="" id="fb" label="Facebook" inline />
              <MDBCheckbox name="tw" value="" id="tw" label="Twitter" inline />
              <MDBCheckbox name="Fr" value="" id="fr" label="Friend" inline />
              <MDBCheckbox name="o" value="" id="o" label="Other" inline />
              <MDBCheckbox name="TV" value="" id="tv" label="TV" inline />
            </MDBCol>
          </MDBRow>

          <div align="center">
            <button className="btn btn-default" type="subimt">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
