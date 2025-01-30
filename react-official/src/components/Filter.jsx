import React, { useState } from 'react';

const Filter = () => {
    const data = {
        Fruits: ["Apple", "Banana", "Mango"],
        Vegetables: ["Carrot", "Broccoli", "Spinach"],
        Drinks: ["Coke", "Pepsi", "Water"],
    };
    const [category, setCategory] = useState(""); // First filter (Category)
    const [options, setOptions] = useState([]); // Second filter options
    const [selectedOption, setSelectedOption] = useState(""); // Selected option in second filter

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        setOptions(data[selectedCategory] || []);
        setSelectedOption("");
    }

    return (
        <div className='p-4 space-y-4'>
            <label className='block'>Select Category:</label>
            <select
                className='border p-2'
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="">--Select--</option>
                {Object.keys(data).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <label className='block'>Select Option:</label>
            <select
                className='border p-2'
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                disabled={!options.length}
            >
                <option value="">--Select--</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            {selectedOption && (
                <p className="mt-4">You selected: {selectedOption}</p>
            )}
        </div>
    )
}

export default Filter