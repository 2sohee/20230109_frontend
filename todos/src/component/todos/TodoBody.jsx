import styled from "styled-components";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../context/todos";

function TodoBody() {
  const todos = useTodoState();

  return (
    <Container>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default TodoBody;
