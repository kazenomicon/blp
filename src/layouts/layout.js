import React, { useState } from "react";
import HeaderComponent from "@/components/Header";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const RootLayout = ({ children }) => {
    const router = useRouter();
    const [scrollY, setScrollY] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    const onscroll = (e) => {
        // console.log(e.target.scrollTop);
        setScrollY(e.target.scrollTop);
    }

    return (
        <>
            <Head>
                <title>BLP | Blinding Lights Project</title>
                <meta name="description" content="Blinding Lights Project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Blinding Lights Project" />
                <meta property="og:type" content="website" />
                <meta property="og:image:url" content="https://main.dqdps8txgzkps.amplifyapp.com/_next/image?url=%2Fimages%2Fchristmas_blp.jpg&w=3840&q=75" />
                <meta property="og:description" content="Blinding Lights Project" />
                <meta property="og:image" content="https://main.dqdps8txgzkps.amplifyapp.com/_next/image?url=%2Fimages%2Fchristmas_blp.jpg&w=3840&q=75" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="300" />
                <link rel="icon" href="/images/logo-blp-circle.png" />
            </Head>
            <div className={`flex xl:flex-1 flex-col h-screen relative justify-between overflow-hidden cursor-default `}>
                <div className={`
                ${"w-screen flex h-16 z-40 absolute"} 
                ${!showMenu && router.pathname === "/" ? "bg-gradient-to-r from-blue-900 to-slate-900" : "bg-transparent"}
                `}>
                    <div className={`
                    ${`flex justify-between text-center content-center items-center  w-full text-black p-2 transition-all duration-300`}
                    ${scrollY > 0 && !showMenu ? "shadow-xl bg-transparent" : !showMenu && scrollY == 0 && router.pathname === "/" ? "bg-white" : ""}
                    `} >
                        <div className={`
                    ${"flex-none flex items-center text-left md:ml-10 sm:ml-5 ml-2 text-xl md:text-[20px] text-[16px]"}
                    ${showMenu ? "invisible" : "visible"}
                    `}
                        >
                            <div
                                className="h-14 w-14 mr-4 rounded-full justify-center text-center content-center items-center">
                                <Link href="/#home" onClick={(e) => {
                                    e.preventDefault();
                                    if (router.pathname === "/") {
                                        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        router.push("/");
                                    }

                                }}>
                                    <div>
                                        <img src="/images/logo-blp-circle.png" className="" />
                                    </div>
                                </Link>
                            </div>
                            <p className={`md:hidden ${scrollY > 0 || router.pathname !== "/" ? "text-white font-bold" : "font-bold"}`}>
                                BLP
                            </p>
                            <Link href="/#home" onClick={(e) => {
                                e.preventDefault();
                                if (router.pathname === "/") {
                                    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                                } else {
                                    router.push("/");
                                }
                            }}>
                                <p className={`md:flex hidden ${scrollY > 0 || router.pathname !== "/" ? "text-white font-bold" : "font-bold"}`}>
                                    Blinding Lights Project
                                </p>
                            </Link>
                        </div>
                        <div className="flex justify-center md:visible invisible lg:mr-10 mr-4 items-center">
                            <div className={`${scrollY > 0 || router.pathname !== "/" ? "text-white" : ""} flex-none absolute md:relative lg:mx-4 md:mx-2 transition duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                                <Link href="/#home" onClick={(e) => {
                                    e.preventDefault();
                                    if (router.pathname === "/") {
                                        document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        router.push("/");
                                    }
                                }
                                }>
                                    Home
                                </Link>
                            </div>
                            <div className={`${scrollY > 0 || router.pathname !== "/" ? "text-white" : ""} flex-none absolute md:relative lg:mx-4 md:mx-2 transition duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                                <Link href="/#about" onClick={(e) => {
                                    e.preventDefault();
                                    if (router.pathname === "/") {
                                        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                                    }
                                    else {
                                        router.push("/#about");
                                    }
                                }}>
                                    About BLP
                                </Link>
                            </div>
                            <div className={`${scrollY > 0 || router.pathname !== "/" ? "text-white" : ""} flex-none  absolute md:relative lg:mx-4 md:mx-2 transition duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                                <Link href="/#member" onClick={(e) => {
                                    e.preventDefault();
                                    if (router.pathname === "/") {
                                        document.getElementById("member").scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        router.push("/#member");
                                    }
                                }}>
                                    Members
                                </Link>
                            </div>
                            <div className={`${scrollY > 0 || router.pathname !== "/" ? "text-white" : ""} flex-none  absolute md:relative lg:mx-4 md:mx-2 transition duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                                <Link href="/#join" onClick={(e) => {
                                    e.preventDefault();
                                    if (router.pathname === "/") {
                                        document.getElementById("join").scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        router.push("/#join");
                                    }
                                }}>
                                    Join
                                </Link>
                            </div>
                            <div className={`${scrollY > 0  || router.pathname !== "/"? "text-white" : ""} flex-none  absolute md:relative lg:mx-4 md:mx-2 transition duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                                <Link href="/#product" onClick={(e) => {
                                    e.preventDefault();
                                    if (router.pathname === "/") {
                                        document.getElementById("product").scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        router.push("/#product");
                                    }
                                }}>
                                    Products
                                </Link>
                            </div>
                            <div className={`${scrollY > 0 || router.pathname !== "/" ? "text-white" : ""} flex-none  absolute md:relative lg:mx-4 md:mx-2 transition duration-300 hover:-translate-y-0.5 cursor-pointer`}>
                                <div className={`w-auto h-10 px-4 rounded-full border ${scrollY > 0 || router.pathname !== "/" ? "border-white" : "border-black"} content-center`}>
                                    <Link href="/#contact" onClick={(e) => {
                                        e.preventDefault();
                                        if (router.pathname === "/") {
                                            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                                        } else {
                                            router.push("/#contact");
                                        }
                                    }}>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-row md:invisible visible md:absolute relative h-[20px] w-[20px] cursor-pointer" onClick={() => {
                                setShowMenu(!showMenu);
                            }}>
                                <div className={`${scrollY > 0 || router.pathname !== "/" ? "bg-white" : "bg-black"}
                            ${"h-[2px] w-[20px] rounded-full transition duration-700"}
                            ${showMenu ? "rotate-45 translate-y-2 bg-white" : "my-1"}
                            `}></div>
                                <div className={`${scrollY > 0 || router.pathname !== "/" ? "bg-white" : "bg-black"}
                            ${"h-[2px] w-[20px] bg-black rounded-full transition duration-700"}
                            ${showMenu ? "-rotate-45 translate-y-1.5 bg-white" : "my-1"}
                            `}></div>
                                <div className={`${scrollY > 0 || router.pathname !== "/" ? "bg-white" : "bg-black"}
                            ${"h-[2px] w-[20px] bg-black rounded-full transition duration-700"}
                            ${showMenu ? "rotate-45 translate-y-1 bg-white" : "my-1"}
                            `}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`
                ${"overflow-x-hidden transition duration-300"}
                ${showMenu ? "md:blur-none blur-sm" : "blur-none"}
                `}
                    onScroll={(e) => onscroll(e)}
                >
                    {children}
                </div>
                <div className={`
                ${"h-screen md:invisible visible absolute w-full content-center text-center justify-center items-center bg-black/75 transition duration-300 ease-in-out"}
                ${showMenu ? "translate-y-0" : "-translate-y-full"}
                `}>
                    <div className="text-white text-2xl my-5">
                        <Link href="/#about" onClick={(e) => {
                            e.preventDefault();
                            if (router.pathname === "/") {
                                document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                            } else {
                                router.push("/");
                            }
                            setShowMenu(false);
                        }}>
                            About
                        </Link>
                    </div>
                    <div className="text-white text-2xl my-5">
                        <Link href="/#member" onClick={(e) => {
                            e.preventDefault();
                            if (router.pathname === "/") {
                                document.getElementById("member").scrollIntoView({ behavior: "smooth" });
                            } else {
                                router.push("/#member");
                            }
                            setShowMenu(false);
                        }}>
                            Members
                        </Link>
                    </div>
                    <div className="text-white text-2xl my-5">
                        <Link href="/#join" onClick={(e) => {
                            e.preventDefault();
                            if (router.pathname === "/") {
                                document.getElementById("join").scrollIntoView({ behavior: "smooth" });
                            } else {
                                router.push("/#join");
                            }
                            setShowMenu(false);
                        }}>
                            Join
                        </Link>
                    </div>
                    <div className="text-white text-2xl my-5">
                        <Link href="/#product" onClick={(e) => {
                            e.preventDefault();
                            if (router.pathname === "/") {
                                document.getElementById("product").scrollIntoView({ behavior: "smooth" });
                            } else {
                                router.push("/#product");
                            }
                            setShowMenu(false);
                        }}>
                            Products
                        </Link>
                    </div>
                    <div className='flex justify-center text-white text-2xl my-5 '>
                        <div className="h-14 px-4 w-64 rounded-full border border-white content-center">
                            <Link href="/#contact" onClick={(e) => {
                                e.preventDefault();
                                if (router.pathname === "/") {
                                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                                } else {
                                    router.push("/#contact");
                                }
                                setShowMenu(false);
                            }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RootLayout;