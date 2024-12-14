import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './modules/Layout';
import background from './assets/images/rear-view-programmer-working-all-night-long.jpg'
import backgroundVideo from './assets/video/fruit (online-video-cutter.com).mp4'
import { Col, Container, Row } from 'react-bootstrap';
import Header from './modules/header/Header';
import ProfilePicture from './modules/body/components/ProfilePicture';
import ProfileSection from './modules/body/ProfileSection';

function App() {
  return (
    <div style={{ backgroundColor: '#1c2841', color: 'white' }}>
      <Layout />
    </div>


  );
}

export default App;
