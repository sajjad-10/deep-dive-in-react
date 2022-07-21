import UseMemoExample from "./components/UseMemoExample";
import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";

function App() {
    return (
        <div className="container mt-5">
            {/* <h2>useRef ex1:</h2>
            <UseRefExample1 /> */}

            {/* <h1>useRef ex2:</h1>
            <UseRefExample2 /> */}

            {/* <h1>useRef ex3:</h1>
            <UseRefExample3/> */}

            <UseMemoExample />
        </div>
    );
}

export default App;
