import React from "react";
import { Button, Container } from "./styles";
import { IoIosAdd } from "react-icons/io";
import colors from "../../styles/colors";

const Input: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Add new todo" />
      <Button>
        <IoIosAdd size={32} color={colors.mediumPurple} />
      </Button>
    </Container>
  );
};

export default Input;
