import Link from "next/link";

export default function ProjectCard({project,index}) {
  return (
      <>
        <div className="cardBody w-fit border m-auto shadow-md rounded-lg overflow-hidden mb-5">
          <div className="upperBody flex border items-center justify-between p-2">
            <div className="main part w-full">
                <div className="nameAndDate  w-full flex flex-col items-center">
                <Link href="/projects/[slug]/" as={`/projects/${index}/`} className="m-auto hover:text-blue-600 hover:underline">
                  <h4 className="textsm">{project?.name}</h4> 
                </Link>
                  <p className="text-xs">{`${project?.date[1]} - ${project?.date[0]} - ${project?.date[2]} To Aug - 31 - 2023 `}</p>
                </div>
            </div>
          </div>

          <div className="productImage w-full hover:bg-gray-200 hover:liner flex items-center">
            <Link href="/projects/[slug]/" as={`/projects/${index}/`} className="m-auto">
              <img src={project?.images[0]} width="400" height="0" className="h-48 object-cover" alt="project image" />
            </Link>
          </div>

          <div className="info">
            <p className="p-3 text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe nihil sunt non odio tempora rem.</p>
          </div>
          <Link href="/projects/[slug]/" as={`/projects/${index}/`} className="m-auto hover:text-blue-600 hover:underline">
            <h2 className="text-center">{project?.name}</h2>
          </Link>
          <div className="useTech p-3 border-t-2 mt-5">
            {
              project?.tags.map((tags,index)=>{
                return <button key={index} className="py-1 px-2 text-sm border rounded-md border-red-500 mr-3 mb-3 text-red-500">{tags}</button>
              })
            }
          </div>
        </div>
      </>
  )
}