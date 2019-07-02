import React from "react";

// mterial-ui components
import withStyles from "@material-ui/core/styles/withStyles";

const style = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};

function Clearfix({ ...props }) {
  const { classes } = props;
  return <div className={classes.clearfix} />;
}

export default withStyles(style)(Clearfix);
