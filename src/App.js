import Header from "./components/Header";
import CustomerList from "./components/CustomerList";
import { CustomerProvider } from "./components/CustomerContext";
import { Route } from "react-router-dom";
import CustomerBid from "./components/CustomerBid";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CustomerProvider>
          <Route path="/user/:id" component={CustomerBid} />
          <Route exact path="/" component={CustomerList} />
        </CustomerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
