import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SideBar from './Sidebar';
import styled from 'styled-components';
import useIsAdmin from '../../hooks/useIsAdmin';
import useGetUserInfo from '../../query/get/useGetUserInfo';

const AdminPage = () => {
    const [selectedItem, setSelectedItem] = useState<string>('회원정보');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const { isAdmin, isUniversityAdmin } = useIsAdmin();
    const { userinfo, error } = useGetUserInfo();

    return (
        <Container>
            <SideBar
                onItemSelect={setSelectedItem}
                onSearch={(query: string) => setSearchQuery(query)}
                userProfile={userinfo}
            />
            <Outlet
                context={{
                    isAdmin,
                    isUniversityAdmin,
                    userinfo,
                }}
            />
        </Container>
    );
};

export default AdminPage;

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 100px 0;
`;