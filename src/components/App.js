import { html } from "https://esm.sh/htm/react";
import { useCallback, useState } from "https://esm.sh/react";
import { Button } from "./Button.js";
import { Row } from "./Row.js";

export const App = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  const dec = useCallback(() => {
    setCount(count - 1);
  }, [count, setCount]);

  return html`
    <${Row}>
      <${Button} onClick=${dec}>-<//>
      ${count}
      <${Button} onClick=${inc}>+<//>
    <//>
  `;
};
