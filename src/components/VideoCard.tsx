

export function VideoCard(props: any){
    return <div>
      <img src="/photo1.jpg" className="rounded-xl"></img>
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
        <img className={"rounded-full w-20 h-10"} src={props.thumb}>
        </img>
        </div>
        <div className="col-span-11 pl-3 ">
          <div className="col span 11 font-semibold">
        {props.title} 
        </div>
        <div className="col-span-11 
        text-gray-600 text-base  italic pl-1 text-sm">
      <h6>{props.author}</h6>
        </div>
        <div className="col-span-11
        text-gray-600 text-base  italic text-sm" >
        <h6>{props.views} . {props.timestamp}</h6>
        </div>
        </div>
      </div>
    </div>
}