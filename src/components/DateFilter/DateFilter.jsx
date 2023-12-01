import React, { useEffect, useState } from 'react';
import * as DF from './DateFilterStyle';
import { FaCalendarAlt } from 'react-icons/fa';

function DateFilter() {
    return (
        <DF.FilterContainer>
            <DF.DropDownWrapper>
            <DF.DropdownMenu>
                <option value="전체">All</option>
                <option value="주간">Week</option>
                <option value="월간">Month</option>
            </DF.DropdownMenu>
            <DF.CustomCalendarIcon />
            </DF.DropDownWrapper>
            
        </DF.FilterContainer>
    );
}

export default DateFilter;
