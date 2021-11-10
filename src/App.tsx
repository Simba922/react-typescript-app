import React from "react";
import styled from "styled-components";

type style = {
  inputColor?: string;
};

const Input = styled.input<style>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

function App() {
  return (
    <React.Fragment>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
    </React.Fragment>
  );
}

export default App;
