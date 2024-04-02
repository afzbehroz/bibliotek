import Button from "./Button";
import Alert from "./Alert";
import { ImChrome } from "react-icons/im";
import { FaRegIdBadge } from "react-icons/fa6";
import Badge from "./Badge";
import Card from "./Card";
import image from "./assets/Card-pic.jpeg";

function App() {
  return (
    <>
      <Button color="red" size="medium">
        Click
      </Button>
      <Button color="blue" size="large" desabled={true}>
        Click
      </Button>
      <Alert color="color" icon={<ImChrome />} />
      <Badge color={"color"} size={"size"} icon={<FaRegIdBadge />} />
      <Card
        imgSrc={image}
        imgAlt="image alt"
        href="https://www.rd.com/wp-content/uploads/2018/10/dog-head-tilt.jpg"
      />
    </>
  );
}

export default App;
