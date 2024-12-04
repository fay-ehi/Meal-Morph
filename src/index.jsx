import { createRoot } from "react-dom/client";
import App from "./App";

function CreateElement() {
  return <App />;
}
const root = createRoot(document.getElementById("root"));
root.render(<CreateElement />);
