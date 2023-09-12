/* eslint-disable react/no-unescaped-entities */

export default function Home() {
    return (
        <main className="mx-auto min-h-[1300px] w-[600px] pt-8 text-green-light">
            <h1 className="text-2xl">Hrvoje Mlinarevic</h1>
            <h2 className="mb-4 text-sm text-green-dark">
                Web development, interactive apps
            </h2>

            <hr className="mb-8 border-[1.25px] border-green-light opacity-20" />

            <p className="mt-6 text-white-softer text-opacity-75">
                Inspired by the accessibility of information on the web and its
                practicality, I believe that all web interfaces should be simple
                enough and easy to navigate. My mission is to create software
                that is focused on delivering intuitive user experience while
                also offering value to its users.
            </p>

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
                        Being a hybrid between a memory game and a word search
                        puzzle, crosswit is designed around the idea of
                        improving cognitive functioning. Two aspects of the game
                        - memorizing and searching for words may improve your
                        short term memory, focus and concentration.
                    </p>
                </li>
                <li className="ml-8 mt-6">
                    <p className="text-white-softer">
                        <a
                            className="text-green-light underline"
                            href="https://moviesnacks.netlify.app/"
                            target="_blank"
                        >
                            Moviesnacks:
                        </a>{" "}
                        Get all the relevant information about a movie while
                        searching, discovering or adding movies to your favorite
                        list for easy access.
                    </p>
                </li>
            </ul>

            {/* <hr className="my-12 border-green-light opacity-20" /> */}

            {/* Collaboration */}

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
                        coworker! Now you can deliver relevant, cutting-edge
                        content directly to your customers without spending any
                        of your vital time.{" "}
                    </p>
                </li>
            </ul>

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

            <hr className="mb-4 mt-12 border-[1.25px] border-orange opacity-20" />

            <section className="px-4 text-sm italic leading-relaxed text-orange">
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
        </main>
    );
}
