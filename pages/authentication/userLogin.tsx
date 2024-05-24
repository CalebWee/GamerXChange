import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';

const userLoginPage:React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className='flex justify-center max-h-screen max-w-screen mt-10 pl-40 pr-32'>
        <div className="w-5/12 h-[750px] flex bg-dark-lighterBg flex-col items-center justify-center rounded mr-4 p-4">
          <form action="">     
            <div className="mt-6 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="email">Email</Label>
              <Input className='text-xl text-dark-text dark' type="email" id="email" placeholder="example@gmail.com" />
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="password">Password</Label>
              <Input className='text-xl text-dark-text dark' type="password" id="password" placeholder="*********" />
            </div>
            <Button  variant='secondary' className='mt-8 justify-center w-full text-xl text-dark-text bg-dark-primary dark' type="submit">LOGIN</Button>
            <p className='mt-2 text-m text-center'>Don't have an account? <a href="/authentication/userRegister" className='text-blue-400 hover:text-blue-200/90'>Sign up</a></p>
          </form>
        </div>
        <div className="w-6/12 bg-cover bg-center bg-no-repeat p-4 rounded" style={{ backgroundImage: "url('/images/loginBg.jpg')" }}>
        </div>
      </div>
    </Layout>
  );
};

export default userLoginPage;