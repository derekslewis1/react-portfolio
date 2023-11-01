import Preview from "../Preview";


const About = () => {
  return (
    <div className="min-h-screen flex justify-center  items-center">
      <div className='flex flex-col min-h-screen m-4 items-center w-3/5 bg-gray-600 bg-opacity-20 rounded-lg p-10'>
        <div className='mb-4'>
          <span className="text-3xl font-bold">Education & Experience</span>
        </div>
        <div className="flex justify-around mt-6">

 <Preview title='/clark.png' link='https://clark.edu' description='Clark College'/> 
          <span className="text-lg w-3/5 self-center">I am currently studying at Clark College to get my computer science degree. I might transfer to double major in computer engineering, but I am not quite sure yet. </span>
       
       </div>
        <div className="flex justify-around mt-6">

<span className="text-lg w-3/5 self-center">I have experience working primarily with React, but I have dabbled around in a plethora of languages. </span>

          <Preview title='/react.png' link='https://react.dev' description="React Docs"/>
          
        </div>
      </div>
    </div>
  );
};

export default About;
