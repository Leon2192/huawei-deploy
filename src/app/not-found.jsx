"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Si quieren acceder a una ruta que no existe lo mando a home en 5 segundos

const NotFound = () => {
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div className="text-center">
                <Image
                    src="/brand/logo-huawei.png"
                    alt="Not Found"
                    width={500}
                    height={300}
                />
                <br />
                <h1 className="text-3xl text-red-500 font-bold">La pagina a la que desea acceder no existe</h1>
                <br />
                <p className="mt-4 text-black font-bold text-xl text-slate-800">
                    Serás redirigido a Home en {countdown} segundos...
                </p>
            </div>
        </div>
    );
}

export default NotFound;