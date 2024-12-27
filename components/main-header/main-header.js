
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
    
    return (
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image src={logoImg.src} alt="Plate with some food" width={500} height={500} priority/>
            Next Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Join The Community</NavLink>
                </li>
            </ul>
        </nav>
        
        </header>
        </>
        
    )
}