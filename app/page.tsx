"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
    const ref = useRef<HTMLElement>(null);
    const [hasScrollbar, setHasScrollbar] = useState(false);

    useEffect(() => {
        const element = ref.current;
        console.log({ element });
        console.log({ document: window.document });

        console.log("window inner height:", window.innerHeight);

        console.log({
            scrollHeight: element?.scrollHeight,
            clientHeight: element?.clientHeight,
        });

        if (element) {
            if (window.innerHeight < element?.clientHeight) {
                setHasScrollbar(true);
            }
        }
    }, []);

    return (
        <main
            ref={ref}
            className="mx-auto sm:w-[600px] sm:py-6"
            style={hasScrollbar ? { marginBottom: "6rem" } : {}}
        >
            <h1 className="text-2xl">Hrvoje Mlinarevic</h1>
            <nav className="mb-4 flex items-center justify-between text-neutral-500">
                <h2>Web development, interactive apps</h2>
                {/* <Link href="/about" className="underline hover:text-neutral-200"> */}
                {/*     About */}
                {/* </Link> */}
            </nav>

            <hr className="border-green-light mb-8 border-[1.25px] opacity-20" />

            <section className="text-sm italic leading-relaxed">
                <p className="font-bold">“Data to Counselor Troi.”</p>
                <p className="mt-0">“Yes, Data?”</p>
                <p className="mt-0">
                    “I was wondering if now may be the appropriate time to
                    discuss the long-term effects of space travel on my
                    positronic net.”
                </p>
                <p className="mt-0">“Can I give you a rain check?”</p>
                <p className="mt-0">
                    “You may... check me for rain if you wish counselor, but I
                    assure you I have no water in my...”
                </p>
                <p className="mt-0">“Data, I'll get back to you.”</p>
            </section>

            {/* Projects */}

            <h3 className="mt-12 text-xl text-neutral-500">Projects</h3>
            <ul className="list-disc">
                <li className="ml-7 mt-2">
                    <p className="text-white-softer">
                        <a
                            className="text-violet-500 underline hover:text-violet-400"
                            href="https://aspirations.co/"
                            target="_blank"
                        >
                            Aspirations:
                        </a>{" "}
                        Outsource the entire newsletter process – from content
                        sourcing to sending – to Aspirations, your new AI
                        coworker. Now you can deliver relevant, cutting-edge
                        content directly to your customers without spending any
                        of your vital time.{" "}
                    </p>
                </li>
                <li className="ml-7 mt-8">
                    <p className="text-white-softer">
                        <a
                            href="https://crosswit.io"
                            target="_blank"
                            className="text-violet-500 underline hover:text-violet-400"
                        >
                            Crosswit:
                        </a>{" "}
                        Memory game and word search puzzles combined into an
                        experience that helps you train short term memory. Game
                        design is based on memorization and recall (memory) as
                        we are first instructed to remember words and then find
                        them in the puzzle.
                    </p>
                </li>
                <li className="ml-7 mt-8">
                    <p className="text-white-softer">
                        <a
                            href="https://moviesnacks.netlify.app"
                            target="_blank"
                            className="text-violet-500 underline hover:text-violet-400"
                        >
                            Moviesnacks:
                        </a>{" "}
                        Discover and search movies. App is utilizing{" "}
                        <a
                            href="https://www.themoviedb.org/"
                            target="_blank"
                            className="italic underline hover:text-neutral-400"
                        >
                            themoviedb.org
                        </a>{" "}
                        api service that provides all the information about
                        movies. For smooth user experience and less network
                        traffic all data that was fetched is stored in the
                        browser's cache storage.
                    </p>
                </li>
                <li className="ml-7 mt-8">
                    <p className="text-white-softer">
                        <a
                            className="text-violet-500 underline hover:text-violet-400"
                            href="https://sessiontimer.app"
                            target="_blank"
                        >
                            Session Timer:
                        </a>{" "}
                        Introduce sessions to your flow and get notified by the
                        browser when session is completed. I often find myself
                        being most productive when I work with timers. You can
                        tweak the timer duration to suit your needs better.
                    </p>
                </li>
            </ul>

            {/* Contact */}

            <h3 className="mt-12 text-xl text-neutral-500">Contact</h3>
            <p className="text-white-softer mt-2">
                If you wish to contact me you can use
                “hrvoje.mlinarevic[at]gmail.com” to send me a message.
            </p>
            <ul className="list-disc">
                <li className="ml-7 mt-2">
                    <a
                        className="text-fuchsia-500 underline hover:text-fuchsia-400"
                        href="https://github.com/hmlinarevic"
                        target="_blank"
                    >
                        Github:
                    </a>{" "}
                    <span className="text-white-softer">hmlinarevic</span>
                </li>
            </ul>
        </main>
    );
}
