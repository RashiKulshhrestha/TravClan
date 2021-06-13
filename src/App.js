import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import CustomerList from "./components/customerList";
import { CustomerProvider } from "./components/customerContext";

function App() {
  return (
    <CustomerProvider>
      <div className="App">
        <Header />
        <CustomerList />
      </div>
    </CustomerProvider>
  );
}

export default App;
