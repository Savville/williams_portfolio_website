import {React} from 'react';
import {FOOTER,HEADER, PROJECT1,PROJECT2,PROJECT3, FEATURES,WHATGPT3} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <HEADER/>


      </div>
      <Brand/>
      <WHATGPT3/>
      <FEATURES/>
      <PROJECT1/>
      <PROJECT2/>
      <PROJECT3/>
      <CTA/>
      <FOOTER/>

       
    </div>
  )
}

export default App