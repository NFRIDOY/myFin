import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


export default function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}
