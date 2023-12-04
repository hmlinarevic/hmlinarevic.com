export default function About() {
    return (
        <>
            <h3 className="mt-12 text-xl text-neutral-500">Contact</h3>
            <p className="text-white-softer mt-2">
                If you wish to contact me you can use
                “hrvoje.mlinarevic[at]gmail.com” to send me a message.
            </p>
            <ul className="list-disc">
                <li className="ml-8 mt-2">
                    <a
                        className="text-violet-500 underline hover:text-violet-400"
                        href="https://github.com/hmlinarevic"
                        target="_blank"
                    >
                        Github:
                    </a>{" "}
                    <span className="text-white-softer">hmlinarevic</span>
                </li>
            </ul>
        </>
    );
}
