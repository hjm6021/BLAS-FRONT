import Header from './Header/Header';
import Sidebar from './Main/Sidebar/Sidebar';
import Contents from './Main/Contents/Contents';
import './Default.scss';

const Default = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <Sidebar />
                <Contents />
            </div>
        </div>
    );
};

export default Default;
