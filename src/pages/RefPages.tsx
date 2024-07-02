//import {  useRef } from 'react';
//import useCountContext from '../UseContext';
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import {toast} from "react-toastify"

export default function RefPages() {
//const inputRef = useRef<HTMLInputElement>(null);
  const tg_id= 222222
  const [referals] = useState(
    {
      ref_count:10,
      users:[
        {
          id:11111,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11112,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11113,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11114,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11115,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11116,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11117,
          firstname:'',
          is_premiun:true,

         },
         {
          id:11118,
          firstname:'',
          is_premiun:false,

         },
         {
          id:11119,
          firstname:'',
          is_premiun:false,

         },
         {
          id:111110,
          firstname:'',
          is_premiun:false,

         },
      ]
    }
  )
    const copyText = () => {
            // Copy the text inside the text field
            navigator.clipboard.writeText(`https://t.me/Stormycoin_bot?start${tg_id}`)
                .then(() => {
                    toast('Link Copied',{
                      autoClose: 200,
                      position: "top-right",
                      closeOnClick: true
                    });
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
    };
    const handleInviteClick = () => {
      //tg://msg_url?text
    const shareUrl = `https://t.me/share/url?text=%F0%9F%8E%81%20%2B100k%20Stormcoins%20as%20a%20first-time%20gift%0A%F0%9F%8E%81%20%F0%9F%8E%81%20%F0%9F%8E%81%20%2B500k%20Stormcoins%20if%20you%20have%20Telegram%20Premium&url=https://t.me/stormycoin_bot?start=${tg_id}`;
    window.location.href = shareUrl;
  };
  return ( 
    <>
    <h2>
      {referals?.ref_count} Referal
    </h2>
    <div className="ref-link">
    {/* <div>
            <input type="text" ref={inputRef} defaultValue={`https://t.me/Stormycoin_bot?start${tg_id}`}  onClick={copyText}/>
            <button onClick={copyText}>Copy Text</button>
        </div> */}
        <div className="invite-btn">
          <button
          onClick={handleInviteClick}
          className='btn-70'> 
           Invite
          </button>
          <button
          className='btn-20'
          onClick={copyText}
          >
          <IoCopyOutline />
          </button>
        </div>
      <div className="user-list">
        <h3 className="text-left">friends</h3>
        {referals.users.map((user) =>(
          <li key={user?.id} className="user-list-item">
            <div className="user-list-inner" >
          <div className="user-image"></div>
            <div className="user-name">{user.firstname ? user.firstname:'john doe'}</div>
            <div className="reward">
              {user.is_premiun ? 3000 : 1500}
            </div>
            </div>
           
          </li>
        ))}
      </div>
    </div>
    </>
    
  )
}
