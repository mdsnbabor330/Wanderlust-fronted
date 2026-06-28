import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/Wanderlast.png'
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='fixed right-0 left-0 top-1'>
            <div className='flex items-center justify-between p-3 my-1 mx-2 bg-white/90 shadow rounded-md'>
                <ul className='flex items-center gap-5 text-black'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/destinations'}>Destinations</Link>
                    </li>
                    <li>
                        <Link href={'/my-bookings'}>My Bookings</Link>
                    </li>
                    <li>
                        <Link href={'/add-destination'}>Add Destination</Link>
                    </li>
                </ul>

                <div>
                    <Image
                    src={Logo}
                    height={100}
                    width={150}
                    alt='wanderlust-logo'
                    ></Image>

                </div>
                <ul className='flex gap-6 items-center text-black' >
                    <li>
                        <Link href={'/profile'} className='flex gap-1 items-baseline'>
                         <AiOutlineUser />Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={'/login'}>Log In</Link>
                    </li>
                    <li>
                        <Link href={'/signup'}>Sign Up</Link>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;