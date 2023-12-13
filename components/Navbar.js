import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [communityDropDown, setcommunityDropDown] = useState(false);
  const [liturgyDropDown, setLiturgyDropDown]= useState(false);
  const [sacramentsDropDown, setSacramentsDropDown]= useState(false)
  const [formationDropDown, setFormationDropDown]= useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

 
  const dropdown = "relative md:absolute right-0 md:mt-8 rounded-md  bg-cyan-600 text-white max-w-max py-3 md:whitespace-nowrap";





  const Navstyles= 'pb-6 text-md text-white py-2 md:px-6  md:flex  md:border-b-0  md:hover:text-purple-600 md:hover:bg-transparent'
  return (
    <div className=''>
      <nav className={`md:w-full bg-primary fixed top-0 left-0 right-0 z-10 `}onMouseLeave={() => {
        setAboutDropDown(false);
        setcommunityDropDown(false);
        setLiturgyDropDown(false);
        setSacramentsDropDown(false);
        setFormationDropDown(false);
       
      }}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">SJCCKS</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 focus:border-none active:border-none">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'px-12 right-0 md:p-0 block' : 'hidden'}`}>
          <ul className={`h-screen md:h-auto ${navbar ? 'justify-center' : 'justify-start'} md:flex`}>
           
                <li className={Navstyles}>
                  <Link href="/" onClick={(e) => {setNavbar(!navbar); setIsDropdownOpen(false)}}>
                    Home
                  </Link>
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link href="#blog"  onMouseEnter={(e) => {
                    e.preventDefault();
                    setAboutDropDown(!aboutDropDown);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(false);
                    setFormationDropDown(false)}}

                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(!aboutDropDown);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false)}}
                    >
                        {aboutDropDown ?(
                          <span className="md:hidden">- &nbsp;</span>
                          ) : (
                            <span className="md:hidden">+&nbsp;</span>
                          )}
                          <span className="md:block">
                            <span>About</span>
                          </span>
                  </Link>
                  {aboutDropDown && (
                     <ul className={dropdown}>
                    
                     <li>
                       <Link href="/#welcome" onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Welcome</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Contact</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Staff</Link>
                     </li>
                     <li>
                       <Link href="/bulletin"onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Bulletin</Link>
                     </li>
                     <li>
                       <Link href="/#announcements" onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Announcements</Link>
                     </li>
                   </ul>
                  )}

                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link href="#contact" onMouseEnter={(e) => {
                    e.preventDefault();
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(!communityDropDown);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(false);
                    setFormationDropDown(false)}}
                    
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(!communityDropDown);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false)}}>

                            {communityDropDown ?(
                          <span className="md:hidden">- &nbsp;</span>
                          ) : (
                            <span className="md:hidden">+&nbsp;</span>
                          )}
                          <span className="md:block">
                            
                   <span> Community</span></span>
                  </Link>
                  {communityDropDown && (
                     <ul className={dropdown}>
                    
                     <li>
                       <Link href="/event" onClick={()=>{setNavbar(!navbar); setcommunityDropDown(false)}}>Upcoming Events</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setcommunityDropDown(false)}}>Charity</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setcommunityDropDown(false)}}>SCC</Link>
                     </li>
                     
                   </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link href="#contact" onMouseEnter={(e) => {
                    e.preventDefault();
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(!liturgyDropDown);
                    setSacramentsDropDown(false);
                    setFormationDropDown(false)}}
                    
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(!liturgyDropDown);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false)}}>
                           {liturgyDropDown ?(
                          <span className="md:hidden">- &nbsp;</span>
                          ) : (
                            <span className="md:hidden">+&nbsp;</span>
                          )}
                          <span className="md:block">
                            
                   <span> 
                    Liturgy</span></span>

                  </Link>
                  {liturgyDropDown && (
                     <ul className={dropdown}>
                    
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Mass Times</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Eucharistic Adoration</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Alter Serving</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Choir</Link>
                     </li>
                   
                     
                   </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link href="#projects"
                  onMouseEnter={()=>{setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(!sacramentsDropDown);
                    setFormationDropDown(false)}}
                    
                    onClick={()=>{setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(!sacramentsDropDown);
                      setFormationDropDown(false)}}>
                     {sacramentsDropDown ?(
                          <span className="md:hidden">- &nbsp;</span>
                          ) : (
                            <span className="md:hidden">+&nbsp;</span>
                          )}
                          <span className="md:block">
                            
                   <span> 
                    Sacraments</span></span>
                  </Link>
                  {sacramentsDropDown && (
                     <ul className={dropdown}>
                    
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Becoming Catholic</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Baptism</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Reconciliation</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Confirmation</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Eucharist</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Marriage</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Annointing </Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Holy Order</Link>
                     </li>
                     
                   </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link href="#projects"   onMouseEnter={()=>{
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(false);
                    setFormationDropDown(!formationDropDown)}}
                    
                    onClick={()=>{
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(!formationDropDown)}}>
                     {formationDropDown ?(
                          <span className="md:hidden">- &nbsp;</span>
                          ) : (
                            <span className="md:hidden">+&nbsp;</span>
                          )}
                          <span className="md:block">
                            
                   <span> 
                    Formation</span></span>
                  </Link>
                  {formationDropDown && (
                     <ul className={dropdown}>
                    
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Pontifical Missionary Childhood (PMC)</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Mantle of St Joseph</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Missionary Youth Movement(MYM)</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Youth Serving Christ(YSC)</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Young Catholic Adults(YCA)</Link>
                     </li>
                     <li>
                       <Link href="#" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Catholic Women Association (CWA)</Link>
                     </li>
                     <li>
                       <Link href="#"onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Catholic Men Association (CMA)</Link>
                     </li>
                     
                     
                   </ul>
                  )}

                </li>
            
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;