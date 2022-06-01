import Image from "next/image";
import Tree from "../images/tree.jpg";
const about = () => {
  return (
    <div className="about">
      <div>
        <h1>This is About Pages</h1>
        <h1>There are some Information here</h1>
        <h1 style={{ textAlign: "center", marging: "10px" }}> TREE</h1>
        <Image src={Tree} alt="image" />
      </div>
    </div>
  );
};

export default about;
