import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to learn blender Animate in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "100k views",
    timestamp: "3 days ago"
},
{
    title: "How to learn blender Jump in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "70k views",
    timestamp: "4 days ago"
},
{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
}, {
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},
{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},
{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},
{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},
{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},
{
    title: "How to learn blender graphix in 30 days | 30 days plan | Code with chai",
    image: "photo.jpg",
    thumb: "thumb.png",
    author: "Pkriya",
    views: "105k views",
    timestamp: "5 days ago"
},
]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
{VIDEOS.map(video => <div className="px-2">
       <VideoCard
         title= {video.title}
         image= {video.image}
         thumb= {video.thumb}
         author= {video.author}
         views= {video.views}
         timestamp= {video.timestamp}></VideoCard>
    </div>)}
    </div>
}