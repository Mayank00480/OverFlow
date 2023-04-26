import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

export default function HomeMainbar() {

    const questionList = useSelector((state) => state.questionReducer)
    console.log(questionList)
    const User = 1;
    const navigate = useNavigate();
    const Location = useLocation()
    const checkAuth = (() => {
        if (User === null) {
            alert('Login or Signup to ask a question')
            navigate('/Login')
        }
        else {
            navigate('/AskQuestion')
        }
    })
    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {Location.pathname === "/" ? (<h1>Top Questions </h1> ): (<h1>All Questions</h1>)}
                <button onClick={checkAuth} className="ask-btn">Ask Questions</button>
            </div>
            <div>
               {
                    questionList === null ? <h1>Loading......</h1> : (<>
                    <p>   {questionList.length} Questions  </p>
                   <QuestionList questionList={questionList} />
                    </>
    )}
            </div>
        </div>
    )
}
