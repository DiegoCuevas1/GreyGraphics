import {React,useState} from "react";
import axios from "axios";
import "./DesignQuote.css";

function DesignQuote()
{
    const [formData,setFormData] = useState({
        fullName:'',
        email:'',
        phoneNumber:'',
        description:'',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if(!formData.fullName||!formData.email||!formData.phoneNumber)
        {
            console.error("Please Fill in All Required Fields");
        }

        const formDataUpload = new FormData();
        formDataUpload.append('name',formData.fullName);
        formDataUpload.append('email',formData.email);
        formDataUpload.append('phoneNumber',formData.phoneNumber);
        formDataUpload.append('description',formData.description);
        
        try
        {
          const response = await axios.post('http://localhost:5000/send-design',formDataUpload,{
            headers:
            {
              'Content-Type':'application/json  ',
            },
          });
          console.log(response.data);
        }
        catch(error)
        {
          console.error(error)
        }
    }

    return(
        <div className="designQuote">
            <div className="header">
                <h1>Logo Design Quote</h1>
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
                          required
                          className='inputField'
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
                          <label className="label">Description:</label>
                          <textarea
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="description"
                            required
                          />
                        </div>
                    <div className="button">
                      <button type="submit">Submit Quote</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DesignQuote;