import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import UseImparativeHandle from './components/useImparativeHandle';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante COn Fusion</NavbarBrand>
        </div>
      </Navbar>
      {/* <Menu /> */}
      <UseImparativeHandle />
    </div>
  );
}

export default App;
