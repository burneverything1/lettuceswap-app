import React, { useState, useEffect } from 'react'
import locationService from '../services/location'

const LocDisplay = ({ locations }) => {

    const makeLocations = () => {
        let loc_arr = []
        for (let loc in locations) {
            loc_arr.push(<li>{locations[loc]} bid/asks in {loc}</li>)
        }
        return loc_arr
    }

    return (
        <ul>
            {makeLocations()}
        </ul>
    )
}

export default LocDisplay