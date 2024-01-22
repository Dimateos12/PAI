import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import mapujSlowo from '../dicitonaryHeader';

function BreadcrumbsHeader() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const handleClick = event => {
    event.preventDefault();
  };

  return (
    <div role="presentation" onClick={handleClick} style={{ marginTop: '2%', marginLeft: '2%' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          component={RouterLink}
          to={`/`}
        >
          Strona główna
        </Link>
        {pathSegments.map((segment, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            component={RouterLink}
            to={`/${pathSegments.slice(0, index + 1).join('/')}`}
          >
            {mapujSlowo(segment)}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbsHeader;
