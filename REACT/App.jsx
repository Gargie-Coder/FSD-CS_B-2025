const parent=document.getElementById("parent");
// console.log(parent);
// Import ReactDOM if not already imported
// import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{id:"heading2", style:{color:"white" , backgroundColor:"black"}},"This is created using React");
// const li1=React.createElement("li",{},"Item 1");
// const li2=React.createElement("li",{},"Item 2");
// const ul=React.createElement("ul",{style:{color:"black", backgroundColor:"white"}},li1,li2);
// const pic =React.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMw4tKWThCB56GG5RajHynzibIP_3ZuesC4m8lW3jl35kkMskLvYasOuuz_GW-XueqbqQ&usqp=CAU",style:{backgroundColor:"black",height:"200px",width:"200px",borderRadius:"50%",marginLeft:"20px"}});
// const myname=React.createElement("h3",{style:{margintop:"50px"}},"Wednesday Addams");
// const header=React.createElement("header",{style:{display:"flex",gap:"20px"}},pic,myname);
// const container1=React.createElement("div",{id:"container"},h2,header,ul);
const h2=<h2>This is created using React</h2>
const li1=<li>Item 1</li>;
const li2=<li>Item 2</li>;
const container=(
  <div>
    {h2}
    <ul>
      {li1}
      {li2}
    </ul>
  </div>
)

root.render(container);