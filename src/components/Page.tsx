import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      {/* AppBar */}
      <AppBar />

      {/* Main Content Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-45 p-4 bg-gray-100 flex flex-col gap-2">
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🏠 Home</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">▶️ Shorts</div>  
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🔥 Trending</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📺 Subscriptions</div>
          <div className="flex items-center gap-x-3 py-2 px-4 bg-gray-200 rounded-lg cursor-pointer"> 
            <span>👤 You</span> <span>&gt;</span>
          </div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">⏳ History</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📂 Playlists</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🎥 Your Videos</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📚 Your Courses</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">⏳ Watch Later</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">👍 Liked Videos</div>

          {/* Subscriptions */}
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📺 Subscriptions</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📌 allinonekrishnaverma</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📌 techwith_pkriya</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">📌 game_with_unreal</div>

          {/* Explore Section */}
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🔍 Explore</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🔥 Trending</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🛍️ Shopping</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🎵 Music</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🎬 Films</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🔴 Live</div>
          <div className="py-2 px-4 bg-gray-200 rounded-lg cursor-pointer">🎮 Gaming</div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-4">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}
