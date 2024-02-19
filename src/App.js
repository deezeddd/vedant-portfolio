import './App.css';
import audio from '../src/audio/Avicii-Levels.mp3'
import photo from '../src/my-photo.jpg'
import Navbar from './components/Navbar';

import gif from './penguin.gif'



function App() {


  return (
    <>
      <audio id='backgroundMusic' src={audio} autoPlay />

      <div className='App'>
        <div>
          <Navbar />
        </div>

        <section className='section-container p-10 h-96'>
          <div className=' grid grid-flow-col'>
            <a href="#education">'
              <div className='custom-font-animation'>
                <h1 className='text-9xl'>ABOUT </h1>
                <h1 className='text-9xl'>ME  </h1>
              </div>
            </a>
            <div className=' custom-bg w-96 h-96 custom-image-animation rounded'>
              <div className='bg-black w-80 h-80 rounded'>
                <img src={photo} alt="my-photo" className='h-72 rounded' />
              </div>
            </div>
          </div>
        </section>

        {/* <section className=' h-96 bg-black section-container'>
          <div className=' p-16 '>
            <h1 className='text-6xl text-slate-200'>hello,</h1>
            <p className='text-4xl text-slate-200 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum veniam ut culpa, nisi exercitationem aspernatur cumque tempore iure repellendus quas dolores pariatur consequuntur incidunt beatae quo voluptatem ex nemo?</p>
          </div>
        </section>
        <section className='bg-black'>
        <h1 className=' text-4xl text-slate-100 ml-20'>HELLO 👋👋 </h1>
          <div className='flex justify-center'>
            <img src={gif} />
            </div>
          </section> */}

        <section className='  bg-black section-container'>
          <div className=' p-16 '>
            <h1 className='text-6xl text-slate-200'>hello,</h1>
            <div className='flex justify-center'>
              <img src={gif} className='h-80' />
            </div>
            <p className='text-3xl text-slate-200 mt-16 custom-detail'>software developer by heart❤️, curious by internet🌐, i pay attention to detail<span className='details'>s</span>.</p>
             {/* <p className='text-end p-1 custom-detail'><small className=' text-red-200 text-base details'>  &nbsp; This is cool right? 👆</small></p> */}
          </div>
        </section>


        <section className='bg-gray-200 ' id='education'>
          <p className='text-center text-blue-300 text-6xl p-4'>ABOUT ME</p>
          <div className=' grid grid-flow-col'>
            <div className=' p-16 '>
              <h1 className='text-6xl'>EDUCATION</h1>
              <p className='text-4xl text-gray-600 mt-8'>
                <span className=' text-gray-950'>graduated </span>
                from <a href='https://iiitbhopal.ac.in/' target='_blank' className='college text-gray-950 cursor-pointer'>IIIT Bhopal</a> in 2023 (B.Tech in CSE) - <span className=' text-gray-950'>8.11/10 CGPA</span></p>
            </div>
            <div className='p-16'>
              <h1 className='text-6xl'>WORK EXPERIENCE</h1>
              <ul className='p-3'>
                <li>
                  <h2 className='text-4xl text-green-500'>Nagarro</h2> 
                  <p className='text-gray-700 text-xl'>mar'23 - dec'23</p>
                  <p className='text-4xl text-gray-600 '>associate software engineer</p>
                </li>
                <li className='mt-6'>
                  <h2 className='text-4xl text-blue-500'>Zebpay</h2> 
                  <p className='text-gray-700 text-xl'>feb'22 - mar'22</p>
                  <p className='text-4xl text-gray-600 '>solidity smart contract dev</p>
                  <p></p>
                </li>
              </ul>
            </div>
          </div>
        </section>


        <section className='bg-black h-96 p-16' id='tech-stack '>
          <p className='text-center text-gray-300 text-6xl p-4'>TECH STACK</p>
          <div className='text-gray-300 text-4xl p-16'>
          <span>.Net</span>
          </div>
        </section>

        <section className=''  id='tech-stack'>
          <div className='bg-pink p-16'>
            <p className='text-center text-gray-300 text-6xl p-4'>CONTACT ME</p>
            <div className='bg-gray-200 text-4xl p-16'>
            <p> Name :  <input className='bg-black text-green-100 m-2 p-2' type="text" /></p>
            <p> Email  :<input className='bg-black text-green-100 m-6 p-2' type="text" /></p>
              <button className=' border-4 border-black p-2'> Contact me</button>
            </div>
          </div>
        </section>


        <footer className=' bg-gray-300 h-96'>
          <h1 className='text-center p-4'>ALL RIGHTS RESERVED 💪💪 </h1>
          <h1 className=' text-8xl text-center '>OOPS Guess i Forgot to remove extra height</h1>
        </footer>
      </div>

    </>
  );
}

export default App;
