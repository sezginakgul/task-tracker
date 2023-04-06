import React from "react";

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItem: React.FC<IListItem> = ({
  item,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <>
      {item.completed ? (
        <li style={{ borderBottom: "4px solid red" }}>
          <p className="checked" onClick={() => toggleTodo(item)}>
            {item.task}
          </p>
          <span className="task-icons" onClick={() => deleteTodo(item._id)}>
            ✖️
          </span>
        </li>
      ) : (
        <li style={{ borderBottom: "4px solid #f0ddbc95" }}>
          <p onClick={() => toggleTodo(item)}>{item.task}</p>
          <span className="task-icons" onClick={() => deleteTodo(item._id)}>
            ✖️
          </span>
        </li>
      )}
    </>
  );
};

export default TodoListItem;
