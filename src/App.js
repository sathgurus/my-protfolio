import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './modules/Layout';
import background from './assets/images/971.jpg'

function App() {
  return (
    <div className="" style={{
      backgroundImage:`url(${background})`,
      height: 'calc(100vh - 1px)',
      overflowY: 'auto',
      overflowX: 'hidden',
      backgroundSize:'cover'
    }} >
      <Layout />
    </div>
  );
}

export default App;
