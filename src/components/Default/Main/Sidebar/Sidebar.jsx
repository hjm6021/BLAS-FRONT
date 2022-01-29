import './Sidebar.scss';

const Sidebar = () => {
    const handleClick = () => {
        console.log('Home');
    };
    return (
        <div className="sidebar">
            <ul>
                <li onClick={handleClick}>HOME</li>
                <li>会社・組織管理</li>
                <li>ユーザー管理</li>
                <li>プロジェクト管理</li>
                <li>データ管理</li>
                <li>機器管理</li>
                <li>操作ログ</li>
                <li>システム管理</li>
                <li>マニュアル</li>
                <li>アプリ</li>
            </ul>
        </div>
    );
};

export default Sidebar;
