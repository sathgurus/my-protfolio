import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import bgImage from '../assets/images/bg-wallpaper.jpg'
import Skills from "./body/Skills";



const Layout = () => {
    return (
        <div style={{
            background: '#F6EACB',
            height: 'calc(100vh - 10px)',
            overflowY: 'auto',
            overflowX: 'hidden'
        }}>
            <div className="d-flex flex-column align-items-start justify-content-between">
                <Header />
                <Body />
                <Skills />
                <Footer />
            </div>
        </div>
    )
}

export default Layout;