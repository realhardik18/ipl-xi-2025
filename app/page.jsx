import Image from "next/image";

export default function Home() {
  async const teamData=await fetch()
  const Teams=[]
  for(let i=0;i<10;i++){
    Teams.push("hardik")
  }
  console.log(Teams)
  return (
    <div className="m-5">
      <div>
        <p className="text-4xl text-white">IPL Squads 2025</p>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-4">        
          {Teams.map((item,index)=>(
            <p key={index} className="text-red-400">{item}</p>
          ))}              
        </div>
      </div>


    </div>
  );
}
