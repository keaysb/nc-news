import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/Login/UserContext.jsx";
import { TopicProvider } from "./components/Header/TopicContext.jsx";
import { SortProvider } from "./components/Header/SortContext.jsx";
import { OrderProvider } from "./components/Header/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <TopicProvider>
      <SortProvider>
        <OrderProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </OrderProvider>
      </SortProvider>
    </TopicProvider>
  </UserProvider>
);
