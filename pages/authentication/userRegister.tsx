import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState } from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { register } from '../../api/auth'; // Import the register function
import { showToast } from '@/components/ui/toast';

const userRegisterPage: React.FC = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined); // Changed from null to undefined
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('option-one');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showToast("Passwords do not match!", 'error');
      return;
    }

    try {
      const birthdate = date ? date.toISOString() : '';
      const response = await register(username, email, password, gender, birthdate);

      if (response) {    
        router.push({
            pathname: '/authentication/userLogin',
            query: { message: 'Account successfully registered!', type: 'success' }
          });
      } else {
        showToast('Failed to register account!', 'error');
      }
    } catch (error) {
        showToast('Failed to register account!', 'error');
    }
  };

  return (
    <Layout>
      <div className='flex justify-center max-h-screen max-w-screen mt-10 pl-40 pr-32'>
        <div className="w-5/12 h-[750px] flex bg-dark-lighterBg flex-col items-center justify-center rounded mr-4 p-4">
          <form onSubmit={handleSubmit}>
            <div className="justify-center grid w-full max-w-sm items-center">
              <Image src="/images/proLogo.webp" alt='logo' width={120} height={120} />
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="username">Username</Label>
              <Input
                className='text-xl text-dark-text dark'
                type="text"
                id="username"
                placeholder="8-15 characters"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="Gender">Gender</Label>
              <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="option-one" />
                  <Label className="text-lg" htmlFor="option-one">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="option-two" />
                  <Label className="text-lg" htmlFor="option-two">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label className="text-lg" htmlFor="option-three">Prefer not to say</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="email">Email</Label>
              <Input
                className='text-xl text-dark-text dark'
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="password">Password</Label>
              <Input
                className='text-xl text-dark-text dark'
                type="password"
                id="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg" htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                className='text-xl text-dark-text dark'
                type="password"
                id="confirmPassword"
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-3 grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-lg w-full" htmlFor="Birthdate">Birth Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full border-white justify-start text-left font-normal",
                      !date && "text-black text-dark-primary"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span className='text-dark-hint text-lg'>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date || undefined} // Ensure date is either Date or undefined
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button variant='secondary' className='mt-8 justify-center w-full text-xl text-dark-text bg-dark-primary dark' type="submit">REGISTER</Button>
            <p className='mt-2 text-m text-center'>Already have an account? <a href="/authentication/userLogin" className='text-blue-400 hover:text-blue-200/90'>Sign in</a></p>
          </form>
        </div>
        <div className="w-6/12 bg-cover bg-center bg-no-repeat p-4 rounded" style={{ backgroundImage: "url('/images/loginBg.jpg')" }}></div>
      </div>
    </Layout>
  );
};

export default userRegisterPage;
