import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-black py-4 mt-16">
    <div className='container px-5 mx-auto'>
        <p className='text-white text-base font-normal text-center'>
            &copy; {new Date().getFullYear()} <span className='text-green-400 font-semibold'>EBS</span> Frontend test
        </p>
    </div>
  </footer>
);

export default Footer;
