import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import axios from "axios";
import Button from "@material-ui/core/Button";
import SignatureBox from "../SignatureBox";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import TextField from "@material-ui/core/TextField";
import { toast } from "react-toastify";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import NavPills from "../NavPill/NavPills";
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

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateProfile = e => {
    e.preventDefault();
    axios
      .put("/api/users", user)
      .then(res => {
        toast.info("Profile updated successfully");
        axios.get("/api/users").then(res => setUser(res.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
  const imageClasses = classNames(
    props.classes.imgRaised,
    props.classes.imgRoundedCircle,
    props.classes.imgFluid
  );

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={props.classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={props.classes.profile}>
              <div>
                <img src={user.image_url} alt="..." className={imageClasses} />
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
                      <div className={classes.signatureContainer}>
                        {showSignature ? (
                          <div className={classes.signatureContainer}>
                            <SignatureBox
                              setUser={setUser}
                              setShowSignature={setShowSignature}
                            />
                          </div>
                        ) : null}
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          onClick={toggleSignature}
                        >
                          Add your signature
                        </Button>
                      </div>
                    )}
                  </>
                )
              },
              {
                tabButton: "Edit Profile",
                tabIcon: Palette,
                tabContent: (
                  <div className={classes.signatureContainer}>
                    <h1>Edit Profile</h1>
                    <form
                      onSubmit={updateProfile}
                      className={classes.signatureContainer}
                    >
                      <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={user.name}
                        onChange={handleChange}
                        margin="normal"
                        name="name"
                      />
                      <TextField
                        id="standard-name"
                        label="Username"
                        className={classes.textField}
                        value={user.nickname}
                        onChange={handleChange}
                        margin="normal"
                        name="nickname"
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={updateProfile}
                      >
                        Update Profile
                      </Button>
                    </form>
                  </div>
                )
              }
            ]}
          />
        </div>
        <Clearfix />
      </div>
    </div>
  );
}

export default withStyles(profilePageStyle)(Index);
