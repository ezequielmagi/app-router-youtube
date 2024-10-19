import Link from 'next/link'

export default function Header (){
    return (
        <div>
            
            <div className="w-screen flex justify-center">
                <Link className="m-2" href="/"> Main page </Link>

            <div className="m-4">
                <Link className="m-2" href="/about"> About Us </Link>
                <Link className="m-2" href="/contact-us"> Contact Us </Link>
                <Link className="m-2" href="/users"> Users </Link>
            </div>

            </div>
        </div>
    )
}