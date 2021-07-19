import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/card";


const Data = ({ data }) => {
    return (
        <Card
            border="success"
            bg="secondary"
            style={{
                width: "18rem",
                color: "#fff",
                padding: "10px",
            }}
        >
            <Card.Title style={{ textAlign: "center", color: "red" }}>
                Subject 347
            </Card.Title>
            {Object.entries(data[347]).map((k) => (
                <Card.Body>
                    <Card.Text>
                        {k[0]} : {k[1]}
                    </Card.Text>
                </Card.Body>
            ))}
        </Card>
    );
};

export default Data;
