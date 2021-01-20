import React from "react";
import Input from "../../components/Input";
import ItemList, { TodoItem } from "../../components/ItemList";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const data: TodoItem[] = [
    { id: 1, description: "Estudar Redux" },
    { id: 2, description: "Estudar TypeScript" },
    { id: 3, description: "Estudar NextJS" },
  ];

  return (
    <Container>
      <Input />
      {data.map((item) => (
        <ItemList key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Dashboard;
