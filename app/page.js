import nextCookies from 'next-cookies';
import useRequest from 'next-request';

export default function Home() {
  const { cookies } = useRequest();
  const [theme, setTheme] = useState('default');

  const setCookie = () => {
    cookies.set('theme', theme);
  };

  const readCookie = () => {
    const cookie = cookies.get('theme');
    if (cookie) {
      setTheme(cookie);
    }
  };

  return (
    <div>
      <h1>Setting and Reading Cookies</h1>
      <p>Your preferred theme is {theme}</p>
      <button onClick={setCookie}>Set Cookie</button>
      <button onClick={readCookie}>Read Cookie</button>
    </div>
  );
}