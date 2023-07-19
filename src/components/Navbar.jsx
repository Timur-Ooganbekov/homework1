import { Link } from "react-router-dom"

const Navbar = () => {
    
  return (
    <header>
            <ul className="header">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
            </ul>
    </header>
  )
}

export default Navbar