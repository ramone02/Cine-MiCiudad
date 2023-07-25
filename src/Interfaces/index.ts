export interface MyRoute {
    to: string;
    name: string;
};

export interface NavbarProps{
    routes: Array<MyRoute>;
}