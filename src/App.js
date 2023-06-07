import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=" flex justify-center mt-36 items-center m-auto">
     {/* profile card */}
     <div className=" flex justify-center  items-center text-center m-auto ">
      <div className="card bg-[#2b0808] h-max  p-4 pb-2 w-80 text-white  rounded-md shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-center flex justify-center items-center gap-4 flex-col uppercase font-bold text-xl">
            Profile card
            <img src="https://pbs.twimg.com/media/Fxmjj6gWcAEmOaP.jpg" alt="image here" className='bg-gray-200 h-20 w-20 rounded-full ' />
          </h2>
          <h3 className='name my-2 font-semibold '> Sneha Farkya</h3>

          <hr className='opacity-50'/>
          <ul className='mb-1  text-left  '>
            <li className='pb-2 pt-2 px-2 mt-1 text-sm font-medium  hover:bg-gray-100 hover:text-pink-900 '>
              About
            </li>
            <li className='py-2 mt-1 px-2 text-sm font-medium  hover:bg-gray-100 hover:text-pink-900 '>
              Orders
            </li>
            <li className='py-2 mt-1 px-2 text-sm font-medium  hover:bg-gray-100 hover:text-pink-900'>
              Projects
            </li>
            <li className='py-2 mt-1 px-2 text-sm font-medium flex items-center gap-2 hover:bg-gray-100 hover:text-pink-900' id='rate'>
              Your reaction:   
              {/* rating */}
              <ul class="flex justify-center">
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="mr-1 h-5 w-5 text-danger">
      <path
        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  </li>
  <li>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="mr-1 h-5 w-5 text-danger">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  </li>
</ul>        

            </li>
          </ul>
          <hr className='opacity-50'/>
        <div className='m-2 mt-4 text-left flex gap-4'>
          <button className='bg-white text-pink-900 p-2 rounded-sm hover:bg-transparent font-semibold  border-1 border-white border hover:text-white'>View More</button>
          <button className='bg-transparent border-1 border-white border text-white p-2 font-semibold  rounded-sm hover:bg-white hover:text-pink-900'>Sign Out</button>
        </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
