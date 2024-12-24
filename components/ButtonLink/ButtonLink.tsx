import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
    children: React.ReactNode;
    href: string;
    target_bl?: string;
}

const ButtonLink = ({children, href, target_bl}: ButtonLinkProps) => {
  return (
    <Link href={href} target={target_bl}>
      <Button radius="none" className={styles.buttonLink}>
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
