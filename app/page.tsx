"use client";

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
            className="mx-auto text-green-light sm:w-[600px] sm:py-6"
            style={hasScrollbar ? { marginBottom: "6rem" } : {}}
        >
            <h1 className="text-2xl">Hrvoje Mlinarevic</h1>
            <h2 className="mb-4 text-sm text-green-dark">
                Web development, interactive apps
            </h2>

            <hr className="mb-8 border-[1.25px] border-green-light opacity-20" />

            <section className="text-sm italic leading-relaxed text-orange">
                <p>“Data to Counselor Troi.”</p>
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

            {/* <hr className="mb-4 mt-12 border-[1.25px] border-orange opacity-20" /> */}

            {/* <p className="mt-6 text-white-softer text-opacity-75"> */}
            {/*     Inspired by modern web applications and web infrastructure, I */}
            {/*     believe that the systems with which we interact on a daily basis */}
            {/*     should be practical, easy to use, and able to provide us with */}
            {/*     some sort of value - either by making our lives easier or by */}
            {/*     making us smarter. */}
            {/* </p> */}

            {/* Projects */}

            <h3 className="mt-12 text-xl">Projects</h3>
            <ul className="list-disc">
                <li className="ml-8 mt-2">
                    <p className="text-white-softer">
                        <a
                            className="text-green-light underline"
                            href="https://crosswit.io"
                            target="_blank"
                        >
                            Crosswit:
                        </a>{" "}
                        Blend between a memory game and a word search puzzle,
                        the game design is based on memorization and recall
                        (memory). We are first instructed to remember words and
                        then find them in the puzzle. Those two aspects of the
                        game could potentially improve short memory.
                    </p>
                </li>
                {/* <li className="ml-8 mt-8"> */}
                {/*     <p className="text-white-softer"> */}
                {/*         <a */}
                {/*             className="text-green-light underline" */}
                {/*             href="https://moviesnacks.netlify.app/" */}
                {/*             target="_blank" */}
                {/*         > */}
                {/*             Moviesnacks: */}
                {/*         </a>{" "} */}
                {/*         Movie app idea. Discover and search movies */}
                {/*         Search for your favorite movie and add it to your list */}
                {/*         of favorites. Discover latest moves and and enjoy */}
                {/*         intuitv searching, discovering or adding movies to your */}
                {/*         favorite list for easy access. */}
                {/*     </p> */}
                {/* </li> */}
            </ul>

            <h3 className="mt-12 text-xl">Collaboration</h3>
            <ul className="list-disc">
                <li className="ml-8 mt-2">
                    <p className="text-white-softer">
                        <a
                            className="text-green-light underline"
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
            </ul>

            {/* <hr className="my-12 border-green-light opacity-20" /> */}

            {/* Collaboration */}

            {/* Contact */}

            {/* <hr className="my-12 border-green-light opacity-20" /> */}

            <h3 className="mt-12 text-xl">Contact</h3>
            <p className="mt-2 text-white-softer">
                If you wish to contact me you can use
                “hrvoje.mlinarevic[at]gmail.com” to send me a message.
            </p>
            <ul className="list-disc">
                <li className="ml-8 mt-2">
                    <a
                        className="underline"
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
