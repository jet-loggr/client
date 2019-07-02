import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  image: {
    margin: '5px',
    borderRadius: '50%',
    width: '80px',
    height: 'auto'
  },
  fixedHeight: {
    height: 240
  }
}));

function Index() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`/api/users`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  const classes = useStyles();

  return (
    <div>
        <img src={user.image_url} alt="profile" className={classes.image} />
      <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <h3>{user.nickname}</h3>
        {user.signature ? <image src={user.signature} alt="signature" /> : <p>Add Signature</p>}
    </div>
  );
}

export default Index;
