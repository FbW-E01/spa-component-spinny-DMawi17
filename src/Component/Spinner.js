import { useState, useEffect } from "react";
import Data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCompactDisc } from "react-icons/fa";
import "../App.css";

const Spinner = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_delay=2000&t=")
            .then((response) => response.json())
            .then((result) => {
                setTimeout(() => {
                    setData(result);
                    setShowData(true);
                }, 2000);
            });
    }, []);

    return (
        <div id="spinner">
            {showData ? (
                <div>
                    <Data data={data} />
                </div>
            ) : (
                <div id="fas">
                    <FaCompactDisc />
                </div>
            )}
        </div>
    );
};

export default Spinner;
