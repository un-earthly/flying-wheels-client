import React from 'react'
import Navbar from '../../SharedComponents/Navbar'
const Question = ({ question, answer, no }) => {
    return (
        <div className="card lg:w-1/2 mx-auto text-left w-full border-neutral">
            <div className="card-body p-3">
                <h2 className="text-gray-300 duration-500 capitalize">Question : {no}</h2>
                <p className='text-gray-400 capitalize'>{question}</p>
                <div className="card-actions text-xl text-gray-700">
                    {answer}
                </div>
            </div>
        </div>
    )
}
export default function Blogs() {
    return (
        <div>

            <div className="bg-black">
                <Navbar />
            </div>
            <Question question='How will you improve the performance of a React Application?'
                answer='React Renders Its Components using diff algorithom and keeps track using virtual dom,the process is called diffing.which speeds up ui render time.we can improve performance using use memo hook,lazy loading,list virtalization,Code-splitting ' key='1' no='1' />
            <Question question='What are the different ways to manage a state in a React application?'
                answer='React has many different types of state.Like Local state ,Global state, Server state ,URL state.there are many ways to handle them.we have third parties like redux Zustand, Jotai, and Recoil etc.useReducer and context api can also be used for managing state for global state management.for server side state managment we have swr and react query also useeffect along with usestate hook.for url state we can use useparams, usehstory uselocation etc ' key='2' no='2' />
            <Question question='How does prototypical inheritance work?'
                answer="Suppose we have two objects, x and y. x is the parent of y.x has some properties that need to be accessed from y.to get those properties js chains through all the properties of x and inherits x's to y and gets those properties from x and extends to y.now y has all its properties along with properties that x inherits to y.y now got properties of x using inheritance.That's how prototypical inheritance works in js." key='3' no='3' />
            <Question question='Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts'
                answer="in react, states are immutable. which means they cant be updated directly. if we try to mutate a state, it might cause unusual bugs. if we try to set the state directly, the state will be set, but it won't render in the UI. because react states are referenced and based on the reference it updates the UI. but if we set the state directly it will modify the state but the reference wouldn't change. that's why use set state." key='4' no='4' />
            <Question question='You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?'
                answer="The easiest way to solve this would be using js array filter method.filter method takes a callback and based on the condition it returns a new sorted array based on the filter was provided in the callback.i will use this method.products.filter(p => p.name.includes(name))" key='5' no='5' />
            <Question question='What is a unit test? Why should write unit tests?'
                answer='Unt test is the process to findout whether the functionaly of the code is doing fine.if we develop a application,we have to ensure whether a user can use it or not.thats why we broke the application in modules,components, and then try to check whether its working or not.if its working then we understand the application is working fine,if dosent we can always find the bugs.' key='6' no='6' />

        </div>
    )
}
