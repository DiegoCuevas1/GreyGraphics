import FormComponent from "./form";

function Quotes() {
return (
    <div className="flex mb-6 flex-col">
        <h2 className="mx-auto text-black text-4xl font-medium ">Quotes</h2>
        <div className="w-96 mx-auto space-y-4 px-4 border-2 border-gray-900 rounded-md md:w-[50%]">
            <h3 className="mx-auto text-center text-black text-4xl font-light ">Receive a Free Design Quote Today</h3>
            <div className="bg-gray-400 h-1 rounded-full"></div>
            <FormComponent />
        </div>
    </div>
  )
}
export default Quotes;