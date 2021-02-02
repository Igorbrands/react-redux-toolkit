import React from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input";
import ItemList from "../../components/ItemList";
import ThemeSwitch from "../../components/ThemeSwitch";
import { Task } from "../../store/modules/tasks/types";
import { RootState } from "../../store/ConfigureStore";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const data = useSelector<RootState, Task[]>((store) => store.tasks.list);

  return (
    <Container>
      <ThemeSwitch />
      <Input />
      {data.map((item) => (
        <ItemList key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Dashboard;
