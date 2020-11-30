import React, {useState , useEffect } from 'react';
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
        subejct : "1번",
        chat : "1번"
    },{
    
        image : 'bb.jpg',
        subejct : "2번",
        chat : "2번"
    },{
    
        image : 'cc.jpg',
        subejct : "3번",
        chat : "3번"
    }]);

    const chatList = lists.map( (lista,index) =>
            <div className="chatBoxInner" key = {index}>
                <div className="leftSection">
                    <div className="img" >{lista.image}</div>
                    <div className="userName">{lista.subject}</div>
                </div>
                <div className="rightSection">
                    <button className="enterBtn" type="submit" onClick={enterChat}>Enter</button>
                </div>
            </div>
    );

    console.log(chatList);

    useEffect(() => {

       console.log(lists.length);
		
    }, []);



    return (
        <div className="chats">
            <div className="header"></div>
            <div className="chatBoxList">
                <div className="chatBox">
                {chatList}
                </div>
            </div>
            <div className="footer">
                <div className="findChat">find</div>
                <div className="makeChat" onClick={openModal}>openModal</div>
                <MakeChat isOpen={isModalOpen} close={closeModal} history={history}/>
                
                {/* {
                    isModalOpen && <MakeChat 
                        visible={isModalOpen}
                        />
                } */}
            </div>
        </div>
    );
}

export default Chats;