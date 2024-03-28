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

  const handleClickExpand = (typeWindow) => {
    if (typeWindow == "Editor") {
      $(".container-editor").toggleClass("complete");
      $(".container-editor").toggleClass("normal");
      $(".container-previewer").toggleClass("normal");
    } else {
      $(".container-previewer").toggleClass("complete");
      $(".container-previewer").toggleClass("normal");
      $(".container-editor").toggleClass("normal");
    }
  };

  return (
    <>
      <div className="background"></div>
      <Window
        windowType={"Editor"}
        handleClickExpand={handleClickExpand}
        className="container-editor normal"
      >
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
      <Window
        windowType={"Previewer"}
        handleClickExpand={handleClickExpand}
        className="container-previewer normal"
      >
        <div className="container-previewer">
          <p className="preview" id="preview"></p>
        </div>
      </Window>
    </>
  );
}

export default App;
