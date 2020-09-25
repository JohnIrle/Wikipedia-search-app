import React from "react";
import { Card } from "react-bootstrap";

interface ResultCardProps {
    title: string;
    extract: string;
    url: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, extract, url }) => {
    return (
        <Card style={{ paddingBottom: "1rem" }}>
            <Card.Body>
                <Card.Title>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </Card.Title>
                <Card.Text>{extract}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ResultCard;
