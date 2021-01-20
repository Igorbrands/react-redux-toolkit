import React, { useState } from "react";
import { Container } from "./styles";
import { RiDeleteBin5Fill } from "react-icons/ri";
import colors from "../../styles/colors";

export interface TodoItem {
  id: number;
  title: string;
  description: string;
}

interface ItemListProps {
  data: TodoItem;
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <Container>
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <RiDeleteBin5Fill
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        size={18}
        color={hover ? colors.mediumPurple : colors.ghostWhite}
      />
    </Container>
  );
};

export default ItemList;
