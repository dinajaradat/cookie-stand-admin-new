export default function Form(props) {
    return (
      <form className="w-1/2 p-4 mx-auto my-4 bg-green-300 text-black" onSubmit={props.handler}>
  
        <p className="w-full text-4xl text-center mb-4">Create Cookie Stand</p>
  
        <div className="flex flex-col bg-green-300 text-black">
          <h3 className="px-2 py-1 bg-green-300 text-black w-full font-bold">Location</h3>
          <input name="location" className="flex-auto pl-1 ml-2" />
        </div>
  
        <div className="flex flex-row mb-4 p-4">
  
          <div className="flex flex-col bg-green-300 text-black">
            <h3 className="px-2 py-1 bg-green-300 text-black w-full font-bold">Minimum Customers Per Hour</h3>
            <input name="minimum_per" className="flex-auto pl-1 ml-2" />
          </div>
  
          <div className="flex flex-col bg-green-300 text-black">
            <h3 className="px-2 py-1 bg-green-300 text-black w-full font-bold">Maximum Customers Per Hour</h3>
            <input name="maximum_per" className="flex-auto pl-1 ml-2" />
          </div>
  
          <div className="flex flex-col bg-green-300 text-black p-1">
            <h3 className="px-2 py-1 bg-green-300 text-black w-full font-bold">Average Cookies Per Sale</h3>
            <input name="average" className="flex-auto pl-1 ml-2" />
          </div>
  
          <button className="px-2 py-1 bg-green-500 text-black w-full font-bold">Create</button>
        </div>
      </form>
  
  
    )
  }