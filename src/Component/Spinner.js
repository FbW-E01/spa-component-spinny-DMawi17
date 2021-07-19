import { FaSpinner } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../App.css";

const Spinner = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_delay=2000&T")
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                setTimeout(() => {
                    setShowData(true);
                }, 2000);
            });
    }, []);

    return (
        <div id="spinner">
            {showData ? (
                <ul>
                    {data.map((d, i) => (
                        <li key={i}>{d.name}</li>
                    ))}
                </ul>
            ) : (
                <div id="fas">
                    <FaSpinner color={"#fff"} />
                </div>
            )}
        </div>
    );
};

export default Spinner;
