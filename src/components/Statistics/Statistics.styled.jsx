import styled from 'styled-components';

export const StatisticsList = styled.ul`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 15px;
    list-style: none;
`;

export const StatisticsItem = styled.li`
    font-size: 20px;

    &:last-child {
        font-size: 25px;
        font-weight: 600;
    }
`