import React from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ResetPassword(){

    const [resetEmail,setResetEmail] = React.useState('')

    function handlePasswordReset(){
        console.log('reset mail: ',resetEmail)
        const auth = getAuth();
        sendPasswordResetEmail(auth,resetEmail)
        .then(() => {
            alert('password reset mail sent')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div style={{marginTop: '10rem'}} className="mx-auto flex my-16 max-w-lg items-center justify-center text-black login-container py-3">
           <div className="flex w-full flex-col space-y-10 px-5">

                <div className="text-4xl font-medium">Reset Password</div>
                <div className="w-full">
                <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                >
                Email
                </label>
                <input
                    value={resetEmail}
                    onChange={(event) => setResetEmail(event.target.value)}
                    className="appearance-none block w-full  text-gray-700 border-2 border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
                    id="email"
                    name="email"
                    type="email"
                />

                <div className="mt-4">
                    Message containing the steps to reset password will be sent to the enetered address
                </div>

            <button
                onClick={handlePasswordReset}
                className="w-full text-white rounded-sm bg-indigo-500 py-2 font-bold duration-300 hover:bg-indigo-700 sign-button"
             >
                Send Mail
            </button>

                </div>
            </div>
        </div>
    )
}