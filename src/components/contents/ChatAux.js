import React from 'react';

class ChatAux extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){

    return (
      <div className="sidebarContainer">
        <div className="right">
            <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
            <div className="chat" >
                <div className="conversation-start">
                    <span>Today, 6:48 AM</span>
                </div>
                <div className="bubble you">
                    Hello,
                </div>
                <div className="bubble you">
                    its me.
                </div>
                <div className="bubble you">
                    I was wondering...
                </div>
            </div>
            <div className="chat">
                <div className="conversation-start">
                    <span>Today, 5:38 PM</span>
                </div>
                <div className="bubble you">
                    Hello, can you hear me?
                </div>
                <div className="bubble you">
                    Im in California dreaming
                </div>
                <div className="bubble me">
                    ... about who we used to be.
                </div>
                <div className="bubble me">
                    Are you serious?
                </div>
                <div className="bubble you">
                    When we were younger and free...
                </div>
                <div className="bubble you">
                    Ive forgotten how it felt before
                </div>
            </div>
            <div className="chat">
                <div className="conversation-start">
                    <span>Today, 3:38 AM</span>
                </div>
                <div className="bubble you">
                    Hey human!
                </div>
                <div className="bubble you">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div className="bubble me">
                    ... what.
                </div>
                <div className="bubble me">
                    Are you serious?
                </div>
                <div className="bubble you">
                    I mean...
                </div>
                <div className="bubble you">
                    It’s not that bad...
                </div>
                <div className="bubble you">
                    But we’re probably gonna need a new carpet.
                </div>
            </div>
            <div className="chat">
                <div className="conversation-start">
                    <span>Yesterday, 4:20 PM</span>
                </div>
                <div className="bubble me">
                    Hey human!
                </div>
                <div className="bubble me">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div className="bubble you">
                    ... what.
                </div>
                <div className="bubble you">
                    Are you serious?
                </div>
                <div className="bubble me">
                    I mean...
                </div>
                <div className="bubble me">
                    It’s not that bad...
                </div>
            </div>
            <div className="chat">
                <div className="conversation-start">
                    <span>Today, 6:28 AM</span>
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup
                </div>
                <div className="bubble you">
                    Wasup for the third time like is <br />you blind bitch
                </div>

            </div>
            <div className="chat">
                <div className="conversation-start">
                    <span>Monday, 1:27 PM</span>
                </div>
                <div className="bubble you">
                    So, hows your new phone?
                </div>
                <div className="bubble you">
                    You finally have a smartphone :D
                </div>
                <div className="bubble me">
                    Drake?
                </div>
                <div className="bubble me">
                    Why arent you answering?
                </div>
                <div className="bubble you">
                    howdoyoudoaspace
                </div>
            </div>
            <div className="write">
                <a href="javascript:;" className="write-link attach"></a>
                <input type="text" />
                <a href="javascript:;" className="write-link smiley"></a>
                <a href="javascript:;" className="write-link send"></a>
            </div>
        </div>
      </div>
    );
  }
}


export default ChatAux;
