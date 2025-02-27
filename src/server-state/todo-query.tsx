import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const TodoQuery = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["todos", "1"],
        queryFn: () => axios
            .get("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.data)
    });

    if(isLoading) return <p>Loading todo information</p>;

    if(isError || !data) return <p>Error fetching todo information</p>;

    return <p>{data.id}. {data.title}</p>;
};

export default TodoQuery;
