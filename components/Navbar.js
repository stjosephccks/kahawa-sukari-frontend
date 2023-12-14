import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [communityDropDown, setcommunityDropDown] = useState(false);
  const [liturgyDropDown, setLiturgyDropDown]= useState(false);
  const [sacramentsDropDown, setSacramentsDropDown]= useState(false)
  const [formationDropDown, setFormationDropDown]= useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {pathname} = useRouter()
  

 
  const dropdown = "relative md:absolute right-0 md:mt-8 rounded-md  bg-cyan-600 text-white  max-w-max py-3 md:whitespace-nowrap";
  const Navstyles= 'pb-6 text-md  py-2 md:px-6  md:flex  md:border-b-0  md:hover:text-purple-600 md:hover:bg-transparent';
  const activeNav = Navstyles +" text-primary1";
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
           
                <li className={pathname==='/'?activeNav: Navstyles}>
                  <Link className={pathname==='/'?'text-secondary':'text-white'} href="/" onClick={(e) => {setNavbar(!navbar); setIsDropdownOpen(false)}}>
                    Home
                  </Link>
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link className={pathname.includes('welcome')?'text-secondary':'text-white'} href="/welcome"  onMouseEnter={(e) => {
                   e.preventDefault()
                    setAboutDropDown(!aboutDropDown);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(false);
                    setFormationDropDown(false)}}

                    onClick={(e) => {
                      e.preventDefault()
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
                     <ul className={`${dropdown} dropdown`}>
                    
                     <li>
                       <Link className={pathname==='/welcome'?'text-secondary':'text-white'} href="/welcome" onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Welcome</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('contact')?'text-secondary':''} href="/welcome/contact"onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Contact</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('staff')?'text-secondary':''} href="/welcome/staff" onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Staff</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('bulletin')?'text-secondary':''} href="/welcome/bulletin"onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Bulletin</Link>
                     </li>
                     <li>
                       <Link href="/#announcements" onClick={()=>{setNavbar(!navbar); setAboutDropDown(false)}}>Announcements</Link>
                     </li>
                   </ul>
                  )}

                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link className={pathname.includes('community')?'text-secondary':''} href="/community/event" onMouseEnter={(e) => {
                    e.preventDefault()
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(!communityDropDown);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(false);
                    setFormationDropDown(false)}}
                    
                    onClick={(e) => {
                     e.preventDefault()
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
                     <ul className={`${dropdown} dropdown`}>
                    
                     <li>
                       <Link className={pathname==='/community'?'text-secondary':''} href="/community" onClick={()=>{setNavbar(!navbar); setcommunityDropDown(false)}}>Upcoming Events</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('charity')?'text-secondary':''} href="/community/charity"onClick={()=>{setNavbar(!navbar); setcommunityDropDown(false)}}>Charity</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('jumuiya')?'text-secondary':''}  href="/community/jumuiya" onClick={()=>{setNavbar(!navbar); setcommunityDropDown(false)}}>Jumuiya</Link>
                     </li>
                     
                   </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link className={pathname.includes('liturgy')?'text-secondary':'text-white'} href="/liturgy" onMouseEnter={(e) => {
                    e.preventDefault()
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(!liturgyDropDown);
                    setSacramentsDropDown(false);
                    setFormationDropDown(false)}}
                    
                    onClick={(e) => {
                      e.preventDefault()
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
                     <ul className={`${dropdown} `}>
                    
                     <li>
                       <Link className={pathname==='/liturgy'?'text-secondary':'text-white'} href="/liturgy" onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Mass Times</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('adoration')?'text-secondary':''} href="/liturgy/adoration"onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Eucharistic Adoration</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('alter')?'text-secondary':''}  href="/liturgy/alter" onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Alter Serving</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('choir')?'text-secondary':''}  href="/liturgy/choir"onClick={()=>{setNavbar(!navbar); setLiturgyDropDown(false)}}>Choir</Link>
                     </li>
                   
                     
                   </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link className={pathname.includes('sacraments')?'text-secondary':'text-white'} href="/sacraments"
                  onMouseEnter={(e)=>{
                    e.preventDefault()
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(!sacramentsDropDown);
                    setFormationDropDown(false)}}
                    
                    onClick={(e)=>{setAboutDropDown(false);
                      e.preventDefault()
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
                     <ul className={`${dropdown} dropdown`}>
                    
                     <li>
                       <Link className={pathname==='/sacraments'? 'text-secondary':''} href="/sacraments" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Becoming Catholic</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('baptism')?'text-secondary':''} href="/sacraments/baptism"onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Baptism</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('penance')?'text-secondary':''} href="/sacraments/penance" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Reconciliation</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('confirmation')?'text-secondary':''}  href="/sacraments/confirmation"onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Confirmation</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('eucharist')?'text-secondary':''} href="/sacraments/eucharist" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Eucharist</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('matrimony')?'text-secondary':''} href="/sacraments/matrimony" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Matrimony</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('annointing')?'text-secondary':''}  href="/sacraments/annointing"onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Annointing </Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('orders')? 'text-secondary':''} href="/sacraments/orders" onClick={()=>{setNavbar(!navbar); setSacramentsDropDown(false)}}>Holy Orders</Link>
                     </li>
                     
                   </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link className={pathname.includes('formation')?'text-secondary':''} href="/formation"   onMouseEnter={(e)=>{
                    e.preventDefault()
                    setAboutDropDown(false);
                    setIsDropdownOpen(!isDropdownOpen);
                    setcommunityDropDown(false);
                    setLiturgyDropDown(false);
                    setSacramentsDropDown(false);
                    setFormationDropDown(!formationDropDown)}}
                    
                    onClick={(e)=>{
                      e.preventDefault()
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
                     <ul className={`${dropdown} dropdown`}>
                    
                     <li>
                       <Link className={pathname==='/formation'?'text-secondary':''} href="/formation" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>PMC</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('mantle')?'text-secondary':''} href="/formation/mantle"onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Mantle of St.Joseph</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('mym')?'text-secondary':''} href="/formation/mym" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>MYM</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('ysc')?'text-secondary':''} href="/formation/ysc"onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>YSC</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('yca')?'text-secondary':''} href="/formation/yca" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>YCA</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('charismatic')?'text-secondary':''} href="/formation/charismatic" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>Charismatic</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('cwa')?'text-secondary':''} href="/formation/cwa" onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>CWA</Link>
                     </li>
                     <li>
                       <Link className={pathname.includes('cma')?'text-secondary':''}  href="/formation/cma"onClick={()=>{setNavbar(!navbar); setFormationDropDown(false)}}>CMA</Link>
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