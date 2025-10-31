const parent = document.getElementById("parent");

const h2 = React.createElement(
  "h2",
  { style: { color: "white", backgroundColor: "black", padding: "10px" } },
  "This is created using React"
);

const pic = React.createElement("img", {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw4tKWThCB56GG5RajHynzibIP_3ZuesC4m8lW3jl35kkMskLvYasOuuz_GW-XueqbqQ&usqp=CAU",
  style: {
    backgroundColor: "black",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    marginLeft: "20px",
  },
});

const myname = React.createElement(
  "h4",
  { style: { marginTop: "50px" } },
  "Wednesday Addams"
);

const branch = React.createElement("h4", {}, "Computer Science");
const section = React.createElement("h4", {}, "Section B");
const college = React.createElement("h4", {}, "ABES Engineering College");

const header = React.createElement(
  "header",
  { style: { display: "flex", gap: "20px", alignItems: "center" } },
  pic
);

const container1 = React.createElement(
  "div",
  { id: "container" },
  h2,
  header,myname,
  branch,
  section,
  college
);

const root = ReactDOM.createRoot(parent);
root.render(container1);
