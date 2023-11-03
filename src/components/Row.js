import { css } from "https://esm.sh/@emotion/css";
import { html } from "https://esm.sh/htm/react";

export const Row = ({ children }) => {
  return html`
    <div
      class=${css`
        display: flex;
        flex-direction: row;
        gap: 8px;
        align-items: center;
      `}
    >
      ${children}
    <//>
  `;
};
