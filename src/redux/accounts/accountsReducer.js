import initState from "./initState";
import { DELETE_ACCOUNT } from "./accountsActionTypes";

const accountsReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_ACCOUNT:
            return {
              ...state,
                accounts: state.accounts.filter(account => account.id!== action.payload.id)
            }
        default: return state;
    }
}

export default accountsReducer;