import React, { useState } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

import SearchForm from "./components/SearchForm";
import NavBar from './components/NavBar';
import ResultCard from './components/ResultCard';

function App() {

  const [data, setData] = useState(null);

  const clean = [];

  const onSubmit = async (e, searchTerm) => {
    e.preventDefault();
    const apiEndpoint = "https://en.wikipedia.org/w/api.php";
    const params = "?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|info|pageimages&pithumbsize=100&inprop=url&exintro&explaintext&exsentences=1&exlimit=max&origin=*";

    try {
      const res = await axios.get(`${apiEndpoint}${params}&gsrsearch=${searchTerm}`);

      for (const item in res.data.query.pages) {
        clean.push(res.data.query.pages[item]);
      }
      setData(clean);

    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <Container>
        <Jumbotron>
          <h1 className="text-center">Wikipedia search</h1>
          <SearchForm submit={onSubmit} />
          <h3
            className="text-center"
            style={{ marginTop: "2rem" }}>
            <a href="https://en.wikipedia.org/wiki/Special:Random"
              target="_blank" rel="noopener noreferrer">
              Click here for a random article
              </a>
          </h3>

          {data && data.map((item) => {
            return <ResultCard
              key={item.pageid}
              title={item.title}
              url={item.fullurl}
              extract={item.extract}
            />

          })}

        </Jumbotron>
      </Container>
    </>
  );
}

export default App;
