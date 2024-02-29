import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <div>Sorry, we can`t find this page</div>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
