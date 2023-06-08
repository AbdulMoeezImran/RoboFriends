import { /*ChangeEvent,*/ ChangeEventHandler } from "react";

type SearchBoxProps = {
    searchChange: ChangeEventHandler<HTMLInputElement>;
    // searchChange: (event: ChangeEvent<HTMLInputElement> => void);
};

const SearchBox = ({ searchChange }: SearchBoxProps) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg--lightest-blue" type="search" placeholder='Search robots' onChange={searchChange} />
        </div>
    );
};

export default SearchBox;
