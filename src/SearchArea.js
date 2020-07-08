import React from 'react';

const SearchArea = (props) =>{
  return(
    <div className="search-area">
      <form onSubmit={props.searchBook} action="">
        <input onChange={props.handleSearch} type="text" placeholder="Cosa stai cercando?"/>
        <button type="submit">Clicca qui</button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">Ordine</option>
          <option value="Newest">Dal più recente</option>
          <option value="Oldest">Dal meno recente</option>
        </select>
      </form>
    </div>
  )
}

export default SearchArea;
