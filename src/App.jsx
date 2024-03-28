import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import Window from "./components/Window";
import { useEffect } from "react";
import $ from "jquery";
import { marked } from "marked";
import { setText } from "./features/text/textSlice";

function App() {
  const text = useSelector((state) => state.text.value);

  const dispatch = useDispatch();

  marked.use({
    breaks: true,
  });

  useEffect(() => {
    $("#preview").html(marked.parse(text));
  }, [text]);

  return (
    <>
      <div className="background"></div>
      <Window windowType={"Editor"}>
        <textarea
          name="editor"
          id="editor"
          className="editor"
          cols="30"
          rows="10"
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
        ></textarea>
      </Window>
      <Window windowType={"Previewer"}>
        <div className="container-previewer">
          <p className="preview" id="preview"></p>
        </div>
      </Window>
    </>
  );
}

export default App;
