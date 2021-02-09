import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NotifiAddUserAction } from 'redux/actionCreator/NotifiAction'
import { UserSearchAction } from 'redux/actionCreator/UserSearchAction'

const SearchUserForm = (props) => {
    const [results, setSesults] = useState([])

    useEffect(() => {
        setSesults(props.SearchResult)
    }, [props.SearchResult])

    const changeHandle = (event) => {
        const { value } = event.target
        if(value.length > 2) props.UserSearchActionDispatch(value)
    }
    const clickHandle =(user) =>{
        let obj = props.users.find(o => o.id === user.id);
        if(obj){
            alert('name already exist in receipient')
        }else{
            props.NotifiAddUserActionDispatch([...props.users, {'id' : user.id,'name' : `${user.userable.id}) ${user.name} (${user.userable.std.name} ${user.userable.std.section})`, 'avatar' : user.avatar}])
        }
    }
    return (
        <>
            <input
                onChange={changeHandle}
                type="text"
                name='search'
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-200 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                placeholder="Search ... .i.e. VI Rahul"
            />
            <div className='mt-2'>
                {results?.length > 0 && results.map(result => (result.userable_type === "App\\Models\\Student" ? <span onClick={() =>clickHandle(result)} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                    {result?.name} ({result?.userable?.std?.name}-{result?.userable?.std?.section})
                </span> : <span onClick={() =>clickHandle(result)} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-red-200 uppercase last:mr-0 mr-1">
                        {result.name}
                    </span>))}
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    const SearchResult = state.UserSearchReducer;
    const Notifi = state.NotifiReducer;
    return {
      users : Notifi.users,
       SearchResult: SearchResult.searchResult,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      NotifiAddUserActionDispatch:(state) => dispatch(NotifiAddUserAction(state)),
      UserSearchActionDispatch: (state) => dispatch(UserSearchAction(state))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchUserForm)