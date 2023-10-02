import "./styles/globals.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AppProvider from "./context/AppProvider";
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Router />
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
