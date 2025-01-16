// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className='flex justify-end mx-6 my-5 font-bold text-[1.2rem] ' style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <Link href="/home">Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
