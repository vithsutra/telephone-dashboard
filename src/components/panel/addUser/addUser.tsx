"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className=" absolute bottom-4 right-4 bg-primary hover:bg-blue-500 text-white hover:text-white rounded-full w-10 h-10 "
        >
          <User width={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Add <span className="text-primary font-bold">User</span>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-5">
          <div className="grid grid-cols-2 items-center gap-2 ">
            <Label htmlFor="name" className="text-right ">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="Name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-2 ">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="Email"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-2 ">
            <Label htmlFor="pasword" className="text-right">
              Password
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="password"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-2 ">
            <Label htmlFor="name" className="text-right ">
               Id
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="Machine Id"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className="bg -primary hover:bg-blue-500 text-white hover:text-white"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
