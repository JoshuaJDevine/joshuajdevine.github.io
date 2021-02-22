// Example Structure
// <div className="frame">
//     <div className="center">
//
//         <div className="profile">
//             <div className="image">
//                 <div className="circle-1"></div>
//                 <div className="circle-2"></div>
//                 <img src="img/Profile.PNG" width="70" height="70" alt="Jessica Potter">
//             </div>
//
//             <div className="name">Jessica Potter</div>
//             <div className="job">Visual Artist</div>
//
//             <div className="actions">
//                 <button className="btn">Follow</button>
//                 <button className="btn">Message</button>
//             </div>
//         </div>
//
//         <div className="stats">
//             <div className="box">
//                 <span className="value">523</span>
//                 <span className="parameter">Posts</span>
//             </div>
//             <div className="box">
//                 <span className="value">1387</span>
//                 <span className="parameter">Likes</span>
//             </div>
//             <div className="box">
//                 <span className="value">146</span>
//                 <span className="parameter">Follower</span>
//             </div>
//         </div>
//     </div>
// </div>

let openPlayRelic = function (){
    window.open("https://www.playrelic.com/")
}
let openSoundCloud = function (){
    window.open("https://soundcloud.com/divinebladestudios")
}

function createProfileCard(imgPath, imgAltName, personName, personJob, stat1NAME, stat1VAL, stat2NAME, stat2VAL, stat3NAME, stat3VAL){
    //Frame
    let myFrame = document.createElement("div");
    myFrame.className = "frame";

        //Center
        let myCenter = document.createElement("div");
        myCenter.className = "center";
        myFrame.appendChild(myCenter);

            //Profile
            let myProfile = document.createElement("div");
            myProfile.className = "profile";
            myCenter.appendChild(myProfile);

                //Image
                let myProfileIMG = document.createElement("div");
                myProfileIMG.className = "image";
                myProfile.appendChild(myProfileIMG);

                    //Circle 1
                    let myCircle1 = document.createElement("div");
                    myCircle1.className = "circle-1";
                    myProfileIMG.appendChild(myCircle1);

                    //Circle 2
                    let myCircle2 = document.createElement("div");
                    myCircle2.className = "circle-2";
                    myProfileIMG.appendChild(myCircle2);

                    //Profile Image
                    let myPic = document.createElement("img");
                    myPic.src = imgPath.toString();
                    myPic.width = 70;
                    myPic.height = 70;
                    myPic.alt = imgAltName;
                    myProfileIMG.appendChild(myPic);

                //Name text
                let myName = document.createElement("div");
                myName.className = "name";
                myName.innerText = personName;
                myProfile.appendChild(myName);

                //Job text
                let myJob = document.createElement("div");
                myJob.className = "job";
                myJob.innerText = personJob;
                myProfile.appendChild(myJob);

                //Action Buttons
                let myActions = document.createElement("div");
                myActions.className = "actions";
                myProfile.appendChild(myActions);

                    //Button 1
                    let myActionButton1 = document.createElement("button");
                    myActionButton1.className = "btn";
                    myActionButton1.innerText = "Soundcloud";
                    myActionButton1.addEventListener("click", openSoundCloud);
                    myActions.appendChild(myActionButton1);

                    //Button 2
                    let myActionButton2 = document.createElement("button");
                    myActionButton2.className = "btn";
                    myActionButton2.innerText = "Dev Project";
                    myActionButton2.addEventListener("click", openPlayRelic);
                    myActions.appendChild(myActionButton2);

            //Stats
            let myStats = document.createElement("div");
            myStats.className = "stats";
            myCenter.appendChild(myStats);

                //Stats Box 1
                let myStatBox1 = document.createElement("div");
                myStatBox1.className = "box";
                myStats.appendChild(myStatBox1);

                    //Stat Value 1
                    let myStatValue1 = document.createElement("span");
                    myStatValue1.className = "value";
                    myStatValue1.innerText = stat1VAL;
                    myStatBox1.appendChild(myStatValue1);

                    //Stat Name 1
                    let myStatName1 = document.createElement("span");
                    myStatName1.className = "parameter";
                    myStatName1.innerText = stat1NAME;
                    myStatBox1.appendChild(myStatName1);

                //Stats Box 2
                let myStatBox2 = document.createElement("div");
                myStatBox2.className = "box";
                myStats.appendChild(myStatBox2);

                    //Stat Value 2
                    let myStatValue2 = document.createElement("span");
                    myStatValue2.className = "value";
                    myStatValue2.innerText = stat2VAL;
                    myStatBox2.appendChild(myStatValue2);

                    //Stat Name 2
                    let myStatName2 = document.createElement("span");
                    myStatName2.className = "parameter";
                    myStatName2.innerText = stat2NAME;
                    myStatBox2.appendChild(myStatName2);


                //Stats Box 3
                let myStatBox3 = document.createElement("div");
                myStatBox3.className = "box";
                myStats.appendChild(myStatBox3);

                    //Stat Value 3
                    let myStatValue3 = document.createElement("span");
                    myStatValue3.className = "value";
                    myStatValue3.innerText = stat3VAL;
                    myStatBox3.appendChild(myStatValue3);

                    //Stat Name 3
                    let myStatName3 = document.createElement("span");
                    myStatName3.className = "parameter";
                    myStatName3.innerText = stat3NAME;
                    myStatBox3.appendChild(myStatName3);

    //Append Frame
    document.body.appendChild(myFrame);
}

createProfileCard(
    "img/Profile.PNG",
    "Joshua Devine",
    "Joshua Devine",
    "Software Engineer",
    "birth place",
    "NS",
    "skills",
    "Music",
    "age",
    "?"
);

// window.addEventListener('DOMContentLoaded', (event) => {
//     createProfileCard("img/Profile.PNG", "Joshua Devine", "Joshua Devine", "Software Person")
// });