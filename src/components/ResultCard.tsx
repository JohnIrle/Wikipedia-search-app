// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ResultCard.module.css";

interface ResultCardProps {
  title: string;
  extract: string;
  url: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, extract, url }) => {
  return (
    <Card className={styles.card}>
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
