import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  position: absolute;
  top: 0;
  margin-top: 32px;
  background-color: ${colors.mediumPurple};
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  -webkit-box-shadow: 0px 2px 14px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 14px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 14px -8px rgba(0, 0, 0, 0.75);

  input {
    background-color: ${colors.mediumPurple};
    color: ${colors.ghostBlack};
    width: 540px;
    padding: 16px;
    border-radius: 4px;
    border: 0px;
    font-size: 16px;

    ::placeholder {
      color: ${colors.ghostBlack};
    }
  }
`;

export const Button = styled.div`
  background-color: ${colors.ghostBlack};
  height: 46px;
  width: 46px;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${colors.maximumBluePurple}
  }

  cursor: pointer;
`;
