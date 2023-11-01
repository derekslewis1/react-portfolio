import '../../app/globals.css'

const Navbar = () => {


    return (

      <div className="flex items-center justify-center w-full h-24 mb-4 bg-gradient-to-r from-purple-900 to-purple-400 border-purple-600 shadow-lg relative">

            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 duration-300 hover:scale-105">
                <a className="flex gap-x-2 items-center hover:bg-purple-400 p-2 rounded-full" href="https://github.com/derekslewis1">
                    <img className="h-12 w-12" src='/github.png' alt="Github Logo" />
                    <span className="self-center text-lg text-white">Github</span>
                </a>
            </div>

            <div className="flex flex-col text-white z-10">
                <span className="text-2xl font-semibold text-shadow-md">Derek Lewis</span>
                <span className="text-lg mt-1">Web Developer & JS Enthusiast</span>
            </div>
            
            <div className="absolute left-44 top-1/2 transform -translate-y-1/2 duration-300 hover:scale-105">
                <a className="flex gap-x-2 items-center hover:bg-purple-400 p-2 rounded-full" href="https://www.linkedin.com/in/derek-lewis-425586294/">
                    <img className="h-12 w-12" src='/linkedin.webp' alt="LinkedIn Logo" />
                    <span className="self-center text-lg text-white">LinkedIn</span>
                </a>
            </div>

            
<div className="absolute right-4 top-1/2 transform -translate-y-1/2 group">
   
<div className="absolute border-2 border-purple-600 bg-white text-black text-sm px-3 py-1 rounded-md shadow-lg right-20 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 max-w-sm">
    Hey!
</div>
    <img 
        className="h-16 w-16 rounded-full border-2 border-purple-600 shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300" 
        src='/avi.png' 
        alt="Derek's Avatar" 
    />
</div>

        </div>    )

}


export default Navbar;
