import HomeWrapper from "../pages/HomeWrapper";

export const routes = [
    {
        path: '/',
        element: <HomeWrapper />
    },
    {
        path: '*',
        element: <div>Error 404</div>
    },

]