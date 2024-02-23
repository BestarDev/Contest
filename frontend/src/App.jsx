import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
