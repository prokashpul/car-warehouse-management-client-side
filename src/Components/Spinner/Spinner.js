import { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Spinner = () => {
  const [color] = useState();

  return (
    <div className="sweet-loading">
      <ClipLoader color={color} css={override} size={150} />
    </div>
  );
};

export default Spinner;
