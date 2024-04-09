import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page'>
      <h1>에러~~</h1>
      <p>에러 페이지입니다.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
