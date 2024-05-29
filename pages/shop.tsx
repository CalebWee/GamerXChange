import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Layout from '../src/components/Layout';
import axios from 'axios';
import withAuth from '@/components/withAuth';

const ShopPage: React.FC = () => {
    const router = useRouter();

    return (
        <Layout>
            <div>
                <p>shop</p>
            </div>
        </Layout>
    );
};

export default withAuth(ShopPage);
