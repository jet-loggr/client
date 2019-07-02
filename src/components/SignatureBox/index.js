import React from "react";
import SignatureCanvas from "react-signature-canvas";

class Signature extends React.Component {
  state = { trimmedDataURL: null };

  saveSignature = () => {
    this.setState({
      trimmedDataURL: this.sigCanvas.getTrimmedCanvas().toDataURL("image/png")
    });
  };

  clearSignature = () => {
    this.sigCanvas.clear();
  };
  render() {
    return (
      <>
        <SignatureCanvas
          penColor="green"
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          ref={ref => {
            this.sigCanvas = ref;
          }}
        />
        {this.state.trimmedDataURL ? (
          <img src={this.state.trimmedDataURL} />
        ) : null}
        <button onClick={this.saveSignature}>Save</button>
        <button onClick={this.clearSignature}>Clear</button>
      </>
    );
  }
}

export default Signature;
