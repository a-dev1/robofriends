import React from "react";
import Card from "./Card";

const Cards = ({ robots }) => {
  return (
    <div>
      {robots.map((element, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default Cards;

// const cardArray = robots.map((element, i) => {
//   return (
//     <Card
//       key={i}
//       id={robots[i].id}
//       name={robots[i].name}
//       email={robots[i].email}
//     />
//   );
// });
