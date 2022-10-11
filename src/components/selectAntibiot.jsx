import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { colourOptions } from './data';
import { enable } from './enable';



class SingleSelect extends Component {


    render() {
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
}

export default SingleSelect;
