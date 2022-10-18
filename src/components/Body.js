
import { BsCartPlus } from "react-icons/bs";

export default function Body() {
  return (
    <div className="container mx-auto px-2 pt-12 shrink-0">
      <h1 className="text-3xl mb-4 text-center font-bold md:text-left md:italic underline">
        Hello world!
      </h1>

      <div className="text-center my-4 ">
        {/* 1 */}
        <button className="md:block bg-gray-300  text-center font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 focus:ring focus:ring-gray-400  ">Default</button>
       
      </div>  
      <div className="text-center my-4">
        {/*2*/}
        <button className="md:block bg-white text-center text-blue-600 border border-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 focus:ring focus:ring-blue-600  ">Default</button>
       
      </div>  
      <div className="text-center my-4 ">
        {/* 3 */}
        <button className="md:block bg-white text-center text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 focus:bg-blue-600 focus:text-white ">Default</button>
       
      </div>  
      <div className="text-center my-4">
        {/* 4 */} 
        <button className="md:block bg-blue-700 text-center text-white font-semibold py-2 px-4 rounded-lg shadow-none  focus:ring focus:ring-blue-600  ">Default</button>
        
      </div>  
      <div className=" text-center my-4 ">
        {/* 5*/}
        <button className="md:block bg-gray-300 text-center text-gray-400 font-semibold py-2 px-4 rounded-lg ">Default</button>
      </div>  
      <div className="justify-center flex my-4 lg:space-x-56 md:space-x-40 space-x-5  md:justify-start ">
        {/* 6*/}
        <button className="bg-blue-600 text-center flex text-white font-semibold py-2 px-4 rounded-lg "><BsCartPlus className="shrink-0 h-5 w-5 mr-2"/> Default</button>

        <button className="bg-blue-600 text-center flex text-white font-semibold py-2 px-4 rounded-lg "> Default <BsCartPlus className="shrink-0 h-5 w-5 ml-2"/></button>
      </div>  
      <div className="justify-center text-center lg:text-left my-4 lg:space-x-40 md:space-x-32 space-x-5 space-y-3 lg:flex-1 md:justify-start ">
        {/* 7*/}
        <button className="bg-blue-600 text-center text-white font-semibold py-1 px-2 rounded ">Default</button>

        <button className="bg-blue-600 text-center text-white font-semibold py-2 px-4 rounded-lg ">Default</button>

        <button className="bg-blue-600 text-center text-white font-semibold py-3 px-5 rounded-lg ">Default</button>
      </div>  
      <div className="justify-center text-center lg:text-left my-4 lg:space-x-36 md:space-x-28 space-x-5 space-y-3  md:justify-start ">
        {/* 8*/}
        <button className="bg-gray-200 text-center text-gray-700 font-semibold py-2 px-4 rounded-lg ">Default</button>

        <button className="bg-blue-600 text-center text-white font-semibold py-2 px-4 rounded-lg ">Default</button>

        <button className="bg-gray-600 text-center text-white font-semibold py-2 px-4 rounded-lg ">Secondary</button>

        <button className="bg-red-600  text-center text-white font-semibold py-2 px-4 rounded-lg ">Danger</button>
      </div>  
      <div className="justify-center text-center my-4 lg:space-x-36 md:space-x-28 space-x-5 space-y-3 md:justify-start lg:text-left">
        {/* 9*/}
        <button className="bg-gray-400 text-center text-gray-700 font-semibold py-2 px-4 rounded-lg ">Default</button>

        <button className="bg-blue-700  text-center text-white font-semibold py-2 px-4 rounded-lg ">Default</button>

        <button className="bg-gray-800  text-center text-white font-semibold py-2 px-4 rounded-lg ">Secondary</button>

        <button className="bg-red-800  text-center text-white font-semibold py-2 px-4 rounded-lg ">Danger</button>
      </div>  
      <br />
      <h3 className="text-gray-400 text-center md:text-left text-sm">created by <strong classame="font-bold">Oluwabori</strong>- devChallenges.io</h3>
      
    </div>
    
  );
  
}