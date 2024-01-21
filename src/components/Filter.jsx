import Form from 'react-bootstrap/Form';

export const Filter = ({ value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name to filter"
      />
    </Form.Group>
  );
};
