import React from 'react'

const Multiplicacao = (props) => {
    return (
        <div>
            <h1>O resultado da multiplicação de {props.num1} * {props.num2}: {props.num1 * props.num2}</h1>
        </div>
    )
}

export default Multiplicacao