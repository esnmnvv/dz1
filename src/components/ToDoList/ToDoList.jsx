import { useDispatch, useSelector } from "react-redux";
import { addTask, setTaskName } from "../../store/input-slice";
import "./style.css";

const ToDoList = () => {
  const dispatch = useDispatch();
  const taskName = useSelector((state) => state.todo.task);
  const tasks = useSelector((state) => state.todo.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={taskName}
          onChange={(e) => dispatch(setTaskName(e.target.value))}
          type="text"
          placeholder="Имя задачи"
        />
        <button type="submit">Создать Задачу</button>
      </form>
      <div>
        {tasks.map((task) => {
          return (
            <div className="task" key={task.id}>
              <h2>{task.title}</h2>
              <input checked={task.completed} type="checkbox" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
