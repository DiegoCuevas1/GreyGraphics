import { useState } from 'react';
import { useForm } from '@formspree/react';
import toast from 'react-hot-toast';

type FormValues = {
    tshirt: boolean;
    hoodies: boolean;
    longsleeve: boolean;
    crewneck: boolean;
    other: boolean;
    f_name: string;
    email1: string;
    phone: string;
    quantity:string;
  };

function FormComponent() {
    const [checkboxes, setCheckboxes] = useState({
        tshirt: false,
        hoodies: false,
        longsleeve: false,
        crewneck: false,
        other: false,
      });
      
     const [formData, setFormData] = useState<FormValues>({
        f_name: '',
        email1: '',
        phone: '',
        tshirt: false,
        hoodies: false,
        longsleeve: false,
        crewneck: false,
        other: false,
        quantity:''
      });
    
    const fData = {
        f_name:formData.f_name,
        email:formData.email1,
        phone:formData.phone,  
        quantity:formData.quantity,      
    }
      const [state, handleSubmit] = useForm("xjvqdvvz",{
        data:
        {
            full_name:fData.f_name,
            email:fData.email,
            phone:fData.phone,
            quantity:fData.quantity,
        }

    });
    if (state.succeeded) {
        return (
            <div className='flex'>
                <p>Thanks for Submitting a Quote!</p>
            </div>
        );
    }
    else if(state.errors)
    {
        toast.error('There was an Error!')
    }

    const handleCheckboxChange = (name: keyof FormValues, checked: boolean) => {
        setCheckboxes(prevState => ({
          ...prevState,
          [name]: checked,
        }));
      };
      
    
      const handleInputChange = (e: any) => {
        const { name, value} = e.target;

        let newValue = value;

        setFormData({ ...formData, [name]: newValue });
    };
    
    return (
        <div className="flex">
            <form method='POST' onSubmit={handleSubmit} className="flex flex-col space-y-2 md:mx-auto">
             {PageOne()}

            {(PageTwo())}
            <button
                        className="w-36 h-12 mx-auto text-white hover:bg-gray-700 active:bg-gray-800 active:scale-95 bg-gray-400"
                        type='submit'
                        >
                           Submit
                    </button>
            </form>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Email Address
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form> */}
        </div>
     )
    function PageOne()
    {
        return(<div className="grid grid-cols-10 space-y-4 ">
        <div className="col-start-2 col-end-8 flex flex-col ">
            <label className="text-xl text-gray-500">
                Full Name<span className="text-red-500">*</span>:
            </label>
            <input 
                type="text"
                name="f_name"
                placeholder="Full Name"
                className="border-2 bg-gray-100 text-gray-600 border-gray-300 w-60 md:w-96 p-1 rounded-[12px]"
                onChange={handleInputChange}
                value={formData.f_name}
                required   
            />
        </div>
        
        <div className="col-start-2 col-end-8 flex flex-col">
            <label className="text-xl text-gray-500">
                Email<span className="text-red-500">*</span>:
            </label>
            <input 
                type="text"
                name="email1"
                placeholder="Email"
                className="border-2 bg-gray-100 text-gray-600  border-gray-300 w-60 md:w-96 p-1 rounded-[12px]"
                onChange={handleInputChange}
                value={formData.email1}
                required   
            />
        </div>
        <div className="col-start-2 col-end-8 flex flex-col">
            <label className="text-xl text-gray-500">
                Phone Number<span className="text-red-500">*</span>:
            </label>
            <input 
                type="tel"
                name="phone"
                placeholder="(123) 456-7890"
                className="border-2 bg-gray-100 text-gray-600  border-gray-300 w-60 md:w-96 p-1 rounded-[12px]"
                onChange={handleInputChange}
                value={formData.phone}
                required   
            />
        </div>
        
       </div>)
    }

    function PageTwo()
    {
        return(
            <div className='grid grid-cols-10 space-y-2'>
                {(<>
                 <div className='col-start-2 col-end-10 flex flex-col'>
                    <label className='text-gray-500'>
                       Quantity:
                    </label>
                    <input 
                        type='number'
                        name='quantity'
                        placeholder='1'
                        min={1}
                        className="w-16 bg-gray-100 text-gray-600  text-center border-2 border-grey p-[5px] rounded-[12px]"
                    />
                 </div>
                 <div className='col-start-2 col-end-10 flex flex-col space-y-2 '>
                    <label className='text-gray-500'>
                        Apparel Type (min 1)<span className='text-red-500'>*</span>:
                    </label>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center space-x-1'><input 
                        id='t-shirts'
                        type='checkbox'
                        name='tshirt'
                        className="checkbox bg-gray-300 border-gray-300"
                        checked={checkboxes.tshirt}
                        onChange={(e)=> handleCheckboxChange('tshirt',e.target.checked)}
                    /><p className='text-gray-500'>T-Shirts</p></div>
                    <div className='flex items-center space-x-1'><input 
                        id='hoodies'
                        type='checkbox'
                        name='hoodies'
                        className="checkbox bg-gray-300 border-gray-300"
                        checked={checkboxes.hoodies}
                        onChange={(e)=> handleCheckboxChange('hoodies',e.target.checked)}
                    /><p className='text-gray-500'>Hoodies</p></div>
                    <div className='flex space-x-1 items-center'><input 
                        id='longsleeve'
                        type='checkbox'
                        name='longsleeve'
                        className="checkbox bg-gray-300 border-gray-300"
                        checked={checkboxes.longsleeve}
                        onChange={(e)=> handleCheckboxChange('longsleeve',e.target.checked)}
                    /><p className='text-gray-500'>Long Sleeves</p></div>
                    <div className='flex space-x-1 items-center'><input 
                        id='crewneck'
                        type='checkbox'
                        name='crewneck'
                        className="checkbox bg-gray-300 border-gray-300"
                        checked={checkboxes.crewneck}
                        onChange={(e)=> handleCheckboxChange('crewneck',e.target.checked)}
                    /><p className='text-gray-500'>Crewneck Sweatshirts</p></div>
                    <div className='flex space-x-1 justify-center items-center'><input 
                        id='other'
                        type='checkbox'
                        name='other'
                        className="checkbox bg-gray-300 border-gray-300"
                        checked={checkboxes.other}
                        onChange={(e)=> handleCheckboxChange('other',e.target.checked)}
                    /><p className='text-gray-500 text-center'>Other</p></div>

                    </div>
                 </div>
                </>)}
                <div className='col-start-2 col-end-10 flex flex-col'>
                    <label className='text-gray-500' htmlFor='desc'>
                        Description:
                    </label>
                    <input 
                        id='desc'
                        type='text'
                        name='description'
                        placeholder='Description to help us curate your vision...'
                        className="h-[100px] bg-gray-100 text-gray-600  border-2 border-grey p-[5px] rounded-[12px]"
                    />
                 </div>
            </div>
        )} 
    

    }
    export default FormComponent;