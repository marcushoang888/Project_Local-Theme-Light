import ContainerWrapper from "../function/ContainerWrapper";
import Category from "./Category";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="mt-[60px]">
        <Category></Category>
        <Copyright></Copyright>
    </footer>
  );
}
