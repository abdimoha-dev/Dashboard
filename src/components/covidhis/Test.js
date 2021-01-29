import React from "react";
import d2 from "d2";
import { init } from "d2";

const Test = () => {
    const ds = init({
        baseUrl: "http://localhost:8080/api/33/analytics/dataValueSet.json?dimension=dx:qjhxv6tdE7x&dimension=pe:TODAY&dimension=ou:qKzosKQPl6G&displayProperty=NAME",
        headers: { authorization: `Basic ${btoa("Super:Abdymohammed@123")}` },
    }).then((d2) => {
        console.log(d2);
        //Your d2 is initialised and ready to use.
    });

    return <div > < /div>;
};

export default Test;