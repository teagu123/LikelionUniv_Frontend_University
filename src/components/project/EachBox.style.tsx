import styled from 'styled-components';

interface BoxProps {
    clicked: boolean;
}

export const Box = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: 16px 0;
    box-sizing: border-box;
`;

export const SubBox = styled.div<{ width: number, url: string }>`
    position: relative;
    width: 100%;
    height: 216px;
    box-sizing: border-box;
    background-image: url(${props => props.url});

    @media screen and (max-width: 768px) {
        height: calc(${props => props.width} * 0.53px);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        height: calc(${props => props.width} * 0.2529px);
    }

    @media screen and (min-width: 1025px) and (max-width: 1280px) {
        height: calc(${props => props.width} * 0.16875px);
    }

    &:hover {
        cursor: pointer;
    }
`;

export const BlackBox = styled.div<BoxProps>`
    height: 21px;
    padding: 4px 12px;

    color: ${props => (props.clicked ? '#FFFFFF' : '#FFFFFF')};

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    line-height: 150%; /* 21px */
    background: ${props => (props.clicked ? '#FF7710' : '#000000')};
    &:hover {
        cursor: pointer;
    }
`;

export const SmallBox1 = styled.div<BoxProps>`
    width: 100%;
    height: 100%;
    color: ${props => (props.clicked ? '#FF7710' : '#000000')};

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 39.2px */

    &:hover {
        cursor: pointer;
    }
`;

export const SmallBox2 = styled.div<BoxProps>`
    display: flex;
    gap: 16px;
    width: 100%;
    height: 48px;
    color: ${props => (props.clicked ? '#FF7710' : '#000000')};

    /* Body/16_Medium_150 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */

    &:hover {
        cursor: pointer;
    }
`;

export const SmallBox3 = styled.div`
    width: 100%;
    background-color: #ffffff;
    color: var(--Grey-700, #868c94);

    gap: 6;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */

    &:hover {
        cursor: pointer;
    }
`;
