export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter by Name:
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name to filter"
        />
      </label>
    </div>
  );
};
