function ListGroup() {
  const items = ["New York", "Paris", "Tokyo", "Ha Noi", "Da Nang"];
  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
        ;
      </ul>
    </>
  );
}
export default ListGroup;
