import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { colourOptions } from './data';


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
                    isDisabled={true}
                    name="color"
                    options={colourOptions}
                />
            </Fragment>
        );
    }
}

export default SingleSelect;
