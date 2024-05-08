export const validateEmail = (email) => {
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if(!emailValid) return "Email is not valid";
    return null
}

export const validatePassword = (password) =>{
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if(!passwordValid) return "Password is not valid";
    return null
}

export const validateUserName = (username) =>{
    const usernameValid = /^[a-zA-Z0-9_-]{3,16}$/.test(username);
    if(!usernameValid) return "UserName is not valid"
    return null;
}