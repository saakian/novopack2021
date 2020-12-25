import React from 'react'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LineWeightOutlinedIcon from '@material-ui/icons/LineWeightOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';


function Navbar() {
    return (
        <div className="nav_background">
            <div className="wrap">
                <div className="logo">
                <h1>novopack</h1>
              <h5>ΕΙΔΗ ΒΙΟΜΗΧΑΝΙΚΗΣ ΣΥΣΚΕΥΑΣΙΑΣ</h5>
                </div>
                
              <div>
                  <div className="ham">
                <MenuOpenOutlinedIcon />
                </div>
            <div>      
              <ul>
                  <li><AppsOutlinedIcon/><h3>Αρχικη</h3></li>
                  <li><LineWeightOutlinedIcon/><h3>Θερμοσυρρικνωση</h3></li>
                  <li><BusinessOutlinedIcon/><h3>Εταιρια</h3></li>
                  <li><CardTravelOutlinedIcon/><h3>Πελατοτολογιο</h3></li>
                  <li><ContactPhoneIcon /><h3>Επικοινωνια</h3></li>
                  <li className="translation"><PublicOutlinedIcon/></li> 
                  
              </ul>
            </div> 
          </div>
           </div>
           
        </div>
    )
}

export default Navbar
