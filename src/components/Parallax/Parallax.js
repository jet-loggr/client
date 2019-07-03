import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import parallaxStyle from "../../assets/parallaxStyle.js";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    let windowScrollTop;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)"
      });
      window.addEventListener("scroll", this.resetTransform);
    }
  }
  componentWillUnmount() {
    if (window.innerWidth >= 768) {
      window.removeEventListener("scroll", this.resetTransform);
    }
  }
  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)"
    });
  }
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes[filter + "Color"]]: filter !== undefined,
      [classes.small]: small,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          ...this.state
        }}
        ref="parallax"
      >
        {children}
      </div>
    );
  }
}

export default withStyles(parallaxStyle)(Parallax);
