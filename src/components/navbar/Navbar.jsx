"use client"

import { Button, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import CartProduct from '../Cart/Cart';
import { FaShoppingCart } from 'react-icons/fa'
import { loadStripe } from "@stripe/stripe-js";

import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { signOut, useSession } from "next-auth/react";
import constants from '@/utils/constants';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Navbar = () => {
  let stripePromise;
  const [stripeError, setStripeError] = useState(null);
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getStripe = async () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
  };

  const goToCheckoutPage = async () => {

    const checkoutOptions = {
      lineItems: cart.items.map(({ price, quantity }) => ({
        price,
        quantity
      })),
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
    };

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    if (error) setStripeError(error.message);
  };

  if (stripeError) alert(stripeError);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  

  
  return (
    
    <div className={styles.container}>
       <div className={styles.social}>
        <Link href="https://www.facebook.com" target="_blank"><Image src="/facebook.png" alt="facebook" width={24} height={24} /></Link>
        <Link href="https://www.instagram.com" target="_blank"><Image src="/instagram.png" alt="instagram" width={24} height={24} /></Link>
        <Link href="https://www.youtube.com" target="_blank"><Image src="/youtube.png" alt="youtube" width={24} height={24} /></Link>
      </div>
      {/* <div className={styles.logo}>Kaipher</div> */}
      <div className={styles.logo}><Link href="/" className={styles.link}>{constants.application.name}</Link></div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>{constants.pages.home}</Link>
        {/* <Link href="/products" className={styles.link}>Products</Link>         */}
        <Link href="/about" className={styles.link}>About</Link>                

        <AuthLinks />
        {productsCount > 0 ? <Link href="/ordersummary" className={styles.link}><FaShoppingCart className="cart-icon" /> ({productsCount}) </Link> : null}

      </div>
    </div>
  );
};

export default Navbar;
