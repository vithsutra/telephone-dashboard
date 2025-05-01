import DialogRecharge from "@/components/rechargeDialog/DialogRecharge";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RechageAndAmountPage from "@/components/rechrgeandexplence/page";

function RechageandExplence({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <div className="flex justify-center items-center w-full ">
      {/* /recharge history adminid/metchin id /expence history adminid/metchin id */}
      <Tabs defaultValue="Recharge" className="flex  items-center w-full ">
        <TabsList className=" bg-company-primary-royalBlue">
          <TabsTrigger value="Recharge" className="">Recharge</TabsTrigger>
          <TabsTrigger value="Expense">Expense</TabsTrigger>
        </TabsList>
        <TabsContent value="Recharge" className=" w-full">
          <RechageAndAmountPage tab="recharge" />
        </TabsContent>
        <TabsContent value="Expense" className="w-full"><RechageAndAmountPage tab="expense"/></TabsContent>
      </Tabs>
      {/* /rechage amout */}
      <DialogRecharge />
      {/* <p>{slug}</p> */}
    </div>
  );
}

export default RechageandExplence;
