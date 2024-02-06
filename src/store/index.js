import { createStore } from 'redux';


const passwordReducer = (state= {showforgotpassword:false,showpassword:false}, action) => {
    
    // Forgot password section
    if (action.type === 'forgotpassword'){
        return {
            showforgotpassword: true,
            showpassword:state.showpassword
        }
    }
    if (action.type === 'return'){
        return {
            showforgotpassword: false,
            showpassword:state.showpassword
        }
    }
    // Show and Hide Icon
    if (action.type === 'showpassword'){
        return {
            showforgotpassword:state.showforgotpassword,
            showpassword: true
            
        }
    }
    if (action.type === 'hidepassword'){
        return {
            showforgotpassword:state.showforgotpassword,
            showpassword: false
        }
    }
    return state;
};

const store = createStore(passwordReducer);

export default store;
