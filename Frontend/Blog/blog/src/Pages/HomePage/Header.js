import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import BreadcrumbsHeader from '../../setup/axios/BreadcrumbsHeader';

function Header(props) {

    const { sections, title } = props;
    const localStorageToken = ( localStorage.getItem("token") !== null);
    const [localStorageInfo,setLocalStorageInfo] = React.useState([]);

    useEffect(() => {
        if(localStorageToken){
            const storedToken = localStorage.getItem('token'); 
            setLocalStorageInfo(jwtDecode(storedToken));
        }
       
    }, []);


    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    {title}
                </Typography>
                {localStorageToken ?
                <>
                <Avatar sx={{ bgcolor: '#F66737', marginRight: '1%', marginLeft: '-20%' }}></Avatar>
                <Typography sx={{marginRight: '3%'}} variant='h8'> <Button href="/profile">Witaj {localStorageInfo.given_name}</Button></Typography>
                </>
                :
                <></>
}
                {localStorageToken ?
                        <Button variant="outlined" onClick={()=>{localStorage.removeItem('token'); 
                            window.location.reload();}} size="small">Log out</Button>
                    :
                    <>
                    <Button href="/signup" variant="outlined" size="small"> Sign up </Button>
                    <Button href="/signin" variant="outlined" size="small"> Sign in </Button>
                    </>
                }

                {localStorageInfo.typ === "Yes" ?
                        <Button href="/admin" variant="outlined" size="small">Admin panel</Button>
                    :
                    <>
                    </>
                }

                <Button
                href="/checkout"
                variant="outlined"
                size="small"
                style={{ color: 'gold', borderColor: 'gold', '&:hover': { backgroundColor: 'gold', color: 'black' } }}
                >
                Kup premium
                </Button>                
                
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections.slice(0,6).map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{ p: 1, flexShrink: 0 }}
                    >
                        <Button href={"/section/?id="+section.id}>{section.title}</Button>
                    </Link>
                ))}
            </Toolbar>
            <BreadcrumbsHeader/>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
};

export default Header;