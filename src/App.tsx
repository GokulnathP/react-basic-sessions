import './App.css'
import Counter from "./Counter.tsx";
import "./config/i18n.tsx";
import AddUser from "./add-user.tsx";
import AddUserForm from "./add-user-form.tsx";
import {useTranslation} from "react-i18next";

function App() {
    const { t: translate } = useTranslation("user");

    return (
        <div>
            <p>Hello World!!! React + Vite Template {translate("greet")}</p>
            <Counter/>
            <AddUser />
            <AddUserForm />
        </div>
    )
}

export default App
