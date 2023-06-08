import React,{useState, useEffect} from 'react';

// Задача: написать счетчик, который будет инкрементироваться на определенный шаг заданное кол-во миллисекунд

// Интерфейс от которого нужно наследовать компонент
interface ICounter {
    step: number;
    delay: number;
}

const App: React.FC = (step, delay) => {

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(step)
        }, delay)
        return () => clearInterval(timer)>
    },[])

    return (
        <div>
            <div>{seconds}</div>
            
        </div>
    );
}

export default App;