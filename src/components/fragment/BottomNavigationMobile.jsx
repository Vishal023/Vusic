import React from "react";
import '../assets/scss/BottomNavigation.scss';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";

function BottomNavigationMobile() {
    const [value, setValue] = React.useState('home');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="bottom-navigation">
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction href={"/home"} label="Home" value="home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction href={"/search"} label="Search" value="search" icon={<SearchIcon />} />
                <BottomNavigationAction href={"/explore"} label="Explore" value="explore" icon={<ExploreOutlinedIcon />} />
                <BottomNavigationAction href={"/profile"} label="Profile" value="profile" icon={<AccountCircleOutlinedIcon />} />
            </BottomNavigation>
        </div>
    );
}

export default BottomNavigationMobile;