"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddUser from "@/components/panel/addUser/addUser";
import { Button } from "@/components/ui/button";
import { DotSquareIcon, Ellipsis, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Users = [
  {
    user_id: "6266b97b-7921-4cb6-8271-5d383108eb14",
    machine_id: "vs24rmf3f2",
    email: "info@vithsutra.com",
    user_name: "Alvas",
  },
  {
    user_id: "6266b97b-7921-4cb6-8271-5d383108eb14d",
    machine_id: "vs24rmf3f2",
    email: "info@vithsutra.com",
    user_name: "Alvas",
  },
  {
    user_id: "6266b97b-7921-4cb6-8271-5d383108eb14dv",
    machine_id: "vs24rmf3f2",
    email: "info@vithsutra.com",
    user_name: "Alvas",
  },
  {
    user_id: "6266b97b-7921-4cb6-8271-5d383108eb14a",
    machine_id: "vs24rmf3f2",
    email: "info@vithsutra.com",
    user_name: "Alvas",
  },
  {
    user_id: "6266b97b-7921-4cb6-8271-5d383108eb14k",
    machine_id: "vs24rmf3f2",
    email: "info@vithsutra.com",
    user_name: "Alvas",
  },
];

export default function User() {
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
        {Users.map(({ user_id, user_name, machine_id, email }) => (
          <Card
            className="  w-full hover:bg-muted/10 shadow-md ease-in-out duration-300 "
            key={user_id}
          >
            <CardHeader className="py-2 ">
              <div className="flex items-cnter justify-between">
                <CardTitle className="text-center text-md font-normal text-muted-foreground">
                  {user_name}
                </CardTitle>
                <div className="text-center text-md font-medium text-yellow-500 ">
                  {machine_id}
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center text-lg font-normal text-primary">
              <span className="font-bold">{email}</span>
            </CardContent>
            <CardFooter className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-sm w-8 h-8">
                    <Ellipsis />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    className="text-red-600 cursor-pointer hover:text-red-500"
                    onClick={() => console.log("Delete user:", user_id)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardFooter>
          </Card>
        ))}
      </div>
      <AddUser />
    </div>
  );
}
