import {
  useState,
  useEffect
} from 'react'

const NavLink = ({ href, children }) => (
  <a href={href} className="text-base no-underline block mt-4 lg:inline-block lg:mt-0 mr-4">
    {children}
  </a>
)

export default function Navbar() {
  const [isOpen, setNavbarOpen] = useState(false)
  const [cartLen, setCartLen] = useState(null)
  const [boltColor, setBoltColor] = useState('black')
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setBoltColor('white')
    }
    const smallScreenW = 640
    const mediumScreenW = 768
    const largeScreenW = 1024
    if (document.body.clientWidth >= largeScreenW) {
      setNavbarOpen(true)
    }
  }, [])
  return (
    <nav id="navbar"
      style={{ boxShadow: '0px 0px 2px #000' }}
      className="z-50 bg-white top-0 inset-x-0 fixed flex items-center justify-between flex-wrap px-3 py-3 lg:px-5">
      <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="w-6">
          <img className="m-0" src={`/img/bolt-${boltColor}.png`} />
        </a>
      </div>
      <div className="block lg:hidden">
        <span onClick={() => setNavbarOpen(!isOpen)} className="flex items-center">
          <svg className=" h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </span>
      </div>
      <div style={{ display: `${isOpen ? 'flex' : 'none'}` }} id="navbar-items" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow">
          {/* LEFT SIDE OF NAV (LARGE SCREEN) */}
        </div>
        <div>
          {/* RIGHT SIDE OF NAV (LARGE SCREEN) */}
          <NavLink href="https://aunyks.com/about">
            About
          </NavLink>
          <NavLink href="https://twitch.tv/aunyks">
            Twitch
          </NavLink>
          <NavLink href="https://periscope.tv/aunyks">
            Periscope
          </NavLink>
          <span className="hidden lg:inline-block lg:mt-0 mr-4">|</span>
          <NavLink href="https://instagram.com/aunyks">
            Instagram
          </NavLink>
          <NavLink href="https://twitter.com/aunyks">
            Twitter
          </NavLink>
          <NavLink href="https://tiktok.com/@aunyks">
            TikTok
          </NavLink>
        </div>
      </div>
    </nav>
  )
}