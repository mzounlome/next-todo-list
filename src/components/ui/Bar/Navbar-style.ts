import { device } from "@/app/device";
import styled from "styled-components";

export const NavDiv = styled.div`
  background-color: blue;
  height: 75px;
  width: 100%;
  display: flex;
`;
export const LeftNavDiv = styled.div`
  height: 100%;
  width: 250px;
  margin-left: 10px;
`;

export const BarName = styled.button`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 5px;
  color: black;
  border-radius: 10px;
  background-color: blue;
  height: 60px;
  width: 100px;
  cursor: pointer;
  border-color: transparent;
`;

export const RightNavDiv = styled.div`
  width: 350px;
  height: 100%;
  margin-left: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${device.tablet} {
    margin-left: 500px;
  }
`;
