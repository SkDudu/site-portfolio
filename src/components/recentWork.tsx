import cape_anni from "../assets/anni-capa.png"

import { gql, useQuery } from "@apollo/client";
import {Project} from "./Project";

const GET_PROJECTS_QUERY = gql `
    query Projects {
        projects {
            id
            title
            description
            slug
            thumbnail {
                url
            }
            image {
                url
            }
        }
    }
  
`

interface GetProjectsQueryResponse {
    project: {
        id: string
        title: string
        description: string
        slug: string
        thumbnail: string
    }[]
}

export default function RecentWork(){
    const {data} = useQuery<GetProjectsQueryResponse>(GET_PROJECTS_QUERY)
    console.log(data)
    if(!data){
        return(
            <div className="flex-1 ">Carregando</div>
        )
    }
    return(
        <div className='text-center mt-12'>
            <span className="block md:text-4xl tracking-tight font-medium text-gray-900 text-2xl">Projetos mais recentes</span>
            <span className="block tracking-tight font-regular text-gray-500 mt-2 text-lg px-2">Sempre construindo projetos sejam eles pequenos ou grandes!</span>
        
            <div>
                {data.project?.map(project => {
                    return (
                        <Project 
                            title={project.title}
                            description={project.description}
                            thumbnail={project.thumbnail}
                            slug={project.slug}
                        /> 
                    )
                })}
            </div>
        </div>
    )
}