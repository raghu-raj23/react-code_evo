import React, { useState, useCallback } from 'react'
import L16_CBButton from './L16_CBButton'
import L16_CBCount from './L16_CBCount'
import L16_CBTitle from './L16_CBTitle'

function L16_CBParentComp() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)}, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <L16_CBTitle />
            <L16_CBCount text = "Age" count = {age}/>
            <L16_CBButton handleClick={incrementAge}>Increment Age</L16_CBButton>
            <L16_CBCount text = "Salary" count = {salary}/>
            <L16_CBButton handleClick={incrementSalary}>Increment Salary</L16_CBButton>
        </div>
    )
}

export default L16_CBParentComp

// usecallback is used to optimise the react memoization even further by caching the dependencies and hence the performance is increased as the number of unrelated re-reders are reduced.
