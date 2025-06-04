import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [communityDropDown, setcommunityDropDown] = useState(false);
  const [liturgyDropDown, setLiturgyDropDown] = useState(false);
  const [sacramentsDropDown, setSacramentsDropDown] = useState(false);
  const [formationDropDown, setFormationDropDown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { pathname } = useRouter();

  const handleLinkClick = () => {
    setNavbar(false);
    setAboutDropDown(false);
    setcommunityDropDown(false);
    setLiturgyDropDown(false);
    setSacramentsDropDown(false);
    setFormationDropDown(false);
    setIsDropdownOpen(false);
  };

  const dropdown =
    "relative md:absolute right-0 md:mt-8 rounded-md bg-cyan-600 text-white max-w-max py-3 md:whitespace-nowrap shadow-lg z-[999999]";
  const Navstyles =
    "pb-3 md:pb-6 text-md py-1 md:py-2 md:px-6 md:flex md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent";
  const activeNav = Navstyles + " text-primary1";
  return (
    <div className="relative z-[999999]">
      <nav
        className={`w-full bg-primary fixed top-0 left-0 right-0 z-[999999] md:relative md:mt-0`}
        onMouseLeave={() => {
          setAboutDropDown(false);
          setcommunityDropDown(false);
          setLiturgyDropDown(false);
          setSacramentsDropDown(false);
          setFormationDropDown(false);
        }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 w-full">
          <div>
            <div className="flex items-center justify-between py-2 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold">SJCCKS</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden absolute right-4 top-2">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 focus:border-none active:border-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-start pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
                navbar
                  ? "px-4 right-0 md:p-0 block fixed top-10 left-0 w-2/3 h-[calc(100vh-2.5rem)] bg-primary overflow-y-auto"
                  : "hidden"
              }`}
            >
              <ul
                className={`h-full md:h-auto ${
                  navbar ? "justify-start" : "justify-start"
                } md:flex`}
              >
                <li className={pathname === "/" ? activeNav : Navstyles}>
                  <Link
                    className={
                      pathname === "/" ? "text-secondary" : "text-white"
                    }
                    href="/"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className={pathname === "/bookings" ? activeNav : Navstyles}>
                  <Link
                    className={
                      pathname === "/bookings" ? "text-secondary" : "text-white"
                    }
                    href="/bookings/bookings"
                    onClick={handleLinkClick}
                  >
                    Bookings
                  </Link>
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link
                    className={
                      pathname.includes("welcome")
                        ? "text-secondary"
                        : "text-white"
                    }
                    href="/welcome"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setAboutDropDown(!aboutDropDown);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(!aboutDropDown);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false);
                    }}
                  >
                    {aboutDropDown ? (
                      <span className="md:hidden">- &nbsp;</span>
                    ) : (
                      <span className="md:hidden">+&nbsp;</span>
                    )}
                    <span className="md:block">
                      <span>About</span>
                    </span>
                  </Link>
                  {aboutDropDown && (
                    <ul className={`${dropdown} dropdown z-[9999]`}>
                      <li>
                        <Link
                          className={
                            pathname === "/welcome"
                              ? "text-secondary"
                              : "text-white"
                          }
                          href="/welcome"
                          onClick={handleLinkClick}
                        >
                          Welcome
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={
                            pathname.includes("bulletin")
                              ? "text-secondary"
                              : ""
                          }
                          href="/welcome/bulletin"
                          onClick={handleLinkClick}
                        >
                          Bulletin
                        </Link>
                      </li>
                      <li>
                        <Link href="/#announcements" onClick={handleLinkClick}>
                          Announcements
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link
                    className={
                      pathname.includes("community") ? "text-secondary" : ""
                    }
                    href="/community/event"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(!communityDropDown);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(!communityDropDown);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false);
                    }}
                  >
                    {communityDropDown ? (
                      <span className="md:hidden">- &nbsp;</span>
                    ) : (
                      <span className="md:hidden">+&nbsp;</span>
                    )}
                    <span className="md:block">
                      <span> Community</span>
                    </span>
                  </Link>
                  {communityDropDown && (
                    <ul className={`${dropdown} dropdown z-[9999]`}>
                      <li>
                        <Link
                          className={
                            pathname === "/community" ? "text-secondary" : ""
                          }
                          href="/community"
                          onClick={handleLinkClick}
                        >
                          Upcoming Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("charity") ? "text-secondary" : ""
                          }
                          href="/community/charity"
                          onClick={handleLinkClick}
                        >
                          Charity
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("jumuiya") ? "text-secondary" : ""
                          }
                          href="/community/jumuiya"
                          onClick={handleLinkClick}
                        >
                          Jumuiya
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link
                    className={
                      pathname.includes("liturgy")
                        ? "text-secondary"
                        : "text-white"
                    }
                    href="/liturgy"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(!liturgyDropDown);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(!liturgyDropDown);
                      setSacramentsDropDown(false);
                      setFormationDropDown(false);
                    }}
                  >
                    {liturgyDropDown ? (
                      <span className="md:hidden">- &nbsp;</span>
                    ) : (
                      <span className="md:hidden">+&nbsp;</span>
                    )}
                    <span className="md:block">
                      <span>Liturgy</span>
                    </span>
                  </Link>
                  {liturgyDropDown && (
                    <ul className={`${dropdown} dropdown z-[9999]`}>
                      <li>
                        <Link
                          className={
                            pathname === "/liturgy"
                              ? "text-secondary"
                              : "text-white"
                          }
                          href="/liturgy"
                          onClick={handleLinkClick}
                        >
                          Mass Times
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("adoration")
                              ? "text-secondary"
                              : ""
                          }
                          href="/liturgy/adoration"
                          onClick={handleLinkClick}
                        >
                          Eucharistic Adoration
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("alter") ? "text-secondary" : ""
                          }
                          href="/liturgy/alter"
                          onClick={handleLinkClick}
                        >
                          Alter Serving
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("choir") ? "text-secondary" : ""
                          }
                          href="/liturgy/choir"
                          onClick={handleLinkClick}
                        >
                          Choir
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link
                    className={
                      pathname.includes("sacraments")
                        ? "text-secondary"
                        : "text-white"
                    }
                    href="/sacraments"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(!sacramentsDropDown);
                      setFormationDropDown(false);
                    }}
                    onClick={(e) => {
                      setAboutDropDown(false);
                      e.preventDefault();
                      setIsDropdownOpen(!isDropdownOpen);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(!sacramentsDropDown);
                      setFormationDropDown(false);
                    }}
                  >
                    {sacramentsDropDown ? (
                      <span className="md:hidden">- &nbsp;</span>
                    ) : (
                      <span className="md:hidden">+&nbsp;</span>
                    )}
                    <span className="md:block">
                      <span>Sacraments</span>
                    </span>
                  </Link>
                  {sacramentsDropDown && (
                    <ul className={`${dropdown} dropdown z-[9999]`}>
                      <li>
                        <Link
                          className={
                            pathname.includes("rcic") ? "text-secondary" : ""
                          }
                          href="/sacraments/rcic"
                          onClick={handleLinkClick}
                        >
                          Becoming Catholic (RCIC)
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("rcia") ? "text-secondary" : ""
                          }
                          href="/sacraments/rcia"
                          onClick={handleLinkClick}
                        >
                          Becoming Catholic (RCIA)
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("baptism") ? "text-secondary" : ""
                          }
                          href="/sacraments/baptism"
                          onClick={handleLinkClick}
                        >
                          Baptism
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={
                            pathname.includes("confirmation")
                              ? "text-secondary"
                              : ""
                          }
                          href="/sacraments/confirmation"
                          onClick={handleLinkClick}
                        >
                          Confirmation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("eucharist")
                              ? "text-secondary"
                              : ""
                          }
                          href="/sacraments/eucharist"
                          onClick={handleLinkClick}
                        >
                          Eucharist
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("penance") ? "text-secondary" : ""
                          }
                          href="/sacraments/penance"
                          onClick={handleLinkClick}
                        >
                          Reconciliation
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("annointing")
                              ? "text-secondary"
                              : ""
                          }
                          href="/sacraments/annointing"
                          onClick={handleLinkClick}
                        >
                          Anointing of the sick{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("matrimony")
                              ? "text-secondary"
                              : ""
                          }
                          href="/sacraments/matrimony"
                          onClick={handleLinkClick}
                        >
                          Matrimony
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={
                            pathname.includes("orders") ? "text-secondary" : ""
                          }
                          href="/sacraments/orders"
                          onClick={handleLinkClick}
                        >
                          Holy Orders
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className={`relative ${Navstyles}`}>
                  <Link
                    className={
                      pathname.includes("formation") ? "text-secondary" : ""
                    }
                    href="/formation"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(true);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setAboutDropDown(false);
                      setcommunityDropDown(false);
                      setLiturgyDropDown(false);
                      setSacramentsDropDown(false);
                      setFormationDropDown(!formationDropDown);
                    }}
                  >
                    {formationDropDown ? (
                      <span className="md:hidden">- &nbsp;</span>
                    ) : (
                      <span className="md:hidden">+&nbsp;</span>
                    )}
                    <span className="md:block">
                      <span>Formation</span>
                    </span>
                  </Link>
                  {formationDropDown && (
                    <ul
                      className={`${dropdown} dropdown rounded-md z-[9999] md:absolute md:right-0`}
                    >
                      <li>
                        <Link
                          className={
                            pathname.includes("pmc") ? "text-secondary" : ""
                          }
                          href="/formation/pmc"
                          onClick={handleLinkClick}
                        >
                          PMC
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("mantle") ? "text-secondary" : ""
                          }
                          href="/formation/mantle"
                          onClick={handleLinkClick}
                        >
                          Mantle of St.Joseph
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("mym") ? "text-secondary" : ""
                          }
                          href="/formation/mym"
                          onClick={handleLinkClick}
                        >
                          MYM
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("ysc") ? "text-secondary" : ""
                          }
                          href="/formation/ysc"
                          onClick={handleLinkClick}
                        >
                          YSC
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("yca") ? "text-secondary" : ""
                          }
                          href="/formation/yca"
                          onClick={handleLinkClick}
                        >
                          YCA
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("charismatic")
                              ? "text-secondary"
                              : ""
                          }
                          href="/formation/charismatic"
                          onClick={handleLinkClick}
                        >
                          Charismatic
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("cl") ? "text-secondary" : ""
                          }
                          href="/formation/cl"
                          onClick={handleLinkClick}
                        >
                          CL
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("cwa") ? "text-secondary" : ""
                          }
                          href="/formation/cwa"
                          onClick={handleLinkClick}
                        >
                          CWA
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("cma") ? "text-secondary" : ""
                          }
                          href="/formation/cma"
                          onClick={handleLinkClick}
                        >
                          CMA
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("cjpd") ? "text-secondary" : ""
                          }
                          href="/formation/cjpd"
                          onClick={handleLinkClick}
                        >
                          CJPD
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("couples") ? "text-secondary" : ""
                          }
                          href="/formation/couples"
                          onClick={handleLinkClick}
                        >
                          Young Couples
                        </Link>
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
