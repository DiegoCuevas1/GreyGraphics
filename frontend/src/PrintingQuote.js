import React, {useState} from "react";
import './PrintingQuote.css';

function PrintingQuote()
{
    const [isOtherSelected, setIsOtherSelected] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        quantity: "",
        phoneNumber: "",
        file: null,
        selectedOptions:[],
        otherOptionText:"",
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append('file', formData.file);
        data.append('fullName', formData.fullName);
        data.append('email', formData.email);
        data.append('quantity', formData.quantity);
        data.append('phoneNumber', formData.phoneNumber);
      
        formData.selectedOptions.forEach(option => {
          if (option !== "Other") {
            data.append('selectedOptions', option);
          } else if (isOtherSelected) {
            data.append('selectedOptions', `Other: ${formData.otherOptionText}`);
          }
        });
      
        console.log(formData);
        // ... Additional code for handling form data
      };
      

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          file: e.target.files[0],
        }));
      };
    
      
      const handleCheckboxChange = (e) => {
        const option = e.target.value;
        if (formData.selectedOptions.includes(option)) {
          setFormData((prevData) => ({
            ...prevData,
            selectedOptions: prevData.selectedOptions.filter((item) => item !== option),
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            selectedOptions: [...prevData.selectedOptions, option],
          }));
        }
      };

      
      const handleOtherCheckboxChange = (e) => {
        const value = e.target.value;
        console.log(value); // Log the value of the "Other" checkbox
        // Rest of your logic for handling the "Other" checkbox
      };
      
      
      
    
    const handleOtherOptionTextChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          otherOptionText: value,
        }));
        console.log(formData.otherOptionText)
    };


    return(
        <div className="printingQuote">
            <div className="header">
                <h1>Screen Printing Quote</h1>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="inputGroup">
                          <label className="label">Full Name:</label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="inputField"
                          />
                        </div>
                        
                        <div className="inputGroup">
                          <label className="label">Email:</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="inputField"
                          />
                        </div>
                        
                        <div className="inputGroup">
                          <label className="label">Phone Number:</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="inputField"
                          />
                        </div>
                        
                        <div className="options">
                          <div className="checkboxGroup">
                            <label>Apparel Type(s):</label>
                              <div className="gridContainer">
                               <label>
                                <input 
                                    type="checkbox"
                                    name="selectedOptions"
                                    value="T-Shirts"
                                    checked={formData.selectedOptions.includes("T-Shirts")}
                                    onChange={handleCheckboxChange}
                                />
                                T-Shirts
                                </label>

                                <label>
                                <input 
                                type="checkbox"
                                name="selectedOptions"
                                value="Long Sleeves"
                                checked={formData.selectedOptions.includes("Long Sleeves")}
                                onChange={handleCheckboxChange}
                                />
                                Long Sleeves
                                </label>
                                <label>
                                <input 
                                type="checkbox"
                                name="selectedOptions"
                                value="Crewnecks"
                                checked={formData.selectedOptions.includes("Crewnecks")}
                                onChange={handleCheckboxChange}
                                />
                                Crewnecks
                                </label>
                                
                                <label>
                                <input 
                                type="checkbox"
                                name="selectedOptions"
                                value="Hoodies"
                                checked={formData.selectedOptions.includes("Hoodies")}
                                onChange={handleCheckboxChange}
                                />
                                Hoodies
                                </label>
                                <label>
                                <input
                                type="checkbox"
                                name="selectedOptions"
                                value="Zip-Ups"
                                checked={formData.selectedOptions.includes("Zip-Ups")}
                                onChange={handleCheckboxChange}
                                />
                                Zip-Ups
                                </label>
                                <label>
                                <input 
                                type="checkbox"
                                name="selectedOptions"
                                value="Hats"
                                checked={formData.selectedOptions.includes("Hats")}
                                onChange={handleCheckboxChange}
                                />
                                Hats
                                </label>
                                </div>
                      </div>
                      <div className="otherCheckbox">
                          <label>
                              <input 
                              type="checkbox"
                              name="selectedOptions"
                              value="Other"
                              checked={formData.selectedOptions.includes("Other")}
                              onChange={handleOtherCheckboxChange}
                              />
                              Other:
                          </label>
                          <input
                              type="text"
                              name="otherOptionText"
                              value={formData.otherOptionText}
                              onChange={handleOtherOptionTextChange}
                              className="textBox"
                          />
                        </div>
                        <button type="submit">Submit Quote</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default PrintingQuote;