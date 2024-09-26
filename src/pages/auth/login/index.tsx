import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { LoginSchema } from '@/schema/auth.validate'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useToast } from '@/hooks/use-toast'
import { toast } from 'sonner'
import { useLoginMutation } from '@/features/auth/authSlice'
import { useDocumentTitle } from 'usehooks-ts'
import Logo from '@/assets/logo.svg'
import Overlay from '@components/overlay/Overlay'
export default function Index() {
  useDocumentTitle('Login')

  const [isShowing, setIsShowing] = useState<boolean>(false)
  const [Login, { isLoading }] = useLoginMutation()
  const handleShowPassword = () => {
    setIsShowing(!isShowing)
  }

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    // await Login(data)
    //   .unwrap()
    //   .then((res) => {
    // 		console.log(res)
    // 	}).catch((error) => {
    // 		toast.error(error.message)
    // 	})
  }

  const onError = (error: any) => {
    console.log(error)
    if (error['email']?.message) {
      toast.error(error['email']?.message)
    }
    if (error['password']?.message) {
      toast.error(error['password']?.message)
    }
  }

  return (
    <>
      <img src={Logo} alt="logo" className="size-24 absolute top-10 left-10" />
      <div className="mx-auto grid min-[400px]:w-[350px] gap-6 animate-in zoom-in-90 opacity-90">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="relative">
                  <div className="flex items-center">
                    <FormLabel>Password</FormLabel>
                    <Link
                      to="/forgot-password"
                      className="ml-auto inline-block text-sm underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <FormControl>
                    <Input type={!isShowing ? 'password' : 'text'} {...field} />
                  </FormControl>
                  <span
                    onClick={handleShowPassword}
                    className="absolute top-7 right-2">
                    {!isShowing ? <Eye size={20} /> : <EyeOff size={20} />}
                  </span>
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit" className="w-full">
              {isLoading ? 'Loading...' : 'Login'}
            </Button>
          </form>
        </Form>
      </div>
      {/* <Overlay>
        <div className="w-[500px] h-[400px] bg-white rounded-md p-4 flex flex-col justify-center items-center gap-2.5">
          <img src={Logo} alt="logo" className="size-24" />
          <p className="text-2xl font-medium">Welcome back, {'{ name }'}</p>
          <p className="font-medium">Select your account</p>
          <div className="w-full flex justify-center items-center gap-6 mt-4">
            <Button className="size-32 border-2 text-lg" variant={'ghost'}>
              Owner
            </Button>
            <Button className="size-32 border-2 text-lg" variant={'ghost'}>
              Resident
            </Button>
          </div>
        </div>
      </Overlay> */}
    </>
  )
}
