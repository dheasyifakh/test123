import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Image} from 'react-bootstrap';
import avrPhoto from './../../../assets/images/default/img-profile-md.jpg'

class UserInfo extends Component {
    
    render(){
        return(
            <div className="user-wrapper">
                <div className="user">
                    <Image src={avrPhoto} className="photo" roundedCircle/>
                <div className="userinfo">
                    <div className="username">
                    Natalie Dormer
                    </div>
                    <div className="title">Admin</div>
                </div>
                </div>
            </div>
        )
    }
}

  
export default UserInfo;