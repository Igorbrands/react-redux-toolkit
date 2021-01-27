import React from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import ItemList from "../../components/ItemList";
import { Task } from "../../store/modules/Tasks/types";
import { ApplicationState } from "../../store/types";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const data = useSelector<ApplicationState, Task[]>(
    (store) => store.tasks.list
  );

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
