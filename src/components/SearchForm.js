import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchForm = ({ submit }) => {

    const [formData, setFormData] = useState({
        searchTerm: ""
    });

    const { searchTerm } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: [e.target.value] });
    }

    return (
        <Row>
            <Col>
                <Form onSubmit={(e) => submit(e, searchTerm)}>
                    <Form.Group >
                        <Form.Control
                            type="text"
                            name="searchTerm"
                            placeholder="Enter a term to search." value={searchTerm}
                            onChange={(e) => onChange(e)}
                        />
                    </Form.Group>
                    <Button type="submit" block disabled={searchTerm === ""}>Submit</Button>
                </Form>
            </Col>
        </Row >
    )
}

export default SearchForm;
