import "./styles/globals.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
