import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import "./App.css";
import { Button } from "antd";
import { Divider } from "antd";
import Footer from "./Components/Footer";
import { DollarOutlined } from '@ant-design/icons';
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Divider style={{backgroundColor: "#295EA5"}}/>
      <Footer />
      <Button
      type="primary"
      icon={<DollarOutlined />}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 180,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#295EA5',
        border: "solid 1px #000",
        borderRadius: '25px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#389e0d')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#295EA5')}
    >
      Pago de Matrícula
    </Button>

    </>
  );
}

export default App;
