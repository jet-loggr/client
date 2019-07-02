import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import axios from "axios";
import Button from "@material-ui/core/Button";
import SignatureBox from "../SignatureBox";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import NavPills from "../NavPill/NavPills";
import Parallax from "../Parallax/Parallax.js";
import Clearfix from "../Clearfix/Clearfix.js";

import profilePageStyle from "../../assets/profilePageStyle";

const useStyles = makeStyles(theme => ({
  image: {
    margin: "5px",
    borderRadius: "50%",
    width: "80px",
    height: "auto"
  },
  fixedHeight: {
    height: 240
  },

  input: {
    display: "none"
  },
  signatureImage: {
    width: "200px",
    height: "auto",
    margin: 20
  },
  signatureContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  profileCardContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    width: 200
  }
}));

function Index(props) {
  const [user, setUser] = useState({});
  const [showSignature, setShowSignature] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/users`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  const classes = useStyles();

  const toggleSignature = () => {
    setShowSignature(!showSignature);
  };

  const imageClasses = classNames(
    props.classes.imgRaised,
    props.classes.imgRoundedCircle,
    props.classes.imgFluid
  );

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={props.classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={props.classes.profile}>
                <div>
                  <img
                    src={user.image_url}
                    alt="..."
                    className={imageClasses}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={props.classes.title}>{user.name}</h3>
                  <h6>{user.email}</h6>
                  <h6>{user.nickname}</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={props.classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Edit Profile",
                  tabIcon: Palette,
                  tabContent: <h1>Edit Profile</h1>
                },
                {
                  tabButton: "Signature",
                  tabIcon: People,
                  tabContent: (
                    <>
                      {user.signature ? (
                        <div className={classes.signatureContainer}>
                          {showSignature ? (
                            <div className={classes.signatureContainer}>
                              <SignatureBox
                                setUser={setUser}
                                setShowSignature={setShowSignature}
                              />
                            </div>
                          ) : (
                            <div className={classes.signatureContainer}>
                              <img
                                className={classes.signatureImage}
                                src={user.signature}
                                alt="signature"
                              />
                            </div>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={toggleSignature}
                          >
                            {showSignature ? "Cancel" : "Update Signature"}
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          onClick={toggleSignature}
                        >
                          Add your signature
                        </Button>
                      )}
                    </>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
}

export default withStyles(profilePageStyle)(Index);
