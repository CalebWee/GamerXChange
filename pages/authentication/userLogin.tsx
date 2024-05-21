import { useRouter } from 'next/router';
import Layout from '../../src/components/Layout';

const userLoginPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <h1>login</h1>
      </div>
    </Layout>
  );
};

export default userLoginPage;