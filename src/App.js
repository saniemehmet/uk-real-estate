import { Container, Row } from "react-bootstrap";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";

const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true
  }
]

function App() {
  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route
        key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
      />
    })
  }

  return (
    <Router>
      <NavBar />
      <Container>
        <Row>
          <Routes>
            {getRoutes()}
          </Routes>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
