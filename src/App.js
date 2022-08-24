import { BrowserRouter } from 'react-router-dom';
import SideBar from './SideBar/SideBar';

function App() {
    return (
        <>
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
            <section className="home">
                <div className="text">Dashboard Sidebar</div>
            </section>
        </>
    );
}

export default App;
