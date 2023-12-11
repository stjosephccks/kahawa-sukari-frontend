import Footer from "./Footer";

const { default: NavBar } = require("./Navbar")
 const Layout =({children})=>{
    return(
        <div>
            <NavBar/>
            <div  className="mt-16">
            {children}
            </div>
            <Footer/>
            
        </div>
    )
}
export default Layout;