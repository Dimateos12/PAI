import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbsHeader() {
  return (
    <div role="presentation" onClick={handleClick} style={{marginTop: "2%", marginLeft: "2%"}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Strona główna
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Posty
        </Link>
        <Typography color="text.primary">Python</Typography>
      </Breadcrumbs>
    </div>
  );
}