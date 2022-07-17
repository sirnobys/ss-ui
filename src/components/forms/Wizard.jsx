import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { MDBCheckbox, MDBRadio } from "mdb-react-ui-kit";
import Image from "../../s1.svg";
import Chip from "@mui/material/Chip";
import swal from "sweetalert";
class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName:"",
      lastName:"",
      email:"",
      tel:"",
      gender:"",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 6 ? 7 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
    if (this.state.currentStep === 7) {
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
  };

  next = () => {

  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={this.prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 7) {
      return (
        <button
          className="btn btn-primary float-right"
          type="submit"
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <MDBRow className="mt-5 pt-5">
        <MDBCol lg="2" md="2" sm="12"></MDBCol>
        <MDBCol lg="8" md="8" sm="12">
          <div className="card main form-bg">
            <img src={Image} alt="horse" />
            <div className="card-body">
              <div className="text-center h2 text-secondary">
                Single's Summit Registration
              </div>
              <div className="font-weight-bold">
                <Chip label={"Step " + this.state.currentStep} />{" "}
              </div>

              <form onSubmit={this.handleSubmit}>
                {/* 
        render the form steps and pass required props in
      */}
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                <Step5
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                <Step6
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                <Step7
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />
                {this.previousButton()}
                {this.nextButton()}
              </form>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="6" md="6" sm="12">
          <MDBInput
            label="First Name"
            type="text"
            required
          />
        </MDBCol>
        <MDBCol lg="6" md="6" sm="12">
          <MDBInput label="Last Name" type="text" required />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="6" md="6" sm="12">
          <MDBInput label="Email" type="text" required />
        </MDBCol>
        <MDBCol lg="6" md="6" sm="12">
          <MDBInput label="Telephone" type="text" required />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <MDBContainer className="text-center mb-3">
        <MDBRow>
          <MDBCol lg="12" md="12" sm="12">
            <div className="mr-3 mb-3 mt-1 font-weight-bold">
              Select Gender:
            </div>
            <MDBRadio
              name="gender"
              id="flexRadioDefault1"
              label="Male"
              required
              inline
            />
            <MDBRadio
              name="gender"
              id="flexRadioDefault2"
              label="Female"
              required
              inline
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <button className="btn btn-success float-right">Sign up</button> */}
    </React.Fragment>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <React.Fragment>
      <MDBContainer>
        <MDBRow className="text-center mb-3">
          <MDBCol lg="12" md="12" sm="12">
            <div className="mr-3 mb-3 mt-1 font-weight-bold">
              Are you a KICC member?
            </div>
            <MDBRadio
              name="member"
              id="flexRadioDefault1"
              label="Yes"
              inline
              required
            />
            <MDBRadio
              name="member"
              id="flexRadioDefault2"
              label="No"
              inline
              required
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <button className="btn btn-success float-right">Sign up</button> */}
    </React.Fragment>
  );
}

function Step5(props) {
  if (props.currentStep !== 5) {
    return null;
  }
  return (
    <React.Fragment>
      <MDBContainer className="text-center mb-3">
        <MDBRow>
          <MDBCol lg="12" md="12" sm="12">
            <div className="mr-3 mb-3 mt-1 font-weight-bold">
              Is this your first time at the KICC Summit?
            </div>
            <MDBRadio
              name="first"
              id="flexRadioDefault1"
              label="Yes"
              inline
              required
            />
            <MDBRadio
              name="first"
              id="flexRadioDefault2"
              label="No"
              required
              inline
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

function Step6(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  return (
    <React.Fragment>
      <MDBContainer className="text-center mb-3">
        <MDBRow>
          <MDBCol lg="12" md="12" sm="12">
            <div className="mr-3 mb-3 mt-1 font-weight-bold">
              {" "}
              Kindly indicate if you will want to be picked by any of our buses.
            </div>
            <select className="browser-default custom-select" required>
              <option value="circle">Circle</option>
              <option value="accra-mall">Accra Mall</option>
              <option value="coca-cola">Coca-Cola</option>
            </select>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  );
}

function Step7(props) {
  if (props.currentStep !== 7) {
    return null;
  }
  return (
    <React.Fragment>
      <MDBContainer className="text-center mb-3">
        <MDBRow>
          <MDBCol lg="12" md="12" sm="12">
            <div className="mr-3 mb-3 mt-1 font-weight-bold">
              How did you hear about this event?
            </div>
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
      </MDBContainer>
      <button className="btn btn-success float-right">Submit</button>
    </React.Fragment>
  );
}

export default MasterForm;
