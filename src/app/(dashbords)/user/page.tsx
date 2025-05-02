import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AddUser from '@/components/addUser/addUser'


const Users = [
  {
     name:"srujan",
     email:"location"
  },
  {
    name:"srujan",
    email:"location"
 },
 {
  name:"srujan",
  email:"location"
},
{
 name:"srujan",
 email:"location"
},
{
 name:"srujan",
 email:"location"
},
{
 name:"srujan",
 email:"location"
},
{
 name:"srujan",
 email:"location"
}
]

function User() {
  return (
    <div className=' space-y-4 space-x-4 flex  flex-wrap'>
      {Users.map(({name,email})=>(
     <Card className='w-64 h-96' key={name}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{email}</p>
      </CardContent>
    </Card>
    ))}
    <AddUser/>
    </div>
  )
}

export default User