import React from "react";

const Test = () => {
  var elements = ["hydrogen", "Helium", "Lithium", "Beryl"];
  function runners() {
    return ["s", "o", "chi"];
  }
  var [k, b, c] = runners();
  console.log(k);
  console.log(b);
  console.log(c);

  var [a, b, c, d, e] = ["Table", "Chair", "Fan", "Rug"];
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);

  const person = (id, e) => {
    let age = id;

    setInterval(function growUp() {
      age++;
      console.log(age);
    }, 1000);
  };
  elements.map(({ length: lenghtFooBar }) => lenghtFooBar);
  return (
    <div>
      <button onClick={(e) => person(1, e)}>Click Me</button>
    </div>
  );
};

export default Test;
