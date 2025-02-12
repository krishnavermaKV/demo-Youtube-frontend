import { SearchBar } from "./SearchBar";

export const AppBar = () => {
    return (
        <div className=" grid grid-cols-12 items-center px-4 py-2 bg-gray-100">
            {/* Left Section: Logo */}
            <div className="text-md col-span-3 font-bold">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" className="h-6 w-30" alt="" />
            
                </div>

            {/* Middle Section: Search Bar + Icons */}
            <div className="gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-7  col-span-7 flex items-center  justify-center" >
                <SearchBar />
                <div className="p-2 bg-gray-200 rounded-full px-3">🎤</div> {/* Mic Icon */}
                <div className="p-2 bg-gray-200 rounded-full  px-6 sm:px-12 lg:px-12 xl:px-12 xl:px-12">➕</div> {/* Create Icon */}
                <div className="p-2 bg-gray-200 rounded-full  px-5">🔔</div> {/* Bell Icon */}
            </div>

            {/* Right Section: Sign-in */}
            <div className="col-span-2 flex justify-end">
                <button className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2 md:px-4 md:py-2 rounded-full">Sign In</button>
            </div>
        </div>
    );
};
