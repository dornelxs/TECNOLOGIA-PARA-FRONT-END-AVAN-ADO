import React from 'react'
import Adicao from './components/Adicao'
import Multiplicacao from './components/Multiplicacao'
import Subtracao from './components/Subtracao'
import Divisao from './components/Divisao'


const App = () => {
    return (
        <div>
            <Adicao num1={2} num2={2} />
            <Multiplicacao num1={7} num2={2} />
            <Subtracao num1={5} num2={2} />
            <Divisao num1={100} num2={2} />
        </div>
    )
}

export default App