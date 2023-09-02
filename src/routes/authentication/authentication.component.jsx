import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {

    return (
        <div className="forms-container">
            <SignInForm />
            {/* <h1>Please Sign-in via Google!</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button> */}
            <SignUpForm/>
        </div>
    )
}

export default Authentication;