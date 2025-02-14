import React from 'react';
import './Question.css';

export default function Question() {
return (
    <div className="questions"> 
     <div className="question">
    <h1>Am I in danger ?</h1>
    <h4>Yes I will open your camera and see what you’re doing when , so send me my money before I get mad </h4>
     </div>
     <div className="question">
    <h1>How can I hide my Ip Address </h1>
<h4>You can’t . However , you can use a VPN - which most people think will hide your identity- but in fact it will not . </h4>    </div>
     <div className="question">
    <h1>Why do I need to know my Ip address ?</h1>
<h4>You actually don’t . I only made this for fun and to learn react . I just thought why not do something I love while learning something new .</h4>
     </div>

    </div>
);
}