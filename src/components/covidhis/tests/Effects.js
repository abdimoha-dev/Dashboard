import React, { useState, useEffect } from "react";
import axios from "axios";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const proxyurl = "";
    const url =
      "http://localhost:8080/api/29/analytics/dataValueSet.json?dimension=dx:FlLa6bYz9aH&dimension=CMrvZp5rmoC:bqoVhX2RfG4;EVYKU2fIc6G&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME";

    axios
      .get(proxyurl + url, {
        auth: {
          username: "Super",
          password: "Abdymohammed@123",
        },
      })
      .then((res) => {
        console.log(res);
      });
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
}

export default Effect;
