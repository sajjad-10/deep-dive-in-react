import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
    const [name, setName] = useState("");

    const renders = useRef(1);
    const prevName = useRef("");
    useEffect(() => {
        renders.current = renders.current + 1;
        prevName.current = name;
    }, [name]);
    return (
        <div>
            <h2>Renders: {renders.current}</h2>
            <h3>Prev Name: {prevName.current}</h3>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control mb-3"
            />
        </div>
    );
}

export default UseRefExample2;
