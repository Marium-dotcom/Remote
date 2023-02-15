import Link from "next/link";



export default function Navbar() {
  return (
  <>
<nav className=" text-black ">
    <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
<Link as={'./'}  href={'./'}>Home</Link>
                </li>
                <li>
<Link as={'./About'} href={'./About'}>About</Link>  

              </li>
                <li>
                <Link as={'./Team'} href={'./Team'}>Team</Link>
                </li>

            </ul>
        </div>
    </div>
</nav>


  <div></div>
  </>
  )
}
