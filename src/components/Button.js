import { css } from "https://esm.sh/@emotion/css";
import { html } from "https://esm.sh/htm/react";

export const Button = ({ onClick, children }) =>
  html`<button
    class=${css`
      border: none;
      border-radius: 6px;
      cursor: pointer;
      padding: 8px 12px;
    `}
    onClick=${onClick}
  >
    ${children}
  <//>`;
