import "./App.css";
import { Entities } from "./components/entities/entities";
import { Header } from "./components/header/header";

function App() {
  return (
    <div className="main">
      <Header />
      <Entities />
    </div>
  );
}

export default App;
