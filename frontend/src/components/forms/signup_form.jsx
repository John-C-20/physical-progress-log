import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { signup } from '../../actions/session_actions';
import PageOne from './signup_form_page1';
import PageTwo from './signup_form_page2';

const SignupForm = (props) => {
    // const dispatch = useDispatch()
    const [initialRender, setInitialRender] = useState(true)
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

    useEffect(() => {
        if (!initialRender) setState({ ...state, errors: errors });
    }, [errors])

    const update = field => {
        return e => setState({...state, [field]: e.currentTarget.value})
    }

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
            {state.page === 1 ? <PageOne state={state} update={update} setState={setState} /> : <PageTwo state={state} update={update} setState={setState} setInitialRender={setInitialRender}/>}
            {renderErrors()}
        </div>
    )
}

export default withRouter(SignupForm)