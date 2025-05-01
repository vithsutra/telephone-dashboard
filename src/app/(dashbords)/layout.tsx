import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/dashbords" className="text-xl font-bold">Dashboard</Link>
            <Link href="/dashbords/user">Users</Link>
            <Link href="/dashbords/machines">Machines</Link>
            <Link href="/dashbords/post">Posts</Link>
          </div>
          <Button variant="outline">Logout</Button>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        {children}
      </main>
      {/* three dot logo /user /home /logout
      <Button >hello</Button> */}
    </div>
  );
}

export default layout;
