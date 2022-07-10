import { Link } from "react-router-dom";

import { Menu } from 'antd';
import { AppstoreOutlined as PastoredOutlined, SettingOutlined } from '@ant-design/icons';

const  Header = () => {
    return (
        <Menu mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<PastoredOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="characteristics" icon={<SettingOutlined />}>
                <Link to='/characters'>Characters</Link>
            </Menu.Item>
        </Menu>
    );
}
  
  export default Header;