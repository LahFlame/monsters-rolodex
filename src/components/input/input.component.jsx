import "./input.styles.css"

export const Input = ({placeholder,handleChange}) => {
    return(
        <div>
            <input 
                type="search" 
                placeholder={placeholder} 
                className="search"
                onChange={handleChange}
            />
        </div>
    )
}