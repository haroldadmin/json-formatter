import type { NextPage } from "next";
import { useState } from "react";
import { BiCodeCurly } from "react-icons/bi";
import Dropdown from "../components/Dropdown";
import Editor from "../components/Editor";
import Layout from "../components/Layout";
import Renderer from "../components/Renderer";

const Home: NextPage = () => {
  const [unformattedText, setUnformattedText] = useState("");
  const [indentation, setIndentation] = useState(2);

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <div className="flex flex-row items-center text-indigo-600">
          <BiCodeCurly className="w-10 h-10 mr-4 fill-current" />
          <h1 className="text-4xl leading-loose">JSON Formatter</h1>
        </div>
        <p>A dead simple tool to format small amounts of JSON data</p>
        <div className="flex flex-row mt-8">
          <Dropdown
            label="Indentation"
            value={indentation}
            onChange={setIndentation}
            options={[2, 4, 8]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4 min-h-[24rem]">
          <Editor text={unformattedText} onChange={setUnformattedText} />
          <Renderer json={unformattedText} indentation={indentation} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
