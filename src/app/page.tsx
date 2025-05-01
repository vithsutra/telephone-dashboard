import Link from "next/link";
export default function Home() {

  return <div>
<Link href={{ pathname: "/machines", query: { machine_id: "2" } }}>
  Go to Machine
</Link>
</div>;
}
