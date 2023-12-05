import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

type Project = {
  organization: string;
  project_name: string;
  description: string;
  file: File | null;
  release: string;
}

const projects: Project[] = [
  {
    organization: "ABC ORG",
    project_name: "Project 1",
    description: "This is test project",
    release: "1.0.0",
    file: null,
  },
  {
    organization: "ABC ORG",
    project_name: "Project 2",
    description: "This is test project",
    release: "1.0.0",
    file: null,
  },
]
export default function Projects() {
  return (
    <div className='px-80 py-20'>
      <div className='flex flex-col gap-5'>
        {projects.map((data) => (
          <Card>
            <CardHeader>
              <CardTitle>{data.project_name}</CardTitle>
              <CardDescription>{data.organization}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm'>
                {data.description}
              </p>
            </CardContent>
            <CardFooter className='gap-5'>
              <p className='font-semibold'>Current Release: {data.release}</p>
              <Button className='ml-auto'>Push New Update</Button>
            </CardFooter>
          </Card>
        ))}

      </div>
    </div>
  )
}
