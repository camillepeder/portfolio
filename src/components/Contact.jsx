import CopyIcon from '../assets/copy-icon.svg'
import SendIcon from '../assets/send-icon.svg'

export default function Contact() {
  return (
    <div className='flex flex-col p-5 gap-1'>
    <h1>Contact:</h1>
    <div className='flex flex-row gap-5 justify-center align-center'>
      <input type="text" value="gonzalopeder2@gmail.com" className="input input-bordered w-full max-w-xs h-16 text-xl" readOnly/>
      <button className="btn btn-lg">
        <img src={CopyIcon} alt="copy icon" className='w-8 h-8'/>
      </button>
      <button className="btn btn-lg">
        <img src={SendIcon} alt="copy icon" className='w-8 h-8'/>
      </button>
    </div>
  </div>
  )
}
