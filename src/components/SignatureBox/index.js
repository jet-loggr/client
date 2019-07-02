import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  controlButton: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
}));

const Signature = props => {
  const sigCanvas = useRef(null);
  const classes = useStyles();
  const saveSignature = () => {
    axios
      .put("/api/users", {
        signature: sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
      })
      .then(res => {
        axios.get("/api/users").then(res => {
          props.setUser(res.data);
          props.setShowSignature(false);
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  return (
    <>
      <SignatureCanvas
        penColor="black"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
        ref={sigCanvas}
      />
      <div className={classes.controlButton}>
        <Button onClick={saveSignature} color="primary" variant="contained">
          Save
        </Button>
        <Button onClick={clearSignature} variant="contained" color="secondary">
          Clear
        </Button>
      </div>
    </>
  );
};

export default Signature;
