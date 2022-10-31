import './App.css';
import Header from "./Header";
import Form from "./Form";
import ListHeader from "./ListHeader";
import ToDoItem from "./ToDoItem";
import { Data } from "../../models/Data";

export const App = () => {
  return (
    <div>
      {
        <div>
          <Header />
          <div className="content">
            <Form />
            <div className="flex-vertical task-list">
              <ListHeader />
              <ToDoItem id="todo-0" text="Wohnung aufräumen" done={false} importance={0} />
              <ToDoItem id="todo-1" text="Katze füttern" done={false} importance={0} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}
