import "./alquiler.css";
import "./image_14.png";
import image_14 from "./image_14.png";

function Alquiler() {
  return (
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col">
          <img className="imagen" src={image_14}></img>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img className="imagen" src={image_14}></img>
        </div>
      </div>
    </div>
  );
}

export default Alquiler;
