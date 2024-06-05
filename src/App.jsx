import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import "./App.css";
import { Button } from "antd";
import { Divider } from "antd";
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Divider style={{backgroundColor: "#295EA5"}}/>
      <Button
        type="primary"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 150,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Pago de Matrícula
      </Button>
    </>
  );
}

export default App;
