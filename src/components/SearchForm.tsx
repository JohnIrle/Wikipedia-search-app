import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

interface SearchFormProps {
  submit: (
    e: React.FormEvent<HTMLFormElement>,
    searchTerm: String
  ) => Promise<void>;
}

const SearchForm: React.FC<SearchFormProps> = ({ submit }) => {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const { searchTerm } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  return (
    <Row>
      <Col>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            submit(e, searchTerm)
          }
        >
          <Form.Group>
            <Form.Control
              type="text"
              name="searchTerm"
              placeholder="Enter a term to search."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
            />
          </Form.Group>
          <Button type="submit" block disabled={searchTerm === ""}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchForm;
