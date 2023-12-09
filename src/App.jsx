import { useEffect, useState } from "react";

function App() {
  const [currentHour, setCurrentHours] = useState("");
  const [currentMin, setCurrentMin] = useState("");
  const [currentSec, setCurrentSec] = useState("");
  const [twelveHrFormat,setTwelveHrFormat]=useState(true);
  const [isDarkMode,setIsDarkMode]=useState(true);
  const[meridian,setMeridian]=useState("");
  console.log(currentHour,currentMin);
  useEffect(()=>{
      const intervalId=setInterval(()=>{
        const currentTime=formatTime(new Date(),twelveHrFormat);
        const time=currentTime.split(":");
        setCurrentHours(time[0]);
        setCurrentMin(time[1]);
        setCurrentSec(time[2].slice(0,2));
        setMeridian(time[2].slice(2));
      },1000);
      return ()=>clearInterval(intervalId);
  },[twelveHrFormat]);

  const formatTime=(date,twelveHrFormat)=>{
    const options={
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: twelveHrFormat,
    };
    return date.toLocaleTimeString(undefined, options);
  }
  function handleTime (){
    setTwelveHrFormat(!twelveHrFormat);
  }
  function handleFullScreen(){
    const element = document.documentElement;
    if (document.fullscreenElement){
      document.exitFullscreen();
      } 
    else {
      element.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable full-screen mode:', err);
      });
    }
  }
  const handleMode = () =>{
    console.log("clicked");
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  }
  
  return (
    <>
      <div className="app min-h-screen  bg-[#f5f5f5ff] dark:bg-black  flex flex-col items-center justify-center relative">
      <div className="flex flex-grow items-center justify-center gap-4 mt-10">
      <div className="text-black dark:text-white flex bg-white  dark:bg-charcoal h-75 w-75 text-9xl p-12 font-bold items-center justify-center rounded-2xl relative">
          <span className="top-0 left-0 absolute text-base p-4 text-gray-500 dark:text-white">
            {twelveHrFormat&&meridian}
          </span>
          <span className="relative">{currentHour}</span>
          
        </div>
        <div className="text-black dark:text-white flex bg-white  dark:bg-charcoal h-75 w-75 text-9xl p-12 font-bold items-center justify-center rounded-2xl">
        <span>{currentMin}</span>
        </div>
        <div className="text-black dark:text-white flex bg-white  dark:bg-charcoal h-75 w-75 text-9xl p-12 font-bold items-center justify-center rounded-2xl">
        <span>{currentSec}</span>
        </div>
        </div>
        <div className="ml-auto bottom-0 p-6 opacity-0 hover:opacity-100 transition-all duration-700 ease-in-out  ">
        <div className="flex gap-6 items-center font-bold">
        <div className=" text-black dark:text-white text-2xl cursor-pointer" onClick={handleTime}>
          <span>{twelveHrFormat?"24h":"12h"}</span>
        </div>
        <div className="text-black dark:text-white text-1xl cursor-pointer" onClick={handleMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>
        <div className="text-black dark:text-white text-1xl cursor-pointer" onClick={handleFullScreen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
          </svg>
        </div>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
