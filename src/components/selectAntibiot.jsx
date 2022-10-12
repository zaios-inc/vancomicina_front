import React, { Fragment, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
const Swal = require('sweetalert2');

function SingleSelect({ enable }) {

  const [antibiotics, setAntibiotic] = useState([])
  const [selectedOption, setOption] = useState('');

  useEffect(() => {
    const fetchData =  () => {
      axios.get('/patient/getAntibiotics').then(res => {
        setAntibiotic(res.data)
        console.log(antibiotics)
      })
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleChange(selectedOption) {
    setOption(selectedOption)
    axios.post('/patient/getRecomend', { name: selectedOption.value }).then(res => {
      Swal.fire({
          title: res.data,
          icon: 'info'
      })
    })
  }

  return (
    <Fragment>
      <Select
        value={selectedOption}
        onChange={handleChange}
        className='basic-single'
        classNamePrefix='select'
        defaultValue={antibiotics[0]}
        isSearchable={true}
        isDisabled={enable}
        name='color'
        options={antibiotics}
      />
    </Fragment>
  );
}

export default SingleSelect;
