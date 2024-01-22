function NavBar({ menuitems, minstock }) {
  const filteredItems = menuitems.filter((item) => item.instock >= minstock);

  const formattedList = filteredItems.map((item) => (
    <li key={item.name}>{`${item.name}:${item.instock}`}</li>
  ));

  return <ul style={{ listStyleType: "none" }}>{formattedList}</ul>;
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];

ReactDOM.render(
  <NavBar menuitems={menuItems} minstock={2} />,
  document.getElementById("root")
);
