import '../../app/globals.css'


const Preview = ({title, link, description}) => {
	return (
	<div className="flex flex-col items-center w-2/5 text-center transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
            <a href={link}>
                <img 
                    className="border-2 border-transparent hover:border-purple-600 transition-all duration-300 my-2 h-44 rounded-lg cursor-pointer"
                    src={title} 
                    title={`${description} preview`}
                />
            </a>
            <p className="text-gray-300 mt-2">{description}</p>
        </div>	);		
}

export default Preview;
