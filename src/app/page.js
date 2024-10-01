import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/page";
import HomePage from "./screens/mainpage/page";
// import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <main style={{height:'max-height',width:"100%"}}>
      <HomePage/>
    </main>
  );
}
