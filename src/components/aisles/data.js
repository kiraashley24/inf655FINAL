import fruit from "./images/fruit.jpg";
import veges from "./images/vegetables.jpeg";
import meat from "./images/homemeat.jpg";
import bread from "./images/bread.jpg";
import dry from "./images/dry.png";
import snowflake from "./images/snowflake.png";
import cookie from "./images/cookie.jpg";


const aisle = [
  {
    image: fruit,
    name: "Fruit",
    path: "/fruit" // Example path for fruit, update this to match your route
  },
  {
    image: veges,
    name: "Vegetables",
    path: "/vegetables" // Example path for vegetables, update this to match your route
  },
  {
    image: meat,
    name: "Meat",
    path: "/meat" // Example path for meat, update this to match your route
  },
  {
    image: bread,
    name: "Bread",
    path: "/bread" // Example path for bread, update this to match your route
  },
  {
    image: dry,
    name: "Pantry",
    path: "/pantry" // Example path for pantry, update this to match your route
  },
  {
    image: cookie,
    name: "Dessert",
    path: "/dessert" // Path for dessert
  },
];

export default aisle;
