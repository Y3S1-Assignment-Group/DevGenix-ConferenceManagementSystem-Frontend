import React, { Component } from 'react';
import Navbar from "../../common/Navbar/Navbar";
import AttendeePage from '../../modules/AttendeePage/AttendeePage';
import Footer from '../../common/Footer/Footer';

class AttendeeProfilePage extends Component {
    render() {
        return (
            <div>
                <Navbar />    
                <AttendeePage/>  
                <Footer/>                    
            </div>
        );
    }
}

export default AttendeeProfilePage;