import ToDoList from "./ToDoList"
export function App(){


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex items-center justify-center w-full h-16 bg-blue-500 text-white">
                <h1 className="text-2xl font-bold">To Do List</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
                <ToDoList />
            </div>
            <div className="flex items-center justify-center w-full h-16 bg-blue-500 text-white">
                <p className="text-sm">Made with ❤️ by Joshua</p>
            </div>
        </div>
    )
}