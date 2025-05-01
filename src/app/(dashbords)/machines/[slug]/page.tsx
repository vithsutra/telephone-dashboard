import Machines from "@/components/machines/machines";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug =  params.slug;
  return (
    <div>
     <Machines slug={slug}/>
    </div>
  );
}
