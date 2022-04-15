import React , {useState} from 'react'
import "./Home.css";
import {v4 as uuidV4} from 'uuid' ;
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate() ;

  const [roomId , setRoomId] = useState('') ;
  const [username , setUsername] = useState('') ;

  const createNewRoom = (e) => {

    e.preventDefault() ;

    const id = uuidV4() ;

    setRoomId(id) ;

    toast.success('New Room Created');

  };

  const JoinRoom = () => {

    if(!roomId || !username ){
      toast.error('Not RoomId or UserName');
      return ;
    }

    // Redirecting ;

    navigate(`/editor/${roomId}`,{
      state:{
        username,
      },
    });

  };

  const handleInputEnter = (e) => {
     
    if(e.code === 'Enter'){

      JoinRoom() ;
    }

  };


  return (
    <div className='HomePageWrapper'>
      <div className='formWrapper'>
          <img src="/logo.png" alt="App logo" />
          <h4 className='mainLabel'>Enter ROOM ID</h4>
          <div className='inputGroup'>
              <input 
                type="text"
                className='inputBox'
                placeholder='ROOM ID'
                onChange={(e)=> setRoomId(e.target.value) }
                value={roomId}
                onKeyUp={handleInputEnter}
             />
             <input
                type="text"
                className='inputBox'
                placeholder='USER NAME'
                onChange={(e)=> setUsername(e.target.value) }
                value={username}
                onKeyUp={handleInputEnter}
             />
             <button className='btn joinBtn' onClick={JoinRoom} >Join</button>
             <span>
                 If you don't have ROOM ID create one&nbsp;
                 <a onClick={createNewRoom} href=" ">
                     Create Room
                 </a>
             </span>
          </div>
      </div>
      <footer className='footer'>
          Created by Abhishek Singh <a href="https://www.linkedin.com/in/abhishek0105/">Linked In</a> | <a href="https://abhi100392portfolio.netlify.app/">Portfolio</a>
      </footer>
    </div>
  )
}

export default Home
