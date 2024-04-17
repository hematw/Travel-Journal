
export default function Header() {
    return (
        <header className=" bg-red-400 p-4 fixed w-screen top-0 shadow shadow-gray-300 shadow-md">
            <h2 className="flex items-center justify-center text-white m-auto">
                <span className="text-3xl mr-3">
                    <ion-icon name="logo-react"></ion-icon>
                </span>
                <span className="mb-1">Atom Travels Journal</span>
            </h2>
        </header>
    )
}