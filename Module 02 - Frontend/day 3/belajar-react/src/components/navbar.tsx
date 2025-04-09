/** @format */

export function Navbar() {
  const id = "navbar";
  const style = {
    width: "100%",
    padding: "10px",
    backgroundColor: "red",
  };
  return (
    <nav
      style={style} // {}
      id={id} // "navbar"
    >
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      <a href="/about">About</a>
      <a href="/ga-ada">not exist</a>
    </nav>
  );
}

//dalam react => accessing attr dalam element, name, id
