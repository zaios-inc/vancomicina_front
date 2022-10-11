import React, { Fragment } from 'react';
import Select from 'react-select';
import { colourOptions } from './data';



function SingleSelect({ enable }) {


    return (
        <Fragment>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                isClearable={true}
                isSearchable={true}
                isDisabled={enable}
                name="color"
                options={colourOptions}
            />
        </Fragment>
    );
}

export default SingleSelect;
