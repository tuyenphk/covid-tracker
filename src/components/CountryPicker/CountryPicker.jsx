import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'

import {countries} from '../../api'

export const CountryPicker = () => {
    const [fetchedCountries, setFetchesCountries] = useState([]);

    useEffect(()=>{
        const fetchCountries = async() =>{
            setFetchesCountries(await countries);
        }
        fetchCountries();
    },[setFetchesCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;