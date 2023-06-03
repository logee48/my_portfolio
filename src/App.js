import './App.css';
import charimg from './char.png';
import img1 from './wall1.jpg';
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
import test1 from './images/t1.png'
import test4 from './images/t4.png'
import p2i1 from './images/p2ss1.png'
import p2i2 from './images/p2ss2.png'
import nine1 from './images/nine1.png'
import nine2 from './images/nine2.png'
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
  const [popupdisplay1, setpopdisplay1] = useState(false)
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
    }
  }





// - Noel Delgado | @pixelia_me




















  return (
    <div>
      <div>

    {/*     page one    */}    
    <div class='new' id='page'>
    <div class="headertags">
      <a id='headd' href='#page'>logesh</a>
      <a id="header1" href='#abou'>About</a>
      <a id="header1" href="#pro">Project</a>
      <a id="header1" href='#cont'>Contact</a>
    </div>
    <div class='header2'>
          <h1 id='fname' className='animation' data-aos='fade-in'>Hi i'm Logeshwaran Elumalai</h1>
          <h1 id='dname' className='animation' data-aos='fade-up'>Just a normal computer science student who likes to code for fun.</h1>
    </div>
    </div>



    {/*     page two    */}   
    <div class='new1' id='abou'>
      <div id='about-header' className='animation' data-aos='zoom-in'>About me</div>
      <div style={{display:'flex',columnCount:2, alignItems:"center", justifyItems:"center", marginTop:"10vh"}}>
        <div style={{padding:"50px"}}>
          <img src={pp} style={{borderRadius:"50%", width:"300px"}}></img>
        </div>
        <div style={{padding:"100px"}}>
          <div>hi there, my name is Logeshwaran Elumalai<br></br>you can call me logesh or jesper</div>
          <div>so I'm pre-final year college student in Rajalakshmi Engineergin college and i'll graduate by may 2025</div>
          <div>I'm mostly interested in game development and  I also do web development and app development</div>
          <div>i have made few personal, school and college projects, check them in <a href="#pro">Project section</a></div>
          {/* <div>here<br></br>download my resume</div>
          <div>**photo on the right or left depends on where the text is**</div> */}
          <div><a href={resume} download>download my resume</a></div>
          {/* <a href={resume} download>Click to download</a> */}

        </div>
      </div>
    </div>


    {/*     page three   */}   
    <div class='new2' id='pro'>

      <h1 id='projectheader' className='animation' data-aos='zoom-in'>My Projects</h1>

      {/*  box project */}
      <div class='projectsection'>
        <div>
  <ul>
    <a href="#projectheader" onClick={fun1}><li>
    <img src={portfolio}></img> 
      <div class='info'>
      <h1>Portfolio<br></br><p>React js</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun2}><li>
    <img src={hasty}></img> 
      <div class='info'>
       <h1>Hasty-com<br></br><p>Javascript | HTML | css</p></h1>   
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun3}><li>
        <img src={cex}></img>
      <div class='info'>
      <h1>CEX 2.0<br></br><p>Reactjs | Firebase</p></h1>
      </div>
    </li></a>
    <a href="#projectheader" onClick={fun4}><li>
    <img src={istat}></img>
      <div class='info'>
      <h1>iStat<br></br><p>Reactjs | Python | Firebase</p></h1>
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
                    <div><img src={charimg} alt='noen'></img></div>
                    <div><img src={charimg} alt='noen'></img></div>
                    <div><img src={charimg} alt='noen'></img></div>
                    <div><img src={charimg} alt='noen'></img></div>
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
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
                  </AwesomeSlider>
              </div></div>
              <div style={{fontSize:'20px'}} id="popupdes">
                <div id="popupdesleft">
                  <div style={{fontSize:'30px',padding:'20px'}}>why i made this project?</div>
                    <div># I made this project for my software engineering concepts in my 4th semester<br></br>
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
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
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
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
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
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
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
                    <div style={{height:'100%'}}><img src={p2i1} alt='noen'></img></div>
                    <div style={{height:'100%'}}><img src={p2i2} alt='noen'></img></div>
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



      </div>

      {/* project display place with images  */}
      
      <div id='dummy'></div>
      {/* <div  style={{display: testsamp ? 'block' : 'none'}}>sdgjksngjnsn</div>
      <button onClick={samp}>works</button> */}
    </div>






    {/*     page four    */}
    <div id='cont'>
    <section id="contact">
  
  <h1 class="section-header" style={{paddingTop:"80px"}}>Contact</h1>
  
  <div class="contact-wrapper">
  
  {/* <!-- Left contact page -->  */}
    
    <form id="contact-form" class="form-horizontal">
       
      <div class="form-group">
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
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
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

        
        <ul class="social-media-list">
          <a href="https://www.github.com/logee48" target="_blank" class="contact-icon"><li>
            <i class="fa fa-github" aria-hidden="true"></i>
          </li></a>
          <a href="https://www.linkedin.com/in/logeshwaran-elumalai-a180b3249/" target="_blank" class="contact-icon">
          <li><i class="fa fa-linkedin" aria-hidden="true"></i>
          </li></a>
          <a href="https://twitter.com/logeshwaranE1" target="_blank" class="contact-icon">
          <li><i class="fa fa-twitter" aria-hidden="true"></i>
          </li></a>
        </ul>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

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
