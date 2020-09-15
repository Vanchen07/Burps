import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NavBarContainer from '../nav/navbar_container';
import UserBurp from '../burps/user_burps'
import default_avatar from "../../images/default_avatar.png";
import './profile.css'
import BurpCompose from '../burps/burp_compose_container';

class Profile extends React.Component {

  componentDidMount() {
      this.props.fetchUserBurps(this.props.currentUser.id);
  }

  render() {
    let userBurps;

      if (this.props.burps.length === 0) {
          return null;
      } else {
        userBurps = this.props.burps.user.map((burp) => {
          return (
            <UserBurp
              key={burp._id}
              burp={burp}
              text={burp.text}
              currentUser={this.props.currentUser}
              fetchUserBurps={this.props.fetchUserBurps}
              removeBurp={this.props.removeBurp}
            />
          );
        });
      }

      return (
        <div>
          <NavBarContainer />
          <div className="profile">
            <div className="profile-top">
              <div className="profile-img">
                <img src={default_avatar} alt=""></img>
              </div>
              <div className="profile-bio">
                <div>{`Handle: ${this.props.currentUser.handle}`}</div>
                <div>{`Blurb: ${this.props.currentUser.blurb}`}</div>
                <div>{`Location: ${this.props.currentUser.location}`}</div>
                <div>{`Favorite Foods: ${this.props.currentUser.favoriteFoods}`}</div>
                <Link to="/profile/edit">
                  <i className="fas fa-user-edit"></i>
                </Link>
              </div>
            </div>
            <div className="profile-bottom">
              <BurpCompose />
              <h2>All of your Burps</h2>
              {userBurps}
            </div>
          </div>
        </div>
      );
  }
}

export default withRouter(Profile);