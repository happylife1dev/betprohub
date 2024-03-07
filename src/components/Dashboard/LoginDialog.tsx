import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '../ui/checkbox';
import { useDashboardStore } from '@/store/dashboardStore';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

export function LoginDialog() {
  const setIsLoggedIn = useDashboardStore((state) => state.setIsLoggedIn);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoggedIn(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-full sm:h-auto">
        <form className="my-auto" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-5xl">
              <img
                src={'/betprohub-logo-dark.png'}
                className="aspect-auto w-[200px] mx-auto hidden dark:block"
                alt="Logo"
              />
              <img
                src={'/betprohub-logo.png'}
                className="aspect-auto w-[200px] mx-auto block dark:hidden"
                alt="Logo"
              />
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                className="col-span-4"
                {...register('email')}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="password"
                type="password"
                required
                placeholder="Password"
                className="col-span-4"
                {...register('password')}
              />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button type="submit">LOGIN</Button>

            <div className="items-center flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </div>
          </DialogFooter>
          <div className="mt-2">
            <p>
              Don’t have an account?{' '}
              <a href="#" className="underline">
                {' '}
                Create a new account
              </a>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
