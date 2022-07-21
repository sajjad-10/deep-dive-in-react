import { useState, useEffect, useRef } from "react";

function Todo() {
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({});

    const isMounted = useRef(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if (!isMounted.current) {
                        console.log("in contion");
                        setTodo(data);
                        setLoading(false);
                    }
                }, 3000);
            });
        // Runs when Component is unmounted
        return () => {
            console.log(123);
            isMounted.current = false;
        };
    }, [isMounted]);
    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <h3>{todo.title ? todo.title : "Todo Test"}</h3>
    );
}

export default Todo;
