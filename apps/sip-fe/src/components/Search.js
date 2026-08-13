"use client";

const Search = ({ className, type, id, placeholder, value, onChange }) => {
    return (
        <input
            className={className}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Search;