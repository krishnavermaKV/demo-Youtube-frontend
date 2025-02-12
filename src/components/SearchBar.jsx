export function SearchBar() {
    return (
        <div className="w-40 sm:w-40 md:w-64 lg:w-96 xl:w-[32rem] flex items-center border border-gray-400 rounded-3xl p-1 pl-3 text-sm pr-2 bg-gray-100">
            {/* Input hidden by default on mobile, shown on sm screens and up */}
            <input 
                id="search-input"
                className="w-full hidden sm:block bg-gray-100 text-gray-900 border-none outline-none"
                placeholder="Search"
                required 
            />
            <button 
                className="bg-gray-100 text-gray-600 font-bold p-2 rounded-full flex items-center justify-center hover:bg-gray-300"
                aria-label="Search"
            >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </button>
        </div>
    );
}
