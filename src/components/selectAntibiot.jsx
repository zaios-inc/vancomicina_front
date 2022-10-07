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
                    defaultValue={colourOptions[0]}
                    isClearable={true}
                    isSearchable={true}
                    name="color"
                    options={colourOptions}
                />
            </Fragment>
        );
    }
}

export default SingleSelect;