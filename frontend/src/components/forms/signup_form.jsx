import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { signup } from '../../actions/session_actions';
import PageOne from './signup_form_page1';
import PageTwo from './signup_form_page2';

const SignupForm = (props) => {
    // const dispatch = useDispatch()
    const signedIn = useSelector(state => state.session.isSignedIn)
    const errors = useSelector(state => state.errors.session)

    const [state, setState] = useState({
        email: '',
        password: '',
        password2: '', 
        name: '', 
        height: '',
        weight: '',
        age: '',
        page: 1,
        errors: {} 
    })

    const update = field => {
        return e => setState({...state, [field]: e.currentTarget.value})
    }

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const user = {
    //         email: state.email,
    //         password: state.password,
    //         password2: state.password2,
    //         name: state.name,
    //         age: state.age,
    //         height: state.height,
    //         weight: state.weight
    //     }
    //     dispatch(signup(user))
    // }

    const renderErrors = () => {
        return(
            <ul>
                {Object.keys(state.errors).map((error,i) => (
                    <li key={`error-${i}`}>
                    {state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="signup-form-container">
            {state.page === 1 ? <PageOne state={state} update={update} setState={setState} /> : <PageTwo state={state} update={update}/>}
            {renderErrors()}
        </div>
    )
}

export default withRouter(SignupForm)