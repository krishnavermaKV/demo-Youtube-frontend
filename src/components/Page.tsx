import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-black">
      {/* AppBar */}
      <AppBar />

      {/* Main Content Section */}
      <div className="flex flex-1 bg-black">
        {/* Sidebar */}
        <div className="w-45 p-4 bg-black flex flex-col gap-2">
          <div className="py-2 px-4  rounded-lg cursor-pointer text-white bg-black font-semibold">🏠 Home</div>
          <div className="py-2 px-4  rounded-lg cursor-pointer text-white bg-black font-semibold">▶️ Shorts</div>  
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🔥 Trending</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📺 Subscriptions</div>
          <div className="flex items-center gap-x-3 py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold"> 
            <span>👤 You</span> <span>&gt;</span>
          </div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">⏳ History</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📂 Playlists</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🎥 Your Videos</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📚 Your Courses</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">⏳ Watch Later</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">👍 Liked Videos</div>

          {/* Subscriptions */}
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📺 Subscriptions</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📌 allinonekrishnaverma</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📌 techwith_pkriya</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">📌 game_with_unreal</div>

          {/* Explore Section */}
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🔍 Explore</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🔥 Trending</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🛍️ Shopping</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🎵 Music</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🎬 Films</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🔴 Live</div>
          <div className="py-2 px-4 rounded-lg cursor-pointer text-white bg-black font-semibold">🎮 Gaming</div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}
