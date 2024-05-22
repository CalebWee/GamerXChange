import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../src/components/Layout';
import { Button } from '@/components/ui/button';
import { Globe2, Headset, ShieldCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/authentication/userLogin');
  };

  const perks = [
    {
      name: 'Secure',
      Icon: ShieldCheck,
      description: 'Secure payment gateways and encryption protocols to safeguard financial transactions and personal information.',
    },
    {
      name: 'Diverse Variety',
      Icon: Globe2,
      description: 'Diverse selection of accounts across various platforms, catering to different interests and needs.',
    },
    {
      name: 'Support',
      Icon: Headset,
      description: 'Round-the-clock customer support to address any queries or concerns promptly, ensuring a smooth trading experience.',
    }
  ]

  return (
    <Layout>
      <div className='flex flex-col'>
        <div className="flex justify-center flex-1">
          <div className="py-20 mx-auto text-center flex flex-col items-center max-w-4xl">
            {/* <button
              onClick={navigateToLogin}
              className="text-2xl px-4 py-2 bg-light-primary text-light-text dark:text-dark-text dark:bg-dark-primary rounded"
            >
              Sign In
            </button> */}
            <p className="text-6xl">From Gaming to Social Media, Marketplace for Hassle-Free <br/><span className="text-dark-secondary">Account Trading</span></p>
            <p className="mt-6 text-3xl text-dark-secondaryText">Reliable, secure, and user-friendly, Join a community of verified buyers and sellers. Trust and transparency guaranteed.</p><br />
            <Button variant='secondary' className='mt-6 text-xl text-dark-text bg-dark-primary dark'>Start Browsing Popular Accounts &rarr;</Button>
          </div>
        </div>
        <section className='border-t border-dark-primary/80 bg-dark-lighterBg flex-1'>
          <div className='mt-10 mb-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div key={perk.name} className='text-center md:flex md:items-start md:text:left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-32 w-32 flex items-center justify-center rounded-full bg-dark-text text-dark-primary'>
                    {<perk.Icon className='w-2/3 h-2/3'/>}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 pl-10 pr-10'>
                  <p className='text-4xl'>
                    {perk.name}
                  </p>
                  <p className='text-dark-text/60 text-xl'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
