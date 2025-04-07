"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function InputForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(data);
      const response = await axios.post(
        "https://apmc.api.vsensetech.in/login/admin",
        data,
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log("====================================");
      console.log(data, response);
      console.log("====================================");

      if (response.status === 200) {
        toast.success("Login Successfully!", {
          description: "you have successfully logged in.",
        });
        router.push(`/machines/?admin_id=${response.data}`);
      } else {
        toast.error("Login Failed", {
          description: "Invalid credentials or server issue.",
        });
      }
    } catch (error: any) {
      toast.error("Login Error", {
        dismissible: error.response?.data?.message || "Something went wrong",
      });
      // console.log(error);
    }
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="w-96 border p-9 rounded-2xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormDescription>
              Login to access the{" "}
              <span className="text-blue-700">Dashboard</span>
            </FormDescription>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
