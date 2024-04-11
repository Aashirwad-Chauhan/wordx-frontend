import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat Web App",
  description = "This is Chat App called BallerX",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;