import React from 'react';
import { Label, Input, FilterWrap} from "./filter.styled"

export const Filter = ({value, onChange}) => {
    return (
        <FilterWrap>
            <Label>Find contacts by name </Label>
             <Input 
             type="text"
             name="filter"
             value={value}
             onChange={onChange} />
        </FilterWrap>
    )
}