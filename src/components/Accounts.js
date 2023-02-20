import React from 'react'
//import { connect } from 'react-redux'
import { DELETE_ACCOUNT_ACTION } from '../redux/accounts/accountsActionCreators'
import { useSelector, useDispatch } from 'react-redux'

const Accounts = (props) => {
    
  const accounts = useSelector(state => state.accounts)
  const dispatch = useDispatch()

  const allAccounts = accounts.map((account) => {
        return (
            <h2 key={account.id}>{account.name} <button id='deleteBtn' onClick={() => {dispatch(DELETE_ACCOUNT_ACTION(account.id))}}>Delete</button></h2>
        )
    })

  return (
    <div>
      <h1>Accounts</h1>
      {allAccounts}
    </div>
  )
}

export default Accounts

// Ovako se pisalo bez useSelector i useDispatch
/* const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAccount: (id) => {
            dispatch(DELETE_ACCOUNT_ACTION(id))
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts) */