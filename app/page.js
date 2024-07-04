import SignIn from "@/components/SignIn"
import styles from "./page.module.css"


export default function Home() {
  return (
    <div className="container text-center rounded-5" style={{ backgroundColor: "#f8f9fa", maxWidth: "500px"}}>
      <h2 className="text-center mt-5 pt-3 strong">RADI Transport Management System</h2>
      <SignIn />
    </div>
  );
}
