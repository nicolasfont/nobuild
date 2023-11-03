import { html } from "https://esm.sh/htm/react";
import { createRoot } from "https://esm.sh/react-dom/client";
import { App } from "./components/App.js";

createRoot(document.getElementById("root")).render(html`<${App} />`);
