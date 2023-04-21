import TodoMainPage from "../pages/todoMain";
import MyCategory from "../pages/mycategory";
import Calendar from "../pages/calendar";

const ROUTE_LIST = [
  { path: "/SOPTWebTodo", element: TodoMainPage },
  { path: "/SOPTWebTodo/calendar", element: Calendar },
  { path: "/SOPTWebTodo/myCategory", element: MyCategory },
];

export default ROUTE_LIST;
