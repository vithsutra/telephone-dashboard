import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
interface Machine {
  name: string;
  id: string;
  admin: string;
}

function Machines() {
  const router = useRouter();
  const SearchParams = useSearchParams();
  const admin_id = SearchParams.get("machine_id");

  const [machine, setMachine] = useState<Machine | null>(null);

  useEffect(() => {
    if (admin_id) {
      fetch(`/admin/machines/${admin_id}`)
        .then((res) => res.json())
        .then((data) => setMachine(data))
        .catch((error) => console.error("Error fetching machine:", error));
    }
  }, [admin_id]);

  if (!machine) return <p>Loading...</p>;

  async function handleDelete(machineId: string) {
    try {
      console.log("Deleting Machine:", machineId);
      const response = await axios.post(
        `https://apmc.api.vsensetech.in/admin/machine/${machineId}`,
        {},
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        toast.success("Machine is Deleted!", { description: "---" });
        setMachine(null);
      } else {
        toast.error("Something went wrong!", {
          description: "Please try again..",
        });
      }
    } catch (error:any) {
      toast.error("Delete Failed", {
        description: error.response?.data?.message || "Something went wrong!",
      });
    }
  }

  return (
    <div>
      <h1>Machine Details</h1>
      {machine ? (
        <div>
          <h2>{machine.name}</h2>
          <h3>ID: {machine.id}</h3>

          <Button
            onClick={() => router.push(`/machines/?machine_id=${machine.id}`)}
          >
            Manage
          </Button>

          <Button onClick={() => handleDelete(machine.id)}>Delete</Button>
        </div>
      ) : (
        <p>No machine found.</p>
      )}
    </div>
  );
}

export default Machines;
