/* eslint-disable*/

import { Menu } from 'antd';
import { useDispatch } from "react-redux";
import { AppstoreOutlined as PastoredOutlined, } from '@ant-design/icons';

import { chooseMenu } from '../../redux/actions';

const NavBar = ({ episodes }) => {
    const dispatch = useDispatch();
    
    const eps = episodes.map(ep => (
    <Menu.Item key={ep.id} icon={<PastoredOutlined />}>
        {ep.name}
    </Menu.Item>
    )) 

    const onMenuItemClick = (value) => {
        dispatch(chooseMenu(value.key));
    }

    return (
        <Menu mode="inline" onClick={onMenuItemClick}>
            {eps}
        </Menu>
    );
}

export default NavBar;