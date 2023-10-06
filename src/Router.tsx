import { createBrowserRouter } from 'react-router-dom';
import SignUp from './routes/SignUp';
import Project from './routes/Project';
import Chat from './routes/Chat';
import Root from './routes/root';
import LoginPage from './routes/LoginPage';
import Mypage from './routes/Mypage';
import Recruit from './routes/Recruit';
import UnivPage from './routes/UnivPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path : '/mypage',
                element: <Mypage/>
            },
            {
                path: '/project',
                element: <Project />,
            },
            {
                path: '/chat',
                element: <Chat />,
            },
            {
                path: '/recruit',
                element: <Recruit />,
                children: [],
            },
            {
                path: '/univ',
                element: <UnivPage />,
            },
        ],
    },
]);

export default router;
