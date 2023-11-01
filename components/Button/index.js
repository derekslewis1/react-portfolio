import '../../app/globals.css'

const Button = ({ contents, onClick }) => {
    return (
        <button onClick={onClick} className="py-2 px-4 bg-transparent border border-purple-600 text-white hover:bg-purple-400 rounded-full transform duration-300 hover:scale-105">
            {contents}
        </button>
    )
}

export default Button;

