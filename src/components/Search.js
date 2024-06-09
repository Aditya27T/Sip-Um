"use client";

const Search = ({ className, type, id, placeholder }) => {
    return (
        <input
            className={className}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    );
}

export default Search;