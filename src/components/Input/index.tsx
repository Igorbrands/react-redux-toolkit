import React, { useState } from 'react';
import { Button, Container } from './styles';
import { IoIosAdd } from 'react-icons/io';
import colors from '../../styles/colors';
import { useDispatch } from 'react-redux';
import { addTaskInListRequest } from '../../store/modules/tasks/Tasks.actions';

const Input: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(addTaskInListRequest(input));
    setInput('');
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Add new todo"
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' && handleAddTask()}
        value={input}
      />
      <Button onClick={handleAddTask}>
        <IoIosAdd size={32} color={colors.mediumPurple} />
      </Button>
    </Container>
  );
};

export default Input;
