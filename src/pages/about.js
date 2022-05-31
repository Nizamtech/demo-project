import Image from "next/image";
import Tree from "../images/tree.jpg";
const about = () => {
  return (
    <div className="about">
      {/* <h1>This is About Pages</h1> */}

      <div>
        <h1 style={{ textAlign: "center", marging: "10px" }}> TREE</h1>
        <Image src={Tree} alt="image" />
      </div>
    </div>
  );
};

export default about;
