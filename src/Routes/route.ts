import { Route } from "../Interfaces";
import { Estrenos, Faqs, Home } from "../Pages";

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
        Component: Faqs,
        name: `Faq's`,
    }
];