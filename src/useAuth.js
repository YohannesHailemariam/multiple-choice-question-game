import { useState } from "react";


export default function useAuth(initialValue) {
    const [isAuth, setIsAuth] = useState(initialValue);

    function signedin() {
       setIsAuth(true);
    }

    
    function signedout() {
        setIsAuth(false);
    }

    return [isAuth, signedin, signedout];
}