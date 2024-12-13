import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './modules/Layout';
import background from './assets/images/rear-view-programmer-working-all-night-long.jpg'
import backgroundVideo from './assets/video/fruit.mp4'

function App() {
  return (
    <div className="" style={{
      //backgroundImage:`url(${background})`,
      position: 'relative',
      height: 'calc(100vh - 1px)',
      overflowY: 'auto',
      overflowX: 'hidden',
      backgroundSize: 'cover',
    }} >
       <video
    autoPlay
    loop
    muted
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1, // Send the video behind other content
    }}
  >
    <source src={backgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
  
  </video>
  <div
    style={{
      position: 'relative',
      height: '100%',
      overflowY: 'auto', // Enable scrolling for the content
      zIndex: 1, // Ensure content is above the video
    }}
  >
    <Layout />
  </div>
    </div>
  );
}

export default App;
