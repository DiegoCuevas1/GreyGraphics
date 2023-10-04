import React, {useState} from "react";
import axios from "axios";
import './PrintingQuote.css';

function PrintingQuote()
{
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        quantity: "",
        phoneNumber: "",
        selectedOptions:[],
        otherOptionText:"",
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phoneNumber) {
          console.error("Please fill in all required fields.");
          return;
        }
        const formattedOptions = formData.selectedOptions.map((option) => {
          if (option === "Other") {
            return `Other: ${formData.otherOptionText}`;
          }
          return option;
        });
        const optionsList = formattedOptions.join(', ')

        const subject = 'Screen Printing Quote Request';
        const emailBody = `
          Full Name: ${formData.fullName}
          Email: ${formData.email}
          Phone Number: ${formData.phoneNumber}
          Quantity: ${formData.quantity}
          Apparel Types: ${optionsList}
          `;
        const mailtoLink = `mailto:greygraphicsprinting@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(emailBody)}`;
        
          window.location.href = mailtoLink;
        
      };
      

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
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
        const option = "Other";
        
        if (e.target.checked) {
          setFormData((prevData) => ({
            ...prevData,
            selectedOptions: [...prevData.selectedOptions, option],
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            selectedOptions: prevData.selectedOptions.filter((item) => item !== option),
          }));
        }
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
                            required
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
                            required
                          />
                        </div>
                        
                        <div className="inputGroup">
                          <label className="label">Phone Number:</label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="inputField"
                            required
                          />
                        </div>
                        <div className="inputGroup">
                          <label className="label">Quantity:</label>
                          <input
                            type="number"
                            name="quantity"
                            placeholder="0"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            className="quantity"
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
                          <label className="label">
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