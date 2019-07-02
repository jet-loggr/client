import React, { useContext, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";

const Signature = props => {
  const sigCanvas = useRef(null);

  const saveSignature = () => {
    axios
      .put("/api/users", {
        signature: sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")
      })
      .then(res => {
        axios.get("/api/users").then(res => {
          props.setUser(res.data);
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
      <button onClick={saveSignature}>Save</button>
      <button onClick={clearSignature}>Clear</button>
    </>
  );
};

export default Signature;
