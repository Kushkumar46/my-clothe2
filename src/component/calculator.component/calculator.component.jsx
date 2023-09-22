import { useContext } from 'react'
import { Cal } from '../../context.component/calculator.context'
import './calculator.styled.scss'

const json = [
    {
        id: '1',
        count: 1
    },
    {
        id: '2',
        count: 2
    },
    {
        id: '3',
        count: 3
    },
    {
        id: '4',
        count: '+'
    },
    {
        id: '5',
        count: 4
    },
    {
        id: '6',
        count: 5
    },
    {
        id: '7',
        count: 6
    },
    {
        id: '8',
        count: '-'
    },

    {
        id: '9',
        count: 7
    },
    {
        id: '19',
        count: 8
    },
    {
        id: '11',
        count: 9
    },
    {
        id: '12',
        count: '*'
    },
    {
        id: '13',
        count: 0
    },
    {
        id: '14',
        count: '/'
    },
    {
        id: '15',
        count: '='
    },
]






const Calculator = () => {

    const click=(couter)=>{
        Setfunction(couter)
     }


    const {count, Setfunction, roman, addroman}=useContext(Cal)

    console.log(count)

     Event=((Event)=>{
        var put=Event.target.value
        addroman(put)
    
     })


    return (
        <div>
        <div className='parent'>
            <div className='output'>
                <span placeholder='NAN'>{count}</span>
            </div>
            <div className="parent_calculatoe">
                {json.map((couter) => {
                    const {id, count}=couter
                    return <div key={id} className="all contain">
                        <div>                                                                                                                                                                                                                                
                            <button onClick={()=>click(couter)} className='button'>{count}</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className='romanparent'>
            <div className='divroman'>
                <h1>{roman}</h1>
            </div>
            <label>Roman=:</label>
            <input type='text' onChange={Event}></input>
        </div>
        </div>
    )
}
export default Calculator