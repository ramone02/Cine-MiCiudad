import { Estrenos, Home } from "../Pages";


interface Route {
    to: string;
    path: string;
    Component: React.ElementType;
    name: string;
};
export const routes: Array<Route> = [
    {
        to: '/',
        path: '/',
        Component: Home,
        name: 'Home',
    }, 
    {
        to: '/estrenos',
        path: '/estrenos',
        Component: Estrenos,
        name: 'Estrenos',
    },
    {
        to: '/faqs',
        path: '/faqs',
        Component: Estrenos,
        name: `faq's`,
    }
];