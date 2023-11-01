import Preview from '@/components/Preview'

const Gallery = () => {

	return (
	<div className="w-full bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-3xl mb-6 font-semibold text-shadow-md text-center text-white">Projects</h2>
            <div className="flex flex-wrap gap-4 justify-center items-center">
                <Preview title="/nitrobit.png" link="https://nitrobit.tech/" description='NitroBit' />
                <Preview title="/keybored.png" link="https://github.com/derekslewis1" description='KeyBored' />
                <Preview title="/innercircle.png" link="https://github.com/dyldlewis/inner-circle.git" description='InnerCircle' />
                <Preview title="/iblog.png" link="https://github.com/derekslewis1" description='iBlog' />
            </div>
        </div>

	)

}


export default Gallery;
