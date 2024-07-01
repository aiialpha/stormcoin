//import {  useRef } from 'react';
//import useCountContext from '../UseContext';
import { IoCopyOutline } from "react-icons/io5";
import {toast} from "react-toastify"

export default function RefPages() {

  const tg_id= 222222
//const inputRef = useRef<HTMLInputElement>(null);

    const copyText = () => {
            // Copy the text inside the text field
            navigator.clipboard.writeText(`https://t.me/Stormycoin_bot?start${tg_id}`)
                .then(() => {
                    toast('Link Copied',{
                      autoClose: 1000,
                      position: "top-right",
                      closeOnClick: true
                    });
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
    };
  return ( 
    <>
    <h2>
      0 Referal
    </h2>
    <div className="ref-link">
    {/* <div>
            <input type="text" ref={inputRef} defaultValue={`https://t.me/Stormycoin_bot?start${tg_id}`}  onClick={copyText}/>
            <button onClick={copyText}>Copy Text</button>
        </div> */}
        <div className="invite-btn">
          <button
          className='btn-70'> 
          <a href="https://t.me/share/url?text=%F0%9F%8E%81%20%2B100k%20Stormcoins%20as%20a%20first-time%20gift%0A%F0%9F%8E%81%20%F0%9F%8E%81%20%F0%9F%8E%81%20%2B500k%20Stormcoins%20if%20you%20have%20Telegram%20Premium&url=https://t.me/stormycoin_bot?start=${chatId}">
           Invite
          </a>
           
          </button>
          <button
          className='btn-20'
          onClick={copyText}
          >
          <IoCopyOutline />
          </button>
        </div>
    
    </div>
    </>
    
  )
}
