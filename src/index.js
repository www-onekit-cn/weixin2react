import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { Button, Card, Input } from "../lib/weixin2react";

ReactDOM.render(
  <div className="www-onekit-cn">
    <h1>Hello, Boy!</h1>
    <Button type="primary" onClick={() => alert("www-onekit-cn")}>
      www-onekit-cn
    </Button>
    <p>
      <Input onChange={() => console.log(1)} />
    </p>

    <p>
      <Card>Card</Card>
    </p>
  </div>,
  document.getElementById("root")
);
