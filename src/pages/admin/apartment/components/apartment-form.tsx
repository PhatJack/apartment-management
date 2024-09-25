import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'

interface ApartmentFormProps {
  textTrigger: string
}

const ApartmentForm = ({ textTrigger }: ApartmentFormProps) => {
  const form = useForm()

  const onSubmit = async (data) => {}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'default'} size={'lg'}>
          {textTrigger}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">New Apartment</DialogTitle>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner of the apartment</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type something"
                      {...field}
                      className="focus-visible:ring-primary"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User of the apartment</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type something"
                      {...field}
                      className="focus-visible:ring-primary"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end gap-4">
              <Button size={'lg'} variant={'ghost'}>
                Cancel
              </Button>
              <Button size={'lg'} variant={'default'}>
                Save
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ApartmentForm
