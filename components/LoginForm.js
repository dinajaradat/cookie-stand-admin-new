export default function LoginForm(props) {
    return (
        <form className="w-1/2 p-4 mx-auto my-4 bg-green-300 text-black" onSubmit={props.handler}>

            <div className="flex flex-col bg-green-300 text-black">
                <h3 className="px-2 py-1 bg-green-300 text-black w-full font-bold"> USER NAME </h3>
                <input name="username" className="flex-auto pl-1 ml-2" />

            </div>

            <div className="flex flex-col bg-green-300 text-black">
                <h3 className="px-2 py-1 bg-green-300 text-black w-full font-bold"> PASSWORD </h3>
                <input name="password" className="flex-auto pl-1 ml-2" />

            </div>




            <button className="px-2 py-1 bg-green-500 text-black w-full font-bold"> SIGN IN </button>

        </form>


    )
}