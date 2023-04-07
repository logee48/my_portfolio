import './App.css';
import charimg from './char.png';
import img1 from './wall1.jpg';
import git from './images/github.png'
import linkedin from './images/linkedin.png'
import maill from './images/mail.png'
import test1 from './images/t1.png'
import test2 from './images/t2.png'
import test3 from './images/t3.png'
import test4 from './images/t4.png'
import p2i1 from './images/p2ss1.png'
import p2i2 from './images/p2ss2.png'
import 'animate.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "animate.css/animate.min.css";
import { useState, useEffect } from 'react';
// import ScrollAnimation from 'react-animate-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    AOS.init({duration: 2000 })
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
    }
  }
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
    </div>


    {/*     page three   */}   
    <div class='new2' id='pro'>

      <h1 id='projectheader' className='animation' data-aos='zoom-in'>My Projects</h1>

      {/*  box project */}
      <div class='projectsection'>
        <div id="zoom-test1">
        <a href="#projectheader" id='project1' className='animation' data-aos='fade-up' onClick={fun1}>
          <div class='project-img1'><img id='img1' src={img1}></img></div>
          <h2>My portfolio<p>Reactjs</p></h2>
        </a></div>

        {/* popup-one */}
        <div id='popup1' style={{display: one ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun1}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48" target='_blank'>github link</a></div>
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
                  <ul>
                    <li>Everyone should have a portfolio to showcase what they have accomplished.</li>
                    <li>And showoff their projects and experience.</li>
                  </ul>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <li>during building this project i was still learning react js, so mostly Reactjs</li>
                  <dl>
                    <dt><li>learnt concepts like:</li></dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>



        <div id="zoom-test1">
        <a href='#projectheader' id='project2' className='animation' data-aos='fade-up'onClick={fun2}>
        <div class='project-img1'><img id='img1' src={img1}></img></div>
        <h2>HaStY-CoM<p>HTML | CSS | Javascript</p></h2>
        </a></div>


        {/* popup two */}
        <div id='popup1' style={{display: two ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun2}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div>
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
                  <ul>
                    <li>Everyone should have a portfolio to showcase what they have accomplished.</li>
                    <li>And showoff their projects and experience.</li>
                  </ul>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <li>during building this project i was still learning react js, so mostly Reactjs</li>
                  <dl>
                    <dt><li>learnt concepts like:</li></dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>



        <div id="zoom-test1">
        <a href='#projectheader' id='project3' className='animation' data-aos='fade-up' onClick={fun3}>
          <div class='project-img1'><img id='img1' src={test2}></img></div>
          <h2>Reddit meme generator<p>HTML | CSS | Javascript</p></h2>
        </a></div>

        {/* popup three */}
        <div id='popup1' style={{display: three ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun3}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div>
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
                  <ul>
                    <li>Everyone should have a portfolio to showcase what they have accomplished.</li>
                    <li>And showoff their projects and experience.</li>
                  </ul>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <li>during building this project i was still learning react js, so mostly Reactjs</li>
                  <dl>
                    <dt><li>learnt concepts like:</li></dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>




        <div id="zoom-test1">
        <a href='#projectheader' id='project4' className='animation' data-aos='fade-up' onClick={fun4}>
        <div class='project-img1'><img id='img1' src={test3}></img></div>
        <h2>Image format converter<p>Python | PIL module</p></h2>
        </a></div>


        {/* popup four */}
        <div id='popup1' style={{display: four ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun4}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div>
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
                  <ul>
                    <li>Everyone should have a portfolio to showcase what they have accomplished.</li>
                    <li>And showoff their projects and experience.</li>
                  </ul>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <li>during building this project i was still learning react js, so mostly Reactjs</li>
                  <dl>
                    <dt><li>learnt concepts like:</li></dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>




        <div id="zoom-test1">
        <a href='#projectheader' id='project5' className='animation' data-aos='fade-up' onClick={fun5}>
          <div class='project-img1'><img id='img1' src={img1}></img></div>
          <h2>Hexaplay<p>unity game engine | C#</p></h2>
        </a></div>

        {/* popup five */}
        <div id='popup1' style={{display: five ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun5}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div>
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
                  <ul>
                    <li>Everyone should have a portfolio to showcase what they have accomplished.</li>
                    <li>And showoff their projects and experience.</li>
                  </ul>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <li>during building this project i was still learning react js, so mostly Reactjs</li>
                  <dl>
                    <dt><li>learnt concepts like:</li></dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>






        <div id="zoom-test1">
          <a href='#projectheader' id='project6' className='animation' data-aos='fade-up'onClick={fun6}>
          <div class='project-img1'><img id='img1' src={test1}></img></div>
          <h2>system stat monitor<p>python | Reactjs</p></h2>
          </a></div>


          {/* popup six */}
        <div id='popup1' style={{display: six ? 'block' : 'none'}}>
          <div id="popupclose"><button onClick={fun6}>close</button></div>
        <div>
          <div class='popupheader'>My portfolio</div>
          <div id="popupsubheader">
            <div><a style={{color:'white'}} href="https://github.com/logee48" target='_blank'>github link</a></div>
            <div><a style={{color:'white'}} href="#page" target='_blank'>live link</a></div>
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
                  <ul>
                    <li>Everyone should have a portfolio to showcase what they have accomplished.</li>
                    <li>And showoff their projects and experience.</li>
                  </ul>
                </div>
                <div id="pop">
                <div style={{fontSize:'30px',padding:'20px'}}>what i learnt during making this project?</div>
                  <li>during building this project i was still learning react js, so mostly Reactjs</li>
                  <dl>
                    <dt><li>learnt concepts like:</li></dt>
                    <dd>- hooks</dd>
                    <dd>- basic conditional rendering</dd>
                    <dd>- adding third party packages for features like sliders</dd>
                  </dl>
                </div>
              </div>
          </div>
      </div>
        </div>






          <div id="zoom-test1">
          <a href='#projectheader' id='project6' className='animation' data-aos='fade-up'onClick={fun6}>
          <div class='project-img1'><img id='img1' src={test4}></img></div>
          <h2>mr.predictor<p>Python | pygame module</p></h2>
          </a></div>
          <div id="zoom-test1">
          <a href='#projectheader' id='project6' className='animation' data-aos='fade-up'onClick={fun6}>
          <div class='project-img1'><img id='img1' src={img1}></img></div>
          <h2>the-game-without-name<p>Python | pygame module</p></h2>
          </a></div>
      </div>

      {/* project display place with images  */}
      
      <div id='dummy'></div>
      {/* <div  style={{display: testsamp ? 'block' : 'none'}}>sdgjksngjnsn</div>
      <button onClick={samp}>works</button> */}
    </div>






    {/*     page four    */}
    <div id='cont'>
      <div id='cont-header' className='animation' data-aos='fade-up'>Contact</div>
      
      <div>
        <div id="my-resume">samplee</div>
        <div class='logos'>
          <a id='gitlogo' className='animation' data-aos='fade-right' target='_blank' rel='noreferrer' href='https://github.com/logee48'><img src={git} alt='none'></img></a>
          <a id='linkedinlogo' className='animation' data-aos='fade-right' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/logeshwaran-elumalai-a180b3249/'><img src={linkedin} alt='none'></img></a>
          <a id='maillogo' className='animation' data-aos='fade-right' href='mailto:logeshe9159@gmail.com'><img src={maill} alt='none'></img></a>
        </div>
      </div>
      {/* <div id='contact-form-out'> */}
        {/* <input placeholder='your name' type='text'></input>
        <input placeholder='your email id'></input>
        <input placeholder='your message...'></input> */}
      <div>
        <form class='contact-form'>
            <input type="text" value={name} placeholder='your name' onChange={(e) => setname(e.target.value)}/>
            <input type="email" value={email} placeholder='your email id' onChange={(e) => setemail(e.target.value)}/>
            <input type="text" value={message} placeholder='your message...̀' onChange={(e) => setmessage(e.target.value)}/>
            <input type="submit" value='submit'/>
        </form>
      </div>
    </div>
    <div id='footer'>
      Copyright © 2022 jesper. All Rights Reserved
    </div>


    </div>
    </div>
  );
}

export default App;
