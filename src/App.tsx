import './App.css'
import Counter from "./application-state/Counter.tsx";
import "./config/i18n.tsx";
import AddUser from "./form-state/add-user.tsx";
import AddUserForm from "./form-state/add-user-form.tsx";
import {useTranslation} from "react-i18next";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TodoQuery from "./server-state/todo-query.tsx";
import Todo from "./server-state/todo.tsx";

const queryClient = new QueryClient();

function App() {
    const { t: translate } = useTranslation("user");

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <p>Hello World!!! React + Vite Template {translate("greet")}</p>
                <Todo />
                <TodoQuery />
                <Counter/>
                <AddUser />
                <AddUserForm />
            </QueryClientProvider>
        </div>
    )
}

export default App
