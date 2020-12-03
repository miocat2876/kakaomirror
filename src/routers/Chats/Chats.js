import React, { useState , useEffect } from 'react';
import './Chats.css';
import MakeChat from '../MakeChat/MakeChat';


const Chats = ({ history }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const enterChat = () => {
        history.push('/chat/default');
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    
    const [lists, setList] = useState([{
        image : 'aa.jpg',
        title : "1번",
        chatNo : "1"
    },{
    
        image : 'bb.jpg',
        title : "2번",
        chatNo : "2"
    },{
    
        image : 'cc.jpg',
        title : "3번",
        chatNo : "3"
    }]);

    const chatList = lists.map((list, index) =>
            <div className="chatBoxInner" key={index}>
                <div className="leftSection">
                    <div className="img" ></div>
                    <div className="title">{list.title}</div>
                </div>
                <div className="rightSection">
                    <button className="enterBtn" type="submit" onClick={enterChat}>입장하기</button>
                </div>
            </div>
    );

    console.log(chatList);

    useEffect(() => {
       console.log(lists.length);
    }, []);

    return (
        <div className="chats">
            <div className="header">
                <div id="title">채팅</div>
                <div id='icons'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>
            </div>
            <div className="chatBoxList">
                {chatList}
            </div>
            <div className="footer">
                <div className="friends"></div>
                <div className="chatList"></div>
                <div className="etc"></div>
                <div className="makeChat" onClick={openModal}></div>
                <MakeChat isOpen={isModalOpen} close={closeModal} history={history}/>
            </div>
        </div>
    );
}

export default Chats;