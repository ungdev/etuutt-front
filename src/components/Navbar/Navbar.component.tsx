import { PATHS } from '../../modules/navigation/services';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import logo from './../../assets/logo.png';

import 'antd/dist/antd.css';
import { Menu, Button } from 'antd';
import './Navbar.style.scss';

//Ant Design Icons
import {HomeOutlined} from '@ant-design/icons';
import {CalendarOutlined} from '@ant-design/icons';
import {BookOutlined} from '@ant-design/icons';
import {AppstoreAddOutlined} from '@ant-design/icons';
import {TeamOutlined} from '@ant-design/icons';
import {FileProtectOutlined} from '@ant-design/icons';
import {BugOutlined} from '@ant-design/icons';

// CalendarOutlined, BookOutlined, AppstoreAddOutlined, TeamOutlined, FileProtectOutlined, BugOutlined } from '@ant-design/icons-svg/lib/types';

const { SubMenu } = Menu;

const TAILLE_IMG = 40;
const sideBarDatas = [
  {
    title: 'navbar.home',
    path: PATHS.ROOT_PAGE.ROUTE,
    icon: <HomeOutlined/>,
    key: "sub1",
  },
  {
    title: 'navbar.events',
    path: PATHS.EVENT_PAGE.ROUTE,
    icon: <CalendarOutlined/>,
    key: "sub2",
  },
  {
    title: 'navbar.studentLife',
    path: PATHS.STUDENT_LIFE_PAGE.ROUTE,
    icon: <BookOutlined/>,
    key: "sub3",
  },
  {
    title: 'Services',
    path: PATHS.SERVICES.ROUTE,
    icon: <AppstoreAddOutlined/>,
    key: "sub4",
  },
  {
    title: "navbar.team",
    path: PATHS.TEAM.ROUTE,
    icon: <TeamOutlined/>,
    key: "sub5",
  },
  {
    title: 'RGPD',
    path: PATHS.GDPR.ROUTE,
    icon: <FileProtectOutlined/>,
    key: "sub6",
  },
  {
    title: 'navbar.bug',
    path: PATHS.BUG.ROUTE,
    icon: <BugOutlined/>,
    key: "sub7",
  },
];


  // export class Navbar extends React.Component {

  export const Navbar : FunctionComponent = () => {
  const { t } = useTranslation();
  const handleClick = (e: any) => {
      console.log('click ', e);
    };

    // const Div: FunctionComponent = () => {const { t } = useTranslation();};

      return (
        <div className="header" id="container">
          <img className="etu-logo" src={logo}></img>
          <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            {sideBarDatas.map(({ title, path, icon, key }) => (
            <>
            <SubMenu key={key} icon={icon} title={t(title)}>
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          
            </>
            ))}
          </Menu>
        </div>
      );
    }
  




// export class Navbar extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   toggleCollapsed = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <div style={{ width: 256 }}>
//         <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
//           {React.createElement(this.state.collapsed ? HomeOutlined : HomeOutlined)}
//         </Button>
//         <Menu
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           mode="inline"
//           theme="dark"
//           inlineCollapsed={this.state.collapsed}
//         >
//           <Menu.Item key="1" icon={<CalendarOutlined />}>
//             Option 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<BookOutlined />}>
//             Option 2
//           </Menu.Item>
//           <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
//             Option 3
//           </Menu.Item>
//           <SubMenu key="sub1" icon={<TeamOutlined />} title="Navigation One">
//             <Menu.Item key="5">Option 5</Menu.Item>
//             <Menu.Item key="6">Option 6</Menu.Item>
//             <Menu.Item key="7">Option 7</Menu.Item>
//             <Menu.Item key="8">Option 8</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" icon={<FileProtectOutlined />} title="Navigation Two">
//             <Menu.Item key="9">Option 9</Menu.Item>
//             <Menu.Item key="10">Option 10</Menu.Item>
//             <SubMenu key="sub3" title="Submenu">
//               <Menu.Item key="11">Option 11</Menu.Item>
//               <Menu.Item key="12">Option 12</Menu.Item>
//             </SubMenu>
//           </SubMenu>
//         </Menu>
//       </div>
//     );
//   }
// }
