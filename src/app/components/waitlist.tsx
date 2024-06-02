"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SetStateAction, useState } from "react";
import axios from "axios";
import PlaceHolderImage from "../../../public/placeholder.png";
import Image from "next/image";

export default function Component() {
    const [email, setEmail] = useState('');

    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            // Send email to API to add to the waitlist
            await axios.post('/api/waitlist', { email });
            setEmail('');
            alert('Thank you for joining the waitlist!');
        } catch (error) {
            console.error('Error adding email to the waitlist:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="relative">
                <div className="flex flex-col min-h-[100dvh] bg-black z-10">
                    <header className="px-4 lg:px-6 h-14 flex items-center">
                        <Link href="#" className="flex items-center justify-center" prefetch={false}>
                            <h1 className="font-bold text-4xl text-yellow-400">Internee</h1>
                        </Link>
                    </header>
                    <main className="flex-1 bg-black">
                        <div className="px-4 md:px-6 space-y-10 xl:space-y-16 mt-10">
                            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                                <div>
                                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8">
                                        Internee - Your Gateway to Internship Success
                                    </h1>
                                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                                        Unlock your dream internships with Internee - the ultimate platform connecting students with top
                                        companies.
                                    </p>
                                    <div className="mt-6 max-w-sm">
                                        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
                                            <Input
                                                type="email"
                                                onChange={handleInputChange}
                                                placeholder="Enter your email"
                                                className="max-w-lg"
                                            />
                                            <Button
                                                type="submit"
                                                className="w-full shadow-lg hover:shadow-yellow-300"
                                            >
                                                Join the Waitlist
                                            </Button>
                                        </form>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                            By signing up, you agree to our{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <Image
                                        src={PlaceHolderImage}
                                        alt="Hero"
                                        className="mx-auto rounded-xl sm:w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black">
                        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Internee. All rights reserved.</p>
                        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                                Privacy
                            </Link>
                        </nav>
                    </footer>
                </div>
            </div>
        </>
    )
}