'use client'
import About from "@/components/About"
import Button from "@/components/Button"
import Gallery from "@/components/Gallery"
import Navbar from "@/components/navbar"
import {useState} from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {

const [toggle, setToggle] = useState(false);

  const onClick = () => {
      setToggle(!toggle)
  };

  return (
    <>

      <div className="flex flex-col bg-gray-900 min-h-screen text-white font-mono overflow-hidden">
        <Navbar />

        <div className="container mx-auto px-6 py-20">
          <div className="flex justify-center items-start gap-6 md:gap-12 lg:gap-24">
            <div className="flex-1 flex flex-col gap-y-8 bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-semibold text-shadow-md">Welcome!</h1>
              <p className="text-xl leading-relaxed text-gray-300">My name is Derek, I am a web developer specializing in javascript, specifically <span className="text-blue-500 font-semibold">React</span>. I have experience using tools like <span className="text-green-500 font-semibold">MongoDB</span> and <span className="text-yellow-500 font-semibold">AWS</span>.</p>
              <p className="text-xl leading-relaxed text-gray-300">Take a look around at my projects and feel free to contact me with any questions below, whether they be business related, or just out of curiosity!</p>

              {toggle && 
               (
                  <>
              <p className="text-xl leading-relaxed text-gray-300">To include a little more about me, I am 21 years old and from Vancouver, Washington, which when you are from here, you just say you are from Portland. </p>
                  <p className="text-xl leading-relaxed text-gray-300">Being from the PNW is a blessing when it comes to the outdoors, which has lead me to really enjoy things like hiking and snowboarding, or anything that gets me outside. </p>
              </>
              )}
              <div className="flex flex-col gap-y-4 mt-4">
                <Button contents={toggle ? 'Read Less...' : 'Read More...'} onClick={onClick} />
                <Button contents='Contact' />
              </div>
            </div>

            <div className="flex-1">
              <Gallery />
            </div>
          </div>
        </div>

        <About />
      </div>    
    </>
  )
}
