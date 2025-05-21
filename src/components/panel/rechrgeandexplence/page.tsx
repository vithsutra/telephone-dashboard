
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(tab: string) {
  if (tab === "recharge") {
    return [
      {
        machine_id: "728ed52f",
        amount: 100,
        date: "12/02/2025",
        time: "16:35:45",
      },
    ];
  } else {
    return [
      {
        machine_id: "728ed52f",
        amount: 200,
        date: "12/02/2025",
        time: "16:35:45",
      },
    ];
  }
}

export default async function RechageAndAmountPage({ tab } :{tab:string}) {
  
  const data =  getData(tab);

  return (
    <div className="container mx-auto py-10 w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
