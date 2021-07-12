import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import LocationIcon from "@material-ui/icons/LocationOn"


const phone=<PhoneIcon/>
const email=<EmailIcon/>
const location=<LocationIcon/>

const info = [
    {
        id:1,
        icon:phone,
        title:"Phone",
        contact1:"+1(424)431 7550",
        contact2:"+1(424)431 7550"
    },
    {
        id:2,
        icon:email,
        title:"Email",
        contact1:"yves.loeys@gmail.com",
        contact2:"loeys.yves@gmail.com"
    },
    {
        id:3,
        icon:location,
        title:"Address",
        contact1:"405 W Sycamore Av, Los Angeles California",
        contact2:"USA"
    },
            
        ]

    

  


export default info;