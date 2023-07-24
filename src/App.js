import './App.css';
import cex from './images/cex.png';
import hexalogo from './images/hexa.png';
import reddit from './images/reddit.png';
import hasty from './images/hasty.png';
import imgcon from './images/imgcon.png';
import gwn from './images/gwn.png';
import drp from './images/dr.p.png';
import istat from './images/istat.png';
import portfolio from './images/portfolio.png';
import resume from './resume.pdf';
import pp from './images/profilepic.png';
import nine11 from './images/911.png';
import p1i1 from './images/p1ss1.png'
import p1i2 from './images/p1ss2.png'
import p1i3 from './images/p1ss3.png'
import p1i4 from './images/p1ss4.png'
import p2i1 from './images/p2ss1.png'
import p2i2 from './images/p2ss2.png'
import p3i1 from './images/p3ss1.png'
import p3i2 from './images/p3ss2.png'
import p3i3 from './images/p3ss3.png'
import p3i4 from './images/p3ss4.png'
import p3i5 from './images/p3ss5.png'
import p6i1 from './images/p6ss1.png'
import p6i2 from './images/p6ss2.png'
import p6i3 from './images/p6ss3.png'
import p6i4 from './images/p6ss4.png'
import p8i1 from './images/p8ss1.png'
import p8i2 from './images/p8ss2.png'
import p8i3 from './images/p8ss3.png'
import p9i1 from './images/p9ss1.png'
import p9i2 from './images/p9ss2.png'
import p9i3 from './images/p9ss3.png'
import p10i1 from './images/p10ss1.png'
import p10i2 from './images/p10ss2.png'
import p10i3 from './images/p10ss3.png'
import p11i1 from './images/p11ss1.png'
import p12i1 from './images/p12ss1.png'
import p12i2 from './images/p12ss2.png'
import p12i3 from './images/p12ss3.png'
import p12i4 from './images/p12ss4.png'
import p12i5 from './images/p12ss5.png'
import p13i1 from './images/p13ss1.png'
import p13i2 from './images/p13ss2.png'
import p13i3 from './images/p13ss3.png'
import p14i1 from './images/p14ss1.png'
import p14i2 from './images/p14ss2.png'
import nine1 from './images/nine1.png'
import nine2 from './images/nine2.png'
import fguss from './images/f-guss.png'
import secret1000 from './images/secrete-1000.png'
import noteit from './images/noteit.png'
import vhken from './images/vhken.png'
import 'animate.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "animate.css/animate.min.css";
import { useState, useEffect } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './config';
import { set, ref} from 'firebase/database';

function App() {

  
  useEffect(()=>{
    AOS.init({duration: 2000 });
    var nodes  = document.querySelectorAll('li'),
_nodes = [].slice.call(nodes, 0);
var getDirection = function (ev, obj) {
var w = obj.offsetWidth,
    h = obj.offsetHeight,
    x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
    y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
    d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
return d;
};
var addClass = function ( ev, obj, state ) {
var direction = getDirection( ev, obj ),
    class_suffix = "";
    obj.className = "";
switch ( direction ) {
    case 0 : class_suffix = '-top';    break;
    case 1 : class_suffix = '-right';  break;
    case 2 : class_suffix = '-bottom'; break;
    case 3 : class_suffix = '-left';   break;
}
obj.classList.add( state + class_suffix );
};
// bind events
_nodes.forEach(function (el) {
el.addEventListener('mouseover', function (ev) {
    addClass( ev, this, 'in' );
}, false);
el.addEventListener('mouseout', function (ev) {
    addClass( ev, this, 'out' ); 
}, false);
});
const aboutheight = ()=>{
  if(document.getElementById("disp").offsetHeight>window.screen.availHeight){
    setabouth(document.getElementById("disp").offsetHeight)
  }
}
aboutheight()
  },[])
  // const [test, settest] = useState(false)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  const [one, setone] = useState(false)
  const [two, settwo] = useState(false)
  const [three, setthree] = useState(false)
  const [four, setfour] = useState(false)
  const [five, setfive] = useState(false)
  const [six, setsix] = useState(false)
  const [seven, setseven] = useState(false)
  const [eight, seteight] = useState(false)
  const [nine, setnine] = useState(false)
  const [ten, setten] = useState(false)
  const [eleven, seteleven] = useState(false)
  const [twelve, settwelve] = useState(false)
  const [thirteen, setthirteen] = useState(false)
  const [fourteen, setfourteen] = useState(false)
  const [popupdisplay1, setpopdisplay1] = useState(false)
  const db_fun=()=>{
    console.log("worksssss");
    const timestamp = Date.now();
    const datee = new Date();
    if(name!="" && email!="" && message!=""){
    set(ref(db, "portfolio_contact/"+timestamp),{
      name:name,
      email:email,
      message:message,
      time_and_date:datee.getDate()+"-"+datee.getMonth()+"-"+datee.getFullYear()+"/"+datee.getHours()+":"+datee.getMinutes()
    })}
    setemail("");
    setname("");
    setmessage("");
  }
  // console.log(testsamp, aa);
  // const testfun=()=>{
  //   settest(!test)
  // }
  const fun1 = ()=>{
    setone(!one);
    if(one == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setseven(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun2 = ()=>{
    settwo(!two);
    if(two == true)
    {
      setone(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setseven(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun3 = ()=>{
    setthree(!three);
    if(three == true)
    {
      settwo(false);
      setone(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setseven(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun4 = ()=>{
    setfour(!four);
    if(four == true)
    {
      settwo(false);
      setthree(false);
      setone(false);
      setfive(false);
      setsix(false);
      setseven(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun5 = ()=>{
    setfive(!five);
    if(five == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setone(false);
      setsix(false);
      setseven(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun6 = ()=>{
    setsix(!six);
    if(six == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setone(false);
      setseven(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun7 = ()=>{
    setseven(!seven);
    if(seven == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun8 = ()=>{
    seteight(!eight);
    if(eight == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      setseven(false);
      setnine(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun9 = ()=>{
    setnine(!nine);
    if(nine == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setseven(false);
      setten(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun10 = ()=>{
    setten(!ten);
    if(ten == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setnine(false);
      setseven(false);
      seteleven(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun11 = ()=>{
    seteleven(!eleven);
    if(eleven == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setnine(false);
      setseven(false);
      setten(false);
      settwelve(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun12 = ()=>{
    settwelve(!twelve);
    if(twelve == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setnine(false);
      setseven(false);
      setten(false);
      seteleven(false);
      setthirteen(false);
      setfourteen(false);
    }
  }
  const fun13 = ()=>{
    setthirteen(!thirteen);
    if(thirteen == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setnine(false);
      setseven(false);
      setten(false);
      settwelve(false);
      seteleven(false);
      setfourteen(false);
    }
  }
  const fun14 = ()=>{
    setfourteen(!fourteen);
    if(fourteen == true)
    {
      settwo(false);
      setthree(false);
      setfour(false);
      setfive(false);
      setsix(false);
      setone(false);
      seteight(false);
      setnine(false);
      setseven(false);
      setten(false);
      settwelve(false);
      setthirteen(false);
      seteleven(false);
    }
  }





// - Noel Delgado | @pixelia_me













const aa = window.screen.availWidth;
const bb = window.screen.availHeight;
const [abouth,setabouth] = useState(bb);

// console.log(document.getElementById("disp").offsetHeight);
// console.log(bb);
console.log(abouth);
  return (
    <div>
      {/* <div>{aa}</div>
      <div>{bb}</div> */}
      <div>

    {/*     page one    */}
    <div class='new' id='page'>
    <div class="headertags">
      <a id='headd' href='#page' onClick={()=>{document.getElementById("dropmenushit").style.display="none"}}>logesh</a>
      <a id="header1" href='#abou'>About</a>
      <a id="header1" href="#pro">Project</a>
      <a id="header1" href='#cont'>Contact</a>
      <div class="dropicon"><i class="fa fa-bars" aria-hidden="true" onClick={()=>{
    if(document.getElementById("dropmenushit").style.display=="none"){
    document.getElementById("dropmenushit").style.display="block"}
    else{ document.getElementById("dropmenushit").style.display="none"}
    }}></i></div>
    </div>
  <div id="dropmenushit" style={{position:"fixed",display:"none",width:"100vw",backgroundColor:"white",fontSize:"50px",paddingTop:"100px", textAlign:"center",zIndex:"9"}}>
      <a id="" href='#abou' style={{color:"#C79552"}}><div onClick={()=>{document.getElementById("dropmenushit").style.display="none"}}>About</div></a>
      <a id="" href="#pro" style={{color:"#C79552"}}><div onClick={()=>{document.getElementById("dropmenushit").style.display="none"}}>Project</div></a>
      <a id="" href='#cont' style={{color:"#C79552"}}><div onClick={()=>{document.getElementById("dropmenushit").style.display="none"}}>Contact</div></a>
  </div>


      {/* <div style={{display:"none"}}><i class="fa fa-bars" aria-hidden="true"></i></div> */}
    
    <div class='header2'>
          <h1 id='fname' className='animation' data-aos='fade-in'>Hi i'm Logeshwaran Elumalai</h1>
          <h1 id='dname' className='animation' data-aos='fade-up'>Just a normal computer science student who likes to code for fun.</h1>
    </div>
    </div>
    
  








    {/*     page two    */}   
    <div class='new1' id='abou' style={{height:{abouth}}}>
      <div id='about-header' className='animation' data-aos='zoom-in'>About me</div>
      <div id="image-flex">
        <div style={{padding:"50px"}}>
          <img src={pp} style={{borderRadius:"50%", width:"300px"}}></img>
        </div>
        <div style={{padding:"100px"}} id="disp">
          <div>hi there, my name is Logeshwaran Elumalai<br></br>you can just call me logesh</div>
          <div>so I'm pre-final year college student in Rajalakshmi Engineergin college in Chennai and i'll graduate by may 2025</div>
          <div>I'm mostly interested in game development and I also do web development and app development</div>
          <div>i have made few personal, school and college projects, check them in <a href="#pro">ProjectSection</a></div>
          {/* <div>here<br></br>download my resume</div>
          <div>**photo on the right or left depends on where the text is**</div> */}
          <div><a href={resume} download>download my resume</a></div>
          {/* <a href={resume} download>Click to download</a> */}

        </div>
        {/* <div style={{zIndex:"100"}}>{document.getElementById("disp").offsetHeight}</div> */}
      </div>
    </div>


    {/*     page three   */}   
    <div class='new2' id='pro'>

      <h1 id='projectheader' className='animation' data-aos='zoom-in'>Projects</h1>

      {/*  box project */}
      <div class='projectsection'>
        {/* popup-one */}
        <div id='popup1' style={{display: one ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun1}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/my_portfolio" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div>
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div><img src={p1i1} alt='noen'></img></div>
                    <div><img src={p1i2} alt='noen'></img></div>
                    <div><img src={p1i3} alt='noen'></img></div>
                    <div><img src={p1i4} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># Everyone should have a portfolio to showcase what they have accomplished.<br></br>
                    # And showoff their projects and experience.</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  ~ during building this project i was still learning react js, so mostly Reactjs
                  <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>



        


        {/* popup two */}
        <div id='popup1' style={{display: two ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun2}>close</button></div>
        <div>
          <div class='popupheader'>Hasty-Com</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/hasty-com" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="https://logee48.github.io/hasty-com/" target='_blank'>live link</a></div>
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># I needed a way to communicate with my friends in computer lab classes without needing to provide<br></br>email or phone number<br></br>
                    # So i made one.</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  ~ During building this project i leant about how data are stored in firebase and how to get those data.<br></br>
                  ~ How pass values from one page to another using get()
                  ~ And some Javascript
                  {/* <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl> */}
                </div>
              </div>
          </div>
      </div>
        </div>



        

        {/* popup three */}
        <div id='popup1' style={{display: three ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun3}>close</button></div>
        <div>
          <div class='popupheader'>CEX 2.0</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/Cex-budget--v" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="https://genuine-platypus-5848e0.netlify.app/" target='_blank'>live link</a></div>
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p3i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p3i2} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p3i3} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p3i4} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p3i5} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># It is more like a ecommerse website, u have features like cart<br></br>
                      # I made this project for my software engineering concepts in my 4th semester<br></br>
                    # CEX - Complete Entertainment eXchange is website where user can buy and sell their used game and electronics</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- React Routes</dd>
                    <dd>- Firebase authentication ( mainly google auth )</dd>
                    {/* <dd>- adding third party packages for features like sliders</dd> */}
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>




        


        {/* popup four */}
        <div id='popup1' style={{display: four ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun4}>close</button></div>
        <div>
          <div class='popupheader'>iStat</div>
          <div style={{display:"flex",justifyContent:"center"}}>**still working on this project**</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/stat_data" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># Everyone should have a portfolio to showcase what they have accomplished.<br></br>
                    # And showoff their projects and experience.</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  ~ during building this project i was still learning react js, so mostly Reactjs
                  <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>




        

        {/* popup five */}
        <div id='popup1' style={{display: five ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun5}>close</button></div>
        <div>
          <div class='popupheader'>9 11</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/9-11" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={nine1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={nine2} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># Because it is a game and i loving making games.<br></br>
                    # i saw a image in reddit similar to this game and why not make it into a game</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                ~ Nothing new just basic unity concepts.
                  <dl>
                    {/* <dt>~ Just basic unity concepts</dt> */}
                    {/* <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd> */}
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>






        


          {/* popup six */}
        <div id='popup1' style={{display: six ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun6}>close</button></div>
        <div>
          <div class='popupheader'>Hexaplay</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/hexaplay" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p6i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p6i2} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p6i3} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p6i4} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># One day suddendly i got this game idea, coded the logic for this concept in 1 hour<br></br>
                    # Also made this game in <a href="https://github.com/logee48/cooler-pick/src" target='_blank'>web version</a> (mobile friendly)</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- scene management</dd>
                    <dd>- how to change color of gameObject onclick of button</dd>
                    <dd>- gameObject color rendering in unity</dd>
                    <dd>- adding timer to scene</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>


        {/* popup 7 */}
        <div id='popup1' style={{display: seven ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun7}>close</button></div>
        <div>
          <div class='popupheader'>reddit meme generator</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/reddit_meme_generator" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="https://logee48.github.io/reddit_meme_generator/" target='_blank'>live link</a></div>
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># To see meme's on my school computer<br></br>
                    </div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  ~ how to display api data into web page<br></br>
                  ~ how to request for new data
                  <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- fetch api function</dd>
                    {/* <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd> */}
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>


        {/* popup 8 */}
        <div id='popup1' style={{display: eight ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun8}>close</button></div>
        <div>
          <div class='popupheader'>img format converter</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/file-project" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p8i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p8i2} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p8i3} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div>- After finishing college I needed to apply for college. All college were online so I needed to upload my photo in my application where it only accepted specific format and size, so i though why not make my own software</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  ~ I made this software using python and PILLOW librarie<br></br>
                  ~ For UI used TKinter.
                  {/* <dl>
                    <dt># learnt concepts like:</dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl> */}
                </div>
              </div>
          </div>
      </div>
        </div>



        {/* popup 9 */}
        <div id='popup1' style={{display: nine ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun9}>close</button></div>
        <div>
          <div class='popupheader'>dr.Predictor</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/mr.predictor" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p9i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p9i2} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p9i3} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># This is just a simple Predicting game.<br></br>
                    # Made this one for my friends project</div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  {/* ~ during building this project i was still learning react js, so mostly Reactjs */}
                  <dl>
                    {/* <dt># learnt concepts like:</dt> */}
                    <dd>- Just some basic Python <a href='https://python.org' target='_blank'>pygame</a> concept</dd>
                    <dd>- Screen touch buttons</dd>
                    <dd>- Key trigger functions</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>



        {/* popup 10 */}
        <div id='popup1' style={{display: ten ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun10}>close</button></div>
        <div>
          <div class='popupheader'>game without a name</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/the-game-without-name" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p10i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p10i2} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p10i3} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># This game has a special place in my heart<br></br>
                    # This was my very first software/game that i made<br></br>
                    # Made this one for my class 12th computer science project
                    </div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  {/* ~ during building this project i was still learning react js, so mostly Reactjs */}
                  <dl>
                    {/* <dt># learnt concepts like:</dt> */}
                    <dd>- Mostly followed a youtube video</dd>
                    <dd>- Leant more about pygame librarie</dd>
                    <dd>- how to create button in pygame</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>

      {/* popup 11 */}
      <div id='popup1' style={{display: eleven ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun11}>close</button></div>
        <div>
          <div class='popupheader'>Vh-Ken</div>
          <div style={{display:"flex",justifyContent:"center"}}>**still working on this project**</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/vh_ken" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p11i1} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># Because it is a cool game.<br></br>
                    # Can you imagine where you can control your game character using hand movement, here it is.<br></br>
                    {/* # Made this one for my class 12th computer science project */}
                    </div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>how i made this project and what i learnt during making this project?</div>
                  {/* ~ during building this project i was still learning react js, so mostly Reactjs */}
                  <dl>
                    {/* <dt># learnt concepts like:</dt> */}
                    <dd>- For traing model for recognizing user hand gesture i use tensorflow and mediapipe ( <a href='https://youtu.be/Ui85SVJsRf8' target='_blank'>video ref</a> )</dd>
                    <dd>- Python code will recognize the hand gesture and update the player state in firebase real-time database, and UNITY pick up the data from firebase and player moves accordingly</dd>
                    {/* <dd>- how to create button in pygame</dd> */}
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>



        {/* popup 12 */}
        <div id='popup1' style={{display: twelve ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun12}>close</button></div>
        <div>
          <div class='popupheader'>Note-iT</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/noteIt" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'90%'}}><img src={p12i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p12i2} alt='noen'></img></div>
                    <div style={{height:'90%'}}><img src={p12i3} alt='noen'></img></div>
                    <div style={{height:'90%'}}><img src={p12i4} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p12i5} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># Every developers should have a full-stack ( frontend-and-backend ) web project in their sleeve, so i made one for me.<br></br>
                    # It is a simple notes taking website with proper authentication.<br></br>
                    {/* # Made this one for my class 12th computer science project */}
                    </div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  {/* ~ during building this project i was still learning react js, so mostly Reactjs */}
                  <dl>
                    {/* <dt># learnt concepts like:</dt> */}
                    <dd>- Made this one with MERN stack and JWT ( JSON web tokens )</dd>
                    <dd>- Learnt alot about creating servers.</dd>
                    <dd>- MongoDB connectivity with NODE</dd>
                    <dd>- connecting Fontend with Backend</dd>
                    <dd>- How to make auth system using JWT (It is thing which provide a unique tokens when a user login using their credientials, using those tokens users can access the website.)</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>



        {/* popup 13 */}
        <div id='popup1' style={{display: thirteen ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun13}>close</button></div>
        <div>
          <div class='popupheader'>Secret - 1000</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/secret-1000" target='_blank'>github link</a></div>
            {/* <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div> */}
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p13i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p13i2} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p13i3} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># It is one of the coolest project that i have made.<br></br>
                    # Imagine secretly inseting a message in image file.<br></br>
                    # Here you can embed a secret message upto 1000 characters and send it to your friend, your friend can use decryptor to read the message from image file.<br></br>
                    # When you compress the image that secret message will be gone.
                    </div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  {/* ~ during building this project i was still learning react js, so mostly Reactjs */}
                  <dl>
                    {/* <dt># learnt concepts like:</dt> */}
                    <dd>- Learnt basic python stuff such as</dd>
                    <dd>-> read and writing file</dd>
                    <dd>-> Tkinter (ui thing)</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>


        {/* popup 14 */}
        <div id='popup1' style={{display: fourteen ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun14}>close</button></div>
        <div>
          <div class='popupheader'>f-guss</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48/f-guss" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="https://f-guss.netlify.app/" target='_blank'>live link</a></div>
          </div>
          <div id="popupdiv">
            <div id="popupslider_test">
              <div class='popupslider'>
                  <AwesomeSlider>
                    <div style={{height:'100%'}}><img src={p14i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p14i2} alt='noen'></img></div>
                    {/* <div style={{height:'100%'}}><img src={p10i3} alt='noen'></img></div> */}
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># For some reason, i love guessing country flags and capitals.<br></br>
                    # So i created my own flag guessing game.<br></br>
                    {/* # Made this one for my class 12th computer science project */}
                    </div>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  {/* ~ during building this project i was still learning react js, so mostly Reactjs */}
                  <dl>
                    {/* <dt># learnt concepts like:</dt> */}
                    <dd>- Just some basic Javascript.</dd>
                    {/* <dd>- Leant more about pygame librarie</dd>
                    <dd>- how to create button in pygame</dd> */}
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>


        <div>
  <ul>
    <a href="#projectheader" onClick={fun11}><li>
    <img src={vhken}></img> 
      <div class='info'>
      <h1>VH-Ken<br></br><p>Python | Unity | Firebase</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun2}><li>
    <img src={hasty}></img> 
      <div class='info'>
       <h1>Hasty-com<br></br><p>Javascript | HTML | css</p></h1>   
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun12}><li>
    <img src={noteit}></img> 
      <div class='info'>
      <h1>Note-iT<br></br><p>MERN stack | JWT</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun3}><li>
        <img src={cex}></img>
      <div class='info'>
      <h1>CEX 2.0<br></br><p>Reactjs | Firebase</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun13}><li>
    <img src={secret1000}></img> 
      <div class='info'>
      <h1>secret-1000<br></br><p>Python | TKinter</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun4}><li>
    <img src={istat}></img>
      <div class='info'>
      <h1>iStat<br></br><p>Reactjs | Python | Firebase</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun1}><li>
    <img src={portfolio}></img> 
      <div class='info'>
      <h1>Portfolio<br></br><p>React js</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun5}><li>
    <img src={nine11}></img>
      <div class='info'>
      <h1>9 11<br></br><p>Unity | C#</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun6}><li>
      <img src={hexalogo}></img>
      <div class='info'>
      <h1>Hexaplay<br></br><p>Unity | C#</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun7}><li>
    <img src={reddit}></img>
      <div class='info'>
      <h1>Reddit meme gen<br></br><p>Javascript | HTML | css</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun14}><li>
    <img src={fguss}></img> 
      <div class='info'>
      <h1>f-Guss<br></br><p>React js</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun8}><li> 
      <img src={imgcon}></img>
      <div class='info'>
      <h1>Img-format converter<br></br><p>Python | PIL</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun9} style={{textDecoration:"none"}}><li> 
      <img src={drp}></img>
      <div class='info'>
      <h1>dr.Predictor<br></br><p>Python | pygame</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun10}><li>
      <img src={gwn}></img>
      <div class='info'>
      <h1>The Game Without A Name<br></br><p>Python | pygame</p></h1>
      </div>
    </li></a>
    
  </ul>
</div>
        

        



      </div>

      {/* project display place with images  */}
      
      <div id='dummy'></div>
      {/* <div  style={{display: testsamp ? 'block' : 'none'}}>sdgjksngjnsn</div>
      <button onClick={samp}>works</button> */}
    </div>






    {/*     page four    */}
    <div id='cont'>
    <section id="contact">
  
  <h1 id="section-header" style={{paddingTop:"80px"}} className='animation' data-aos='zoom-in'>Contact</h1>
  
  <div class="contact-wrapper">
  
  {/* <!-- Left contact page -->  */}
    
    <form class="form-horizontal">
       
      <div class="form-group" >
        <div class="col-sm-12">
          <input style={{backgroundColor:"black",marginBottom:"20px", color:"white"}} type="text" class="form-control" id="name" placeholder="NAME" name="name" value={name} onChange={(e)=>{setname(e.target.value)}} required></input>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input style={{backgroundColor:"black",marginBottom:"20px", color:"white"}} type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required></input>
        </div>
      </div>

      <textarea style={{backgroundColor:"black",marginBottom:"20px", color:"white"}} class="form-control" rows="8" placeholder="MESSAGE" name="message" required value={message} onChange={(e)=>{setmessage(e.target.value)}}></textarea>
      
      <button class="btn btn-primary send-button" onClick={db_fun}>
        <div class="alt-send-button" >
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  {/* <!-- Left contact page -->  */}
    
      <div class="direct-contact-container">

        <div class="contact-list">
          <div class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Chennai, India</span></i></div>
          
          <div class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone">(+91) 8056779031</span></i></div>
          
          <div class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">logeshe9159@gmail.com</a></span></i></div>
          
        </div>

        
        <div class="social-media-list">
          <a href="https://www.github.com/logee48" target="_blank" class="contact-icon"><div id="soi">
            <i class="fa fa-github" aria-hidden="true"></i>
          </div></a>
          <a href="https://www.linkedin.com/in/logeshwaran-elumalai-a180b3249/" target="_blank" class="contact-icon">
          <div id="soi"><i class="fa fa-linkedin" aria-hidden="true"></i>
          </div></a>
          <a href="https://twitter.com/logeshwaranE1" target="_blank" class="contact-icon">
          <div id="soi"><i class="fa fa-twitter" aria-hidden="true"></i>
          </div></a>
        </div>

        {/* <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div> */}

      </div>
    
  </div>
  
</section>  
  
  
  
  
      </div>
    </div>
    <div id='footer'>
      Copyright © 2022 jesper. All Rights Reserved
    </div>



  










    
    </div>
  );
}

export default App;
