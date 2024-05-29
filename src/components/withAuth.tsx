import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/router';

interface WithAuthProps {
  token: string | null;
}

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/authentication/userLogin');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return WithAuth;
};

export default withAuth;
