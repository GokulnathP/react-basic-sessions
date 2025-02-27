import {useEffect, useState} from "react";
import axios from "axios";

interface TodoInfo {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

const Todo = () => {
    const [todoInfo, setTodoInfo] = useState<TodoInfo>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => setTodoInfo(response.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, []);

    if(loading) return <p>Loading todo information</p>;

    if(error || !todoInfo) return <p>Error fetching todo information</p>;

    return <p>{todoInfo.id}. {todoInfo.title}</p>;
};

export default Todo;
