import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  background-color: ${colors.maximumBluePurple};
  min-width: 300px;
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;
