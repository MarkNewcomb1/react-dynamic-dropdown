import { useState } from 'react';
import type { ChangeEvent } from 'react';

type Option = {
    value: string;
    label: string;
    description: string;
  };

const options: Option[] = [
    { value: "apple", label: "Apple", description: "A red or green fruit." },
    {
      value: "banana",
      label: "Banana",
      description: "A yellow, peelable fruit.",
    },
    { value: "cherry", label: "Cherry", description: "A small red stone fruit." },
  ];

const DynamicDropdown = () => {
    const [selected, setSelected] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value);
    };
    const selectedOption = options.find(opt => opt.value === selected);

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
        <label htmlFor='fruit-select'>choose a fruit</label>
        <select id='fruit-select' value={selected} onChange={handleChange}>
            <option value="">--please select an option</option>
            {options.map((opt) => (
               <option key={opt.value} value={opt.value}>{opt.label}</option> 
            ))}
        </select>

        {selected && (
            <div style={{ marginTop: "10px", padding: "10px", background: "#f9f9f9" }}>
                <strong>{selectedOption.label}</strong>: {selectedOption.description}
            </div>
        )}
    </div>
  )
}

export default DynamicDropdown;