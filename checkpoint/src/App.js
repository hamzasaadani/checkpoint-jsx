import logo from './logo.svg';
import './App.css';
import './style.css';
import image from './imagejsx.webp';


function App() {
  return (
    <>
    <div className='style'>
    <div className='stylehtml' >

      <h1 className='title red'> Hamza </h1>
   
     <br />
   <div className='imagestyle'>
      <img src={image} alt="myimage" />
   
     <br />
   
     <img src="/imagejsx1.webp" alt="image" />
     </div>
    </div>
   
   <video width="320" height="240" controls>
   
    <source src="myVideo.mp4" type="video/mp4" />
   
   </video>
   </div>
   </>
  );
}

export default App;
