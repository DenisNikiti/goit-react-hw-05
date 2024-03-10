import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div>
      <Link to="/">Go Home</Link>
      <p>Page Non Found</p>
    </div>
  );
}
