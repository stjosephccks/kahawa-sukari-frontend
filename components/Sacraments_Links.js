import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Sacraments_Links() {
  const { pathname } = useRouter();

  return (
    <>
      <h2>Sacraments</h2>
      <ul className="">
        <li>
          <Link
            className={
              pathname.includes("baptism") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/baptism"
          >
            Baptism
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname.includes("confirmation")
                ? "text-secondary"
                : "text-primary"
            }
            href="/sacraments/confirmation"
          >
            Confirmation
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname.includes("eucharist") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/eucharist"
          >
            Eucharist
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname.includes("penance") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/penance"
          >
            Reconciliation
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname.includes("annointing")
                ? "text-secondary"
                : "text-primary"
            }
            href="/sacraments/annointing"
          >
            Anointing of the sick{" "}
          </Link>
        </li>

        <li>
          <Link
            className={
              pathname.includes("matrimony") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/matrimony"
          >
            Matrimony
          </Link>
        </li>

        <li>
          <Link
            className={
              pathname.includes("orders") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/orders"
          >
            Holy Orders
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname.includes("rcic") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/rcic"
          >
            Becoming Catholic (RCIC)
          </Link>
        </li>

        <li>
          <Link
            className={
              pathname.includes("rcia") ? "text-secondary" : "text-primary"
            }
            href="/sacraments/rcia"
          >
            Becoming Catholic (RCIA)
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sacraments_Links;
