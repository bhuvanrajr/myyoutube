import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Provider } from "react-redux";
import Store from "./utilities/Store";

function App() {
  return (
    <div>
      <Provider store={Store}>
      <Header />
      <Body />
      <Footer />
      </Provider>
    </div>
  );
}

export default App;
