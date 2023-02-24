import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~components/Button";
import { useMe } from "~hooks/useMe";
import { destroyCookie } from "nookies";
import { ACCESS_TOKEN_NAME } from "~constant/cookie";
import { useUser } from "~providers/authentication";

export type MainLayoutProps = {
  children?: ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const user = useUser();

  const handleClickLogout = () => {
    destroyCookie(null, ACCESS_TOKEN_NAME);
    window.location.href = "/";
  };

  return (
    <div
      className={twMerge(
        "flex flex-col items-center min-h-screen",
        "text-white bg-zinc-800"
      )}
    >
      <nav
        className={twMerge(
          "h-16 w-full bg-zinc-900",
          "flex justify-between items-center"
        )}
      >
        <div className="pl-4 flex items-center justify-center">
          <Link href="/">
            <div
              className={twMerge(
                "h-10 w-10 rounded-full bg-zinc-800",
                "flex items-center justify-center",
                "uppercase text-xs font-bold"
              )}
            >
              Logo
            </div>
          </Link>
        </div>

        {!user && router.pathname !== "/login" ? (
          <div className="pr-4">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>
        ) : null}

        {user ? (
          <div
            className={twMerge(
              "px-4 text-center uppercase text-xs font-bold",
              "flex items-center gap-4"
            )}
          >
            Welcome, {user.name}{" "}
            <Button onClick={handleClickLogout}>Logout</Button>
          </div>
        ) : null}
      </nav>

      <main className="mt-4 p-4 flex-grow w-full bg-zinc-900">{children}</main>
    </div>
  );
};
