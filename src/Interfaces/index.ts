export interface Route {
    to: string;
    path: string;
    Component: React.ElementType;
    name: string;
};

export interface NavbarProps{
    routes: Array<Route>;
}