import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='fixed flex justify-between content-center items-center w-full px-24 py-5'>
            <div >
                <h1 className='text-white text-2xl font-black tracking-widest'>PORTFOLIO</h1>
            </div>
            <div className='text-white text-base tracking-wide'>
                <Link href='#' className="px-5 py-2">HOME</Link>
                <Link href='#' className="px-5 py-2">ABOUT</Link>
                <Link href='#'className="px-5 py-2">SERVICES</Link>
                <Link href='#'className="px-5 py-2">WORK</Link>
                <Link href='#'className="px-5 py-2">CONTACT</Link>
            </div>
        </nav>
    )
}

