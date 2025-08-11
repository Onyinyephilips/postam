
const SecBtn = ({iconURL, label}) => {
  return (
    <button
        className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-coral-red rounded-full border-coral-red text-white mt-5 transform transition-transform duration-300 hover:scale-105
        ">
            <img 
            src={iconURL}
            alt="playIcon"
            className=" w-5 h-5"
        />
        {label}

        

        

    </button>
  )
}

export default SecBtn

