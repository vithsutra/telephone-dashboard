"use client"
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Users = [
  {
    id: "1",
    name: "Institution Name",
    email: "location@example.com"
  }
];

function Page() {
  const router = useRouter();

  return (
    <div className='flex flex-wrap gap-4'>
      {Users.map(({ id, name, email }) => (
        <Card className='w-64 h-96' key={id}>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" font-bold">{email}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className='bg-red-200 hover:bg-red-300 border-2 text-red-800 hover:text-red-800 border-red-300 '>Delete</Button>
            <Button onClick={() => router.push(`/dashbord/${id}`)}>Manage</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Page;
