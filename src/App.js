import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { Provider } from "react-redux";
import Store from "./utilities/Store";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={Store}>
      <Header />
      <Outlet />
      <Footer />
      </Provider>
    </div>
  );
}

export const myRoute = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children:[
      {
        path:"/",
        element:<Body />,
      }
    ]
  }
])

export default App;
