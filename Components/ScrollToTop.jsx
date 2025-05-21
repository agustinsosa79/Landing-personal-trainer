    import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // scroll arriba de todo
    }, [pathname]); // se ejecuta cada vez que cambia la ruta

    return null;
    }
