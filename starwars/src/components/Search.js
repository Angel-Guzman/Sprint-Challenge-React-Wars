import React from 'react'

function Search({ setSearch }) {

    const changeHandler = event  => {
        const search = event.target.value
        setSearch(search)
    }
    
    return (
    <form>
        <input onChange={changeHandler} type='text' placeholder='Search' />
    </form>
    )
}

export default Search;