import "./LandingImage.css";

import { FC } from "react";
import Image from "next/image";
import robotImg from "./robot.jpg";

interface LandingImageProps {}

const LandingImage: FC<LandingImageProps> = ({}) => {
  return (
    <div className="landingBox">
      <div className="imageBox">
        <Image
          className="landingImage"
          src={robotImg}
          alt="robot"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default LandingImage;
