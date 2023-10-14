import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarFooter } from 'react-pro-sidebar';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { TbSettings2 } from 'react-icons/tb';
import { RxDashboard } from 'react-icons/rx';
import { FaPercentage } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { SiWebmoney } from 'react-icons/si';
import { AiOutlineComment } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { SiWebpack } from 'react-icons/si';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../Theme';

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{
        ...(title !== 'Dashboard'
          ? {
              marginLeft: '45px',
            }
          : null),
        paddingTop: '10px',
      }}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const NewItems = ({ title, titleIcon, selected, setSelected, subHeadings }) => {
  const [product, setProduct] = useState(false);
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setProduct(!product)}
        py={1}
      >
        <Box display="flex">
          {titleIcon}
          <Typography variant="h6" color="#FFFFF" sx={{ m: '15px 0 5px 20px' }}>
            {title}
          </Typography>
        </Box>
        {product ? (
          <MdKeyboardArrowDown
            style={{
              width: 20,
              height: 20,
              margin: '15px 20px 5px 20px',
            }}
          />
        ) : (
          <MdKeyboardArrowRight
            style={{
              width: 20,
              height: 20,
              margin: '15px 20px 5px 20px',
            }}
          />
        )}
      </Box>

      {product
        ? subHeadings.map((item) => (
            <Item
              title={item?.name}
              to={item?.link}
              icon={item?.icon}
              selected={selected}
              setSelected={setSelected}
            />
          ))
        : null}
    </>
  );
};

const Sidebar = ({ disp }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState('Dashboard');
  return (
    <Box
      sx={{
        '@media(max-width: 600px)': {
          width: 80,
          ...(disp ? { display: 'none' } : { display: 'block' }),
        },
        '& .pro-sidebar-inner': {
          background: `#07074B !important`,
        },
        '& .pro-sidebar.collapsed': {
          width: 67,
          minWidth: 67,
        },
        '& .pro-sidebar-footer': {
          borderRadius: 2,
          padding: 0.5,
          margin: 1,
          ...(isCollapsed
            ? { backgroundColor: '#00000', border: 'none !important' }
            : { backgroundColor: '#ffffff25' }),
          marginTop: 5,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#FFFFF !important',
        },
        '& .pro-menu-item.active': {
          color: '#FFFFF !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <TbSettings2
                  style={{
                    width: '25',
                    height: '25',
                  }}
                />
              ) : undefined
            }
            style={{
              margin: '10px 0 20px 0',
              color: '#FFFFFF',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                ml="5px"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <TbSettings2
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Typography
                  variant="h3"
                  color="#FFFFF"
                  ml={2}
                  fontWeight="bold"
                >
                  Dashboard
                </Typography>
              </Box>
            )}
          </MenuItem>
          <Box>
            <Item
              title="Dashboard"
              to="/"
              icon={
                <RxDashboard
                  style={{
                    width: '25',
                    height: '25',
                  }}
                />
              }
              selected={selected}
              setSelected={setSelected}
            />
            <NewItems
              title="Product"
              selected={selected}
              titleIcon={
                <SiWebpack
                  style={{
                    width: 20,
                    height: 20,
                    margin: '15px 0 5px 27px',
                  }}
                />
              }
              setSelected={setSelected}
              subHeadings={[
                {
                  name: 'Manage Products',
                  link: '/',
                },
                {
                  name: 'Product Information',
                  link: '/',
                },
              ]}
            />
            <NewItems
              title="Customers"
              selected={selected}
              titleIcon={
                <BsFillPersonFill
                  style={{
                    width: 20,
                    height: 20,
                    margin: '15px 0 5px 27px',
                  }}
                />
              }
              setSelected={setSelected}
              subHeadings={[
                {
                  name: 'Manage Customers',
                  link: '/',
                },
                {
                  name: 'Customers Information',
                  link: '/',
                },
              ]}
            />
            <NewItems
              title="Income"
              selected={selected}
              titleIcon={
                <SiWebmoney
                  style={{
                    width: 20,
                    height: 20,
                    margin: '15px 0 5px 27px',
                  }}
                />
              }
              setSelected={setSelected}
              subHeadings={[
                {
                  name: 'Manage Income',
                  link: '/',
                },
                {
                  name: 'Income Information',
                  link: '/',
                },
              ]}
            />
            <NewItems
              title="Promote"
              selected={selected}
              titleIcon={
                <FaPercentage
                  style={{
                    width: 20,
                    height: 20,
                    margin: '15px 0 5px 27px',
                  }}
                />
              }
              setSelected={setSelected}
              subHeadings={[
                {
                  name: 'Manage Promoter',
                  link: '/',
                },
                {
                  name: 'Promoter Information',
                  link: '/',
                },
              ]}
            />
            <NewItems
              title="Help"
              selected={selected}
              titleIcon={
                <AiOutlineComment
                  style={{
                    width: 20,
                    height: 20,
                    margin: '15px 0 5px 27px',
                  }}
                />
              }
              setSelected={setSelected}
              subHeadings={[
                {
                  name: 'Help',
                  link: '/',
                },
              ]}
            />
          </Box>
          <SidebarFooter>
            <Box display="flex" alignItems="center" m={1} mr={0}>
              <Box display="flex">
                <Avatar src="/MyImage.jpg" />
                <Box
                  display="flex"
                  flexDirection="column"
                  pl={2}
                  color="#ffffff"
                >
                  <Typography variant="subtitle" fontWeight="bold">
                    lakhwinder
                  </Typography>
                  <Typography variant="subtitle2">Project Manager</Typography>
                </Box>
              </Box>
              <Box display="flex" flexGrow={1} justifyContent="flex-end" mr={1}>
                <MdKeyboardArrowDown
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </Box>
            </Box>
          </SidebarFooter>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
