import css from "./SearchBox.module.css"
export default function SearchBox({ value, onChange }) { 

    const handleChange = (event) => { 
        onChange(event.target.value)
    }
    
    return (
        <div className={css.searchContainer}>
            <span>Find contacts by name</span>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}