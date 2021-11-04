import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Editor from "../components/Editor";
import Layout from "../components/Layout";
import Renderer from "../components/Renderer";

const Home: NextPage = () => {
  const [unformattedText, setUnformattedText] = useState("");
  const [indentation, setIndentation] = useState(2);

  const onTextReset = () => {
    setUnformattedText("");
  };

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-xl">JSON Formatter</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Editor text={unformattedText} onChange={setUnformattedText} />
          <Renderer json={unformattedText} indentation={indentation} />
          <div className="flex flex-row">
            <Button onClick={onTextReset}>Reset</Button>
            <div className="mx-2">
              <Dropdown
                label="Indentation"
                value={indentation}
                onChange={setIndentation}
                options={[2, 4, 8]}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
