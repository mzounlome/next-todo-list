import "./Heading.css";

import { Button } from "@mui/base";
import { FC } from "react";

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
  return (
    <div className="landingDiv">
      <h1 className="landingHeader">Roadmap</h1>
      <p className="landingText">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        expedita neque eveniet soluta eaque aperiam sint optio voluptatem
        nesciunt in!
      </p>
      <Button className="landingButton">
        <p className="landingButtonText">SUGGEST FEATURES</p>
      </Button>
    </div>
  );
};

export default Heading;
