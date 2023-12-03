import { useState, useEffect } from 'react';
import Header from './Header';
import Projectbox from './Projectbox';
import * as P from './ProjectList.style';
import { ProjectEach } from './register/ProjectRegister';
import { projectData } from './projectDummy';
import useInnerWidth from '../../hooks/useInnerWidth';

export interface ProjectAPI {
    uri: string
    ordinal?: number
}

function ProjectList() {
    const data: ProjectEach[] = projectData;
    const [projectApi, setProjectApi] = useState<ProjectAPI>({uri: '/api/v1/project', ordinal: undefined});

    const [pageSize, setPageSize] = useState<number>(12);
    const { innerWidth } = useInnerWidth();

    // api 연동되면 아래 코드를 사용할 예정
    // const {curPageItem, renderPaginationBtn} = useServerSidePagination<ProjectEach>({
    //     uri: projectApi.uri,
    //     size: pageSize,
    // });
    
    // 1024부터는 페이지 사이즈는 6
    useEffect(() => {
        if (innerWidth < 1024) {
            setPageSize(6);
            return;
        }

        setPageSize(12);
    }, [innerWidth]);

    return (
        <P.Container>
            <Header setProjectApi={setProjectApi}/>
            <Projectbox projects={data} />
        </P.Container>
    );
}

export default ProjectList;
