import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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
      >
            strona głowna
          </Link>
        {pathSegments.map((segment, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={`/${pathSegments.slice(0, index + 1).join('/')}`}
          >
            {segment}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbsHeader;
