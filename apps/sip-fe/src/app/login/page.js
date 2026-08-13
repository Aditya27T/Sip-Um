"use client";
import Image from 'next/image';
import { signIn } from "next-auth/react";
import { Icon } from '@iconify/react';

import Button from '@/components/Button';


const Login = () => {
    return (
        <section className="bg-gray-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Image className="w-[200px] my-5" src="/logo-univ.svg" width={0} height={0} alt="logo" />
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="w-full h-auto">
                            <h1 className="font-bold text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <p className="text-xs text-center text-[#6f6f6f]">If you dont have an account, please log in with Google</p>
                        </div>
                        <form className="space-y-4 md:space-y-3">
                            <div className="grid gap-[8px] mb-6 md:grid-row-2">
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="contoh@company.com" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                </div>
                            </div>
                            <div className="w-full h-auto flex flex-col gap-5">
                                <Button className="w-full h-10 px-[30px] font-normal rounded-[6px] bg-[#00408A] text-white" type={'submit'}>
                                    Log In
                                </Button>

                                <button type="button" onClick={() => signIn('google', { callbackUrl: '/' })} className="w-full h-10 flex justify-center items-center gap-5 px-[30px] font-normal rounded-[6px] bg-[#00408A] text-white">
                                    <Icon icon="logos:google-icon" width="30" height="30" />
                                    <p>Log In With Google</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import { Icon } from '@iconify/react';

// import Button from '@/components/Button';


// const Login = () => {
//     return (
//         <section className="bg-gray-100">
//             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//                 <Image className="w-[200px] my-5" src="/logo-univ.svg" width={0} height={0} alt="logo" />
//                 <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
//                     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//                         <div className="w-full h-auto">
//                             <h1 className="font-bold text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
//                                 Sign in to your account
//                             </h1>
//                             <p className="text-xs text-center text-[#6f6f6f]">If you does not have account, please login with google</p>
//                         </div>
//                         <form className="space-y-4 md:space-y-3">
//                             <div class="grid gap-[8px] mb-6 md:grid-row-2">
//                                 <div class="mb-6">
//                                     <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
//                                     <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="contoh@company.com" required />
//                                 </div>
//                                 <div class="mb-6">
//                                     <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                                     <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
//                                 </div>
//                             </div>
//                             <div className="w-full h-auto flex flex-col gap-5">
//                                 <Link href="/dashboard">
//                                     <Button className="w-full h-10 px-[30px] font-normal rounded-[6px] bg-[#00408A] text-white" type={'submit'}>
//                                         Log In
//                                     </Button>
//                                 </Link>
//                                 <Link href="/dashboard">
//                                     <div className="w-full h-10 flex justify-center items-center gap-5 px-[30px] font-normal rounded-[6px] bg-[#00408A] text-white">
//                                         <Icon icon="logos:google-icon" width="30" height="30" />
//                                         <p clasName="">Log In With Google</p>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;
