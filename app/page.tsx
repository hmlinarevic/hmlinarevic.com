"use client";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
    return (
        <main className="mx-auto sm:w-[600px] sm:py-6 mb-20">
            <h1 className="text-2xl">Hrvoje Mlinarevic</h1>
            <nav className="mb-2 flex items-center justify-between text-sm text-neutral-500">
                <h2>Web development, interactive apps</h2>
            </nav>

            <hr className="border-green-light mb-6 border-[1.25px] opacity-20" />

            {/* Star Trek - Data to Counselor Troi */}

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

            <h3 className="mt-12 text-xl font-bold text-neutral-500">
                Projects
            </h3>
            <ul className="list-disc">
                <li className="ml-6 mt-3">
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
                <li className="ml-6 mt-8">
                    <p className="text-white-softer">
                        <a
                            href="https://crosswit.io"
                            target="_blank"
                            className="text-violet-500 underline hover:text-violet-400"
                        >
                            Crosswit:
                        </a>{" "}
                        Memory game and word search puzzles combined into a
                        single game that aims to improve short term memory. Game
                        design is based on memorization and recall (memory) as
                        we are first instructed to remember words and then find
                        them in the puzzle.
                    </p>
                </li>
                <li className="ml-6 mt-8">
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
                        api service that provides movies data. For smooth user
                        experience and less network traffic all fetched data is
                        stored in the browser's cache storage.
                    </p>
                </li>
                <li className="ml-6 mt-8">
                    <p className="text-white-softer">
                        <a
                            className="text-violet-500 underline hover:text-violet-400"
                            href="https://sessiontimer.app"
                            target="_blank"
                        >
                            Session Timer:
                        </a>{" "}
                        Introduce sessions to your flow and get notified by the
                        browser when a session is completed. I often find to be
                        most productive when I work with timers. You can tweak
                        the timer duration to suit your needs better.
                    </p>
                </li>
            </ul>

            {/* Contact */}

            <h3 className="mt-12 text-xl font-bold text-neutral-500">
                Contact
            </h3>
            <p className="text-white-softer mt-2">
                If you wish to contact me you can use
                “hrvoje.mlinarevic[at]gmail.com” to send me a message.
            </p>
            <ul className="list-disc">
                <li className="ml-6 mt-3">
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
