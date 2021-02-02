import React, { useState } from 'react';
import { Container } from './styles';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import colors from '../../styles/colors';
import { Task } from '../../store/modules/tasks/types';
import { useDispatch } from 'react-redux';
import { removeTaskInList } from '../../store/modules/tasks/Tasks.store';

interface ItemListProps {
  data: Task;
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  const [hover, setHover] = useState(false);
  const dispach = useDispatch();

  function handleDeleteTask() {
    dispach(removeTaskInList(data));
  }

  return (
    <Container>
      <div>
        <h2>{data.description}</h2>
      </div>
      <RiDeleteBin5Fill
        onClick={handleDeleteTask}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        size={18}
        color={hover ? colors.mediumPurple : colors.ghostBlack}
      />
    </Container>
  );
};

export default ItemList;
