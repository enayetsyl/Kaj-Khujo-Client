import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const route = location.pathname.substring(1).toUpperCase();
    console.log(location)
    document.title = `Kaj Khujo | ${route}`;
  }, [location]);

  return null;
}

export default DynamicTitle;
