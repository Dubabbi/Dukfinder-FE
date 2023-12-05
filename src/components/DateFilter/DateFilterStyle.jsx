import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 6px;
`;

export const DropdownMenu = styled.select`
    margin-right: 10px;
    border: none;
    font-size: 14px;
    position: absolute;
    left: 20px;
    top: 8px;
    width: auto;
`;

export const CustomCalendarIcon = styled(FaCalendarAlt)`
    position: relative;
    font-size: 14px;
    left: 5px;
`;

export const DropDownWrapper = styled.div`
    margin-left: 10px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 2px solid #FFE665;
    height: 35px;
    width: 100px;
    border-radius: 10px;
    
`;