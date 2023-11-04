import { useState , useEffect } from "react";
import { ShoppingCart, HeartStraight, UserCircle , List} from "phosphor-react";
import { useSelector } from 'react-redux';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showOptions, setShowOptions] = useState(false);
  const totalCount = useSelector((state) => state.counter.totalCount);
  


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleListClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <>
     {isMobile ? (
        <div className="flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-3  md:p-5 shadow-md w-screen">
          <div className=" flex flex-wrap  mb-1 w-screen">
          <h1 className=" font-serif font-bold text-2xl cursor-pointer w-1/5 ml-3">SF</h1>
            <div className="flex justify-between w-3/5 ">
          <input
            className="block bg-white w-full border border-slate-300 rounded-md py-1  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-72 md:w-1/2 "
            type="text"
            placeholder="  Search for product"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M21.707 20.293l-5.545-5.545C16.472 13.43 17 11.786 17 10c0-4.411-3.589-8-8-8S1 5.589 1 10s3.589 8 8 8c1.786 0 3.43-.528 4.748-1.838l5.545 5.545 1.414-1.414zM3 10c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left 0.5rem top 50%',
              paddingLeft: '2.5rem',
            }}
          />
          <div className="relative ml-10">
              <List
                size={32}
                className="cursor-pointer"
                onClick={handleListClick}
              />
              {showOptions && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-300 w-48 rounded-md shadow-lg z-10">
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex ">
                  <UserCircle size={32} /> <span>Your Profile </span>
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex">
                    <HeartStraight size={32} /> <span>Your List </span>
                  </li>
                  <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex">
                     <ShoppingCart size={32} /> <span>Your Cart</span> <span>{totalCount}</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
          </div>
          <ul className="flex flex-1 w-full justify-center">
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">ELECTRONICS</li>
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">WOMEN</li>
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">MEN</li>
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">JEWELLERY</li>
          </ul>
        </div>
        ) : (
    
      <div className="flex bg-gradient-to-r from-gray-800 to-gray-900 text-white p-5 shadow-md w-screen">
        
        <h1 className="flex-none font-serif font-bold text-2xl cursor-pointer">SF</h1>
        <ul className="flex flex-1 w-full justify-center">
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">ELECTRONICS</li>
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">WOMEN</li>
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">MEN</li>
            <li className="mr-5 cursor-pointer hover:underline underline-offset-8">JEWELLERY</li>
          </ul>

        <div className="flex flex-1 w-64 justify-between">
          <input
            className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:w-1/2"
            type="text"
            placeholder="  Search for product"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="gray" width="24" height="24" viewBox="0 0 24 24"><path d="M21.707 20.293l-5.545-5.545C16.472 13.43 17 11.786 17 10c0-4.411-3.589-8-8-8S1 5.589 1 10s3.589 8 8 8c1.786 0 3.43-.528 4.748-1.838l5.545 5.545 1.414-1.414zM3 10c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left 0.5rem top 50%',
              paddingLeft: '2.5rem',
            }}
          />
            <ul className="flex">
              <li className="mr-6 cursor-pointer">
                <UserCircle size={32} />
              </li>
              <li className="mr-6 cursor-pointer">
                <HeartStraight size={32} />
              </li>
              <li className="mr-6 cursor-pointer flex ">
                <ShoppingCart size={32} /> <span >{totalCount}</span>
              </li>
            </ul>
         
        </div>
      </div>
        )}
    </>
  );
}

export default Header;
