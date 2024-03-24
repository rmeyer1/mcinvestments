import React from 'react';

const Header = () => {
  return (
    <header>
      <div
        className="relative w-full h-[45rem] bg-center bg-black"
        style={{
          backgroundImage: "url('/cmi-removebg.png')",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </header>
  );
};

export default Header;
