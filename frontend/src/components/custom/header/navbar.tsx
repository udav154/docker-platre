import Link from "next/link";


export function NavBar() {

  return (
    <nav className="font-first flex gap-8 items-center text-lg text-white">
      <Link className="" href="/">
        <span
          className=""
          >
          {"Проекты"}
        </span>
      </Link>
      <Link className="" href="/">
        <span
          className=""
          >
          {"Услуги и Цены"}
        </span>
      </Link>
      <Link className="" href="/">
        <span
          className=""
          >
          {"Контакты"}
        </span>
      </Link>
    </nav>
  );
}