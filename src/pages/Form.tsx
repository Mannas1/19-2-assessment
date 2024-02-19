import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/common/Navbar"


const formSchema = z.object({
  username: z.string().min(2).max(50),
  pannum: z.string().min(10).max(10),
})

const FormPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      pannum: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <>
    <Navbar />
    <div className="w-screen flex items-center justify-center">
    <div className="w-80 h-auto bg-gray-200 mt-20 p-5 rounded-lg">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
          
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pannum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pan Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your PAN Number" {...field}/>
              </FormControl>
          
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="pannum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose a file</FormLabel>
              <FormControl>
                <Input placeholder="Enter your PAN Number" {...field} type="file"/>
              </FormControl>
          
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>

    </div>
    
   
    </>
      
  )
}

export default FormPage