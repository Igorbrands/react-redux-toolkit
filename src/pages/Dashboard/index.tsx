import React from "react";
import ItemList, { TodoItem } from "../../components/ItemList";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const data: TodoItem[] = [
    { id: 1, title: "Redux", description: "Estudar Redux" },
    { id: 2, title: "TypeScript", description: "Estudar TypeScript" },
    { id: 3, title: "NextJS", description: "Estudar NextJS" },
  ];

  return (
    <Container>
      {data.map((item) => (
        <ItemList key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Dashboard;
