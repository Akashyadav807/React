// const heading = React.createElement("h1" , {id : "heading", xyz: "abc"}, "Hello World form the React..!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// ex :2 creating nested div tags 
// *
// *     <div id = "parent">
// *        <div id = "child">
// *            <h1> i am h1 tag </h1>
// *            <h2> i am h2 tag</h2>
// *         </div>   
// *         <div id = "child">
// *            <h1> i am h1 tag </h1>
// *            <h2> i am h2 tag</h2>
// *         </div>  
// *      </div>
// *
// *

const parent = React.createElement("div", {id : "parent"},
     [React.createElement("div", {id : "child1"}, 
        [React.createElement("h1", {id : "heading"}, "I am H1 TAG..!"),
            React.createElement("h2", {id : "heading"}, "I am H2 TAG..!")
        ]),
    React.createElement("div", {id : "child2"}, 
        [React.createElement("h1", {id : "heading"}, "I am H1 TAG..!"),
            React.createElement("h2", {id : "heading"}, "I am H2 TAG..!")
        ])]);
 console.log(parent);    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);        