import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import { MDBRadio } from "mdb-react-ui-kit";
import Image from "../../s2.svg";
import kicc from "../../KICC.jpg";
import Chip from "@mui/material/Chip";
import swal from "sweetalert";

import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const mediaList = [
  "Friend",
  "Twitter",
  "Facebook",
  "TV",
  "SMS",
  "Billboard",
  "Sunny FM",
  "Newspaper",
  "Sweet Melodies FM",
];

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      gender: "",
      member: "",
      firstTime: "",
      location: "",
      media: [],
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target.name === "media") {
      const media = typeof value === "string" ? value.split(",") : value;
      this.setState({ media: media });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
    if (this.state.currentStep === 6) {
      swal({
        title: "Are you sure you want to submit?",
        text: "Once submitted, you will not be to edit!",
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

  next = () => {};

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
        <Button
          className="btn btn-secondary"
          type="button"
          onClick={this.prev}
          variant="contained"
        >
          Back
        </Button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 6) {
      return (
        <Button
          className="btn btn-primary float-right"
          type="submit"
          variant="contained"
          onClick={this.next}
        >
          Next
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <MDBRow className="mt-5">
        <MDBCol lg="2" md="2" sm="2"></MDBCol>
        <MDBCol lg="8" md="8" sm="10">
          <div className="text-center h2 text-white">
            Single's Summit Registration
          </div>
          <div className="card main form-bg">
            <img src={Image} alt="horse" />
            <div className="card-body">
              <div style={{ marginLeft: "25%" }}>
                <img src={kicc} alt="horse" />
                <br />
                <br />
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
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                  tel={this.state.tel}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  gender={this.state.gender}
                />
                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  member={this.state.member}
                />
                <Step5
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  firstTime={this.state.firstTime}
                />
                {/* <Step6
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  location={this.state.location}
                /> */}
                <Step7
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  media={this.state.media}
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
        <MDBCol lg="9" md="9" sm="8">
          <MDBInput
            label="First Name"
            type="text"
            name="firstName"
            onChange={props.handleChange}
            valueDefault={props.firstName}
            required
          />
        </MDBCol>
        <MDBCol lg="9" md="9" sm="8">
          <MDBInput
            label="Last Name"
            type="text"
            name="lastName"
            onChange={props.handleChange}
            valueDefault={props.lastName}
          />
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
        <MDBCol lg="9" md="9" sm="12">
          <MDBInput
            label="Email"
            name="email"
            onChange={props.handleChange}
            valueDefault={props.email}
            type="text"
            required
          />
        </MDBCol>
        <MDBCol lg="9" md="9" sm="12">
          <MDBInput
            label="Telephone"
            name="tel"
            onChange={props.handleChange}
            valueDefault={props.tel}
            type="text"
          />
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
              value="male"
              onChange={props.handleChange}
              checked={props.gender === "male"}
              required
              inline
            />
            <MDBRadio
              name="gender"
              id="flexRadioDefault2"
              onChange={props.handleChange}
              checked={props.gender === "female"}
              value="female"
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
              value="yes"
              id="flexRadioDefault1"
              label="Yes"
              checked={props.member === "yes"}
              onChange={props.handleChange}
              inline
              required
            />
            <MDBRadio
              name="member"
              id="flexRadioDefault2"
              label="No"
              value="no"
              checked={props.member === "no"}
              onChange={props.handleChange}
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
              name="firstTime"
              id="flexRadioDefault1"
              label="Yes"
              value="yes"
              checked={props.firstTime === "yes"}
              onChange={props.handleChange}
              inline
              required
            />
            <MDBRadio
              name="firstTime"
              id="flexRadioDefault2"
              value="no"
              checked={props.firstTime === "no"}
              onChange={props.handleChange}
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

// function Step6(props) {
//   if (props.currentStep !== 6) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <MDBContainer className="text-center mb-3">
//         <MDBRow>
//           <MDBCol lg="12" md="12" sm="12">
//             <div className="mr-3 mb-3 mt-1 font-weight-bold">
//               {" "}
//               Kindly indicate if you will want to be picked by any of our buses.
//             </div>
//             <select
//               className="browser-default custom-select"
//               name="location"
//               required
//               onChange={props.handleChange}
//             >
//               <option value="" selected={props.notify === ""}>
//                 ...
//               </option>
//               <option value="circle" selected={props.notify === "circle"}>
//                 Circle
//               </option>
//               <option
//                 value="accra-mall"
//                 selected={props.notify === "accra-mall"}
//               >
//                 Accra Mall
//               </option>
//               <option value="coca-cola" selected={props.notify === "coca-cola"}>
//                 Coca-Cola
//               </option>
//             </select>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </React.Fragment>
//   );
// }

function Step7(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  return (
    <React.Fragment>
      <MDBContainer className="text-center mb-3 ">
        <MDBRow>
          <MDBCol lg="12" md="12" sm="12">
            <div className="mr-3 mb-3 mt-1 font-weight-bold">
              How did you hear about this event?
            </div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={props.media}
                onChange={props.handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                name="media"
              >
                {mediaList.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={props.media.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <MDBCheckbox
              name="newspaper"
              value=""
              id="Newspaper"
              label="Newspaper"
              onChange={props.handleChange}
              inline
            />
            <MDBCheckbox
              name="sunnyfm"
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
              name="sweet"
              value=""
              id="smfm"
              label="Sweet Melodies FM"
              inline
            />
            <MDBCheckbox name="sms" value="" id="sms" label="SMS" inline />
            <MDBCheckbox name="fb" value="" id="fb" label="Facebook" inline />
            <MDBCheckbox
              name="twitter"
              value=""
              id="tw"
              label="Twitter"
              inline
            />
            <MDBCheckbox name="friend" value="" id="fr" label="Friend" inline />
            <MDBCheckbox name="TV" value="" id="tv" label="TV" inline /> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Button
        type="submit"
        variant="contained"
        className="btn btn-success float-right"
      >
        Submit
      </Button>
    </React.Fragment>
  );
}

export default MasterForm;
