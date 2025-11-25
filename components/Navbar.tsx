"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { isLoggedIn, logout, depart } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    const handleDeparture = () => {
        depart();
        router.push("/");
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between">
            <div className="text-lg font-bold">
                <Link href="/">MyApp</Link>
            </div>

            <div className="space-x-4">
                <Link href="/">Home</Link>

                <Link href="/flow" className="hover:underline">
                    Upload
                </Link>

                <Link href="/assets_simulation" className="hover:underline">
                    미래 자산 예측
                </Link>

                <Link href="/tax_credit" className="hover:underline">
                    세액 공제 확인
                </Link>

                <Link href="/myPage">MyPage</Link>
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        href="/login"
                        className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                    >
                        Login
                    </Link>
                )}
                {isLoggedIn ? (
                    <button
                        onClick={handleDeparture}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                        Departure
                    </button>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
