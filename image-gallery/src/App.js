import React, { useState, useEffect } from "react";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");
    useEffect(() => {
        fetch(
            `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    },[]);
    return <div className="container mx-auto"></div>;
}

export default App;
