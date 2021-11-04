import {
  AiOutlineBook,
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between mx-6 my-4 text-sm font-light">
      <div className="flex items-center">
        <AiOutlineCopyrightCircle />
        <p className="mx-2 text-gray-800 sm:py-0">
          Kshitij Chauhan, {new Date().getFullYear()}
        </p>
      </div>
      <div className="flex flex-row my-2">
        <div className="flex items-center text-gray-600 hover:text-blue-500">
          <AiOutlineGithub />
          <a
            href="https://github.com/haroldadmin"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
            aria-label="Github"
          >
            Github
          </a>
        </div>
        <div className="flex items-center text-gray-600 hover:text-blue-500">
          <AiOutlineBook />
          <a
            href="https://blog.haroldadmin.com"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
            aria-label="Blog"
          >
            Blog
          </a>
        </div>
        <div className="flex items-center text-gray-600 hover:text-blue-500">
          <AiOutlineTwitter className="fill-current" />
          <a
            href="https://twitter.com/haroldadmin"
            target="_blank"
            rel="noreferrer"
            className="mx-2 "
            aria-label="Twitter"
          >
            Twitter
          </a>
        </div>
      </div>
      <p>Built with Next.js, tailwindcss, and TypeScript</p>
    </footer>
  );
};

export default Footer;
