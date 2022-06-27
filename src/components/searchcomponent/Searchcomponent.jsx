import { useState } from "react";

export const Searchcomponent = (item) => {
    const [searchdata, setSearchdata] = useState("")

    function handleClick() {
        if (item.name === searchdata)
        console.log(searchdata)
    }

    return (
        <form>
            <input
          onChange={(e) => {
              setSearchdata(e.target.value);
            }}
            type="search"
            placeholder="Search temtem"
            />
            <button onClick={handleClick}>Search</button>
      </form>
    )
}