import React from "react";
import TodoListItem from "./TodoListItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  console.log(todos);
  const [animationParent] = useAutoAnimate();

  return (
    <ul ref={animationParent}>
      {todos.length ? (
        todos.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "#f0ddbc",
            fontSize: "1.3rem",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      )}
      {/* {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))} */}
    </ul>
  );
};

export default TodoList;
