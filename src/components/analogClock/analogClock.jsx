import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdate } from '../../store/actions/citiesActions'
import Select from '../select/select.jsx'
import './analogClock.scss'

const format = 'YYYY-MM-DDTHH:mm:ss.sss'
const formatDate = utc => {
    return moment().utcOffset(utc).format(format)
}

const AnalogClock = props => {
    const { cities, defaultCity } = props
    const citiesReducer = state => state.citiesReducer
    const [utc, setUtc] = useState(cities[defaultCity].utc)
    const [value, setValue] = useState(new Date(formatDate(utc)))
    const { update } = useSelector(citiesReducer)
    const dispatch = useDispatch()
    const mq = window.matchMedia('(max-width: 576px)')
    const onChange = ev => {
        setUtc(parseInt(ev.target.value))
        dispatch(setUpdate())
    }

    const tick = () => {
        setValue(new Date(formatDate(utc)))
    }

    useEffect(() => {
        tick()
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [update])

    return (
        <div className="analogClock">
            <Clock
                className={'analogClock__clock'}
                value={value}
                hourHandWidth={4}
                hourHandLength={40}
                hourHandOppositeLength={0}
                minuteHandWidth={2}
                minuteHandLength={80}
                minuteHandOppositeLength={0}
                renderMinuteMarks={false}
                size={mq.matches ? 150 : 200}
            />
            <div className="analogClock__time">
                {moment().utcOffset(utc).format('HH:mm:ss').toString()}
            </div>
            <Select
                className={'analogClock__select'}
                options={cities}
                defaultCity={defaultCity}
                onChange={onChange}
            />
        </div>
    )
}

export default AnalogClock
