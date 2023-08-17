import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

function Dropdown({ options, id, label, prompt, value, onChange }) {

    console.log(options);

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);

    const close = (e) => {
        // console.dir([e.target, ref.current]);
        setOpen(e && e.target === ref.current);
    }

    const filter = (options) => {
        return options.filter((option) => 
            option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }

    const displayValue = () => {
        if(query.length > 0) return query;
        if(value) return value[label];
        return "";
    }

    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, []);

    return (
        <div className="dropdown">
            <div className="control" onClick={() => setOpen(prev => !prev)}>
                <div className="selected-value" >
                    <input 
                        type="text"
                        ref={ref} 
                        placeholder={ value ? value[label] : prompt }
                        value={displayValue()}
                        onChange={e => {
                            setQuery(e.target.value)
                            onChange(null)
                        }}
                        onClick={() => {
                            setOpen(prev => !prev)
                        }}
                    />
                </div>
                <div className={`arrow ${open ? "open" : null}`} />
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {
                    filter(options).map((option) => (
                        <div 
                            key={option[id]}
                            className={`option ${value === option ? "selected" : null}`}
                            onClick={() => {
                                setQuery("");
                                onChange(option);
                                setOpen(false);
                            }}
                        > { option[label] } </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown;
