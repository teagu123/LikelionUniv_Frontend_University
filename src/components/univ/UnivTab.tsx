import { useState, useCallback, Suspense, startTransition } from 'react';
import * as T from './UnivTabStyle';
import default_image from '../../img/univ/_default.png';
import { regionTab } from './UnivTabData';
import useGetLocationUniv from '../../query/get/useGetLocationUniv';
import { IUniversity } from '../../query/get/useGetLocationUniv';

const Tab = () => {
    const [activeTab, setActiveTab] = useState<string>('전체');
    const universities: IUniversity[] = useGetLocationUniv({ activeTab });

    const onTabClick = useCallback((tab: string) => {
        startTransition(() => {
            setActiveTab(tab);
        });
    }, []);

    const popupUnivSite = (siteUrl?: string): void => {
        if (siteUrl) {
            window.open(siteUrl, '_blank');
        }
        // Add any other actions you want to perform if there is no website link.
    };

    const onButtonClick = (): void => {
        window.open('https://forms.gle/j4CJ35VwWgePBEJX6');
    };

    return (
        <T.Container>
            <T.Content>
                {/* 지역 탭 부분 */}
                <T.TabWrapper>
                    {regionTab.map(tab => (
                        <T.TabRegion
                            key={tab}
                            active={activeTab === tab}
                            onClick={() => onTabClick(tab)}
                        >
                            {tab}
                        </T.TabRegion>
                    ))}
                </T.TabWrapper>

                {/* 학교명  */}
                <Suspense fallback={<div>로딩중..</div>}>
                    <T.SchoolWrapper>
                        {universities?.map((university, index) => (
                            <T.TabContent
                                key={index}
                                onClick={() =>
                                    popupUnivSite(university.recruitUrl)
                                }
                            >
                                <T.SchoolLogo>
                                    <img
                                        src={university.image || default_image}
                                        alt={university.universityName}
                                    />
                                </T.SchoolLogo>
                                <T.SchoolText>
                                    {university.universityName}
                                    <div>{university.location}</div>
                                </T.SchoolText>
                            </T.TabContent>
                        ))}
                    </T.SchoolWrapper>
                </Suspense>

                {/* 참여 버튼  */}
                <T.BtnWrapper>
                    <div>우리 학교에는 아직 멋쟁이사자처럼이 없다면?</div>
                    {/* <T.Btn onClick={onButtonClick}>
                        우리 학교도 멋쟁이사자처럼 참여하기
                        <img src={BtnArrow} alt="버튼화살표" />
                    </T.Btn> */}
                    <T.Btn>13기 참여 대학 모집을 기다려주세요!</T.Btn>
                </T.BtnWrapper>
            </T.Content>
        </T.Container>
    );
};

export default Tab;
