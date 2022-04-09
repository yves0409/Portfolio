import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationIcon from "@material-ui/icons/LocationOn";

const phone = <PhoneIcon />;
const email = <EmailIcon />;
const location = <LocationIcon />;

const dataContactInfo = [
  {
    id: 1,
    icon: phone,
    title: "Phone",
    contact1: "+1(424)--- ----",
    contact2: "+32(478)--- ---",
  },
  {
    id: 2,
    icon: email,
    title: "Email",
    contact1: `${process.env.REACT_APP_PRIMARY_EMAIL}`,
    contact2: `${process.env.REACT_APP_SECONDARY_EMAIL}`,
  },
  {
    id: 3,
    icon: location,
    title: "Address",
    contact1: "Los Angeles, California",
    contact2: "USA",
  },
];

export default dataContactInfo;
