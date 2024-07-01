import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";


function Navber() {
    const navlinks = <>
        <li><Link href="/ajkerPotrika">আজকের পত্রিকা</Link></li>
        <li><Link href="/ePaper">ই-পেপার</Link></li>
        <li><Link href="/magazine">ম্যাগাজিন</Link></li>
        
        <li><a>আর্কাইভ</a></li>
        <li><a>সোশ্যাল মিডিয়া</a></li>
        <li><a>বাংলা কনভার্টার</a></li>
    </>
    return (
        <div className="navbar bg-base-100  border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {navlinks}
                    </ul>
                </div>
                <div>
                <Link href="/" className="text-xl font-bold tracking-wider">কালবেলা</Link>
                </div>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
               <IoMdSearch></IoMdSearch>
            <IoMdNotificationsOutline></IoMdNotificationsOutline>
            </div>
        </div>
    );
}

export default Navber;