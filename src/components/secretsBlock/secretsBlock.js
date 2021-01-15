import React from "react";

import Button from "../Button/Button";

import "./secretsBlock.scss";

const SecretsBlock = ({ src, title, data, className, show }) => {
  return (
    <div className={className}>
      <img src={src} alt="imges)" />
      <p>{title}</p>
      <p>{data}</p>
      <p>{show}</p>
      <Button title="Подробное" className="btn-secrets" />
    </div>
  );
};
export default SecretsBlock;
