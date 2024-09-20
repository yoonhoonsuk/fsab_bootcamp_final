
import TaskListForm from './components/TaskListForm';
import NewTask from './components/NewTask';
import UpdateTask from './components/UpdateTask';

export default function Page() {
  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskListForm />
      <NewTask />
      <UpdateTask />
    </div>
  );
}
