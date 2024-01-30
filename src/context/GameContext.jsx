"use client"
import React, { createContext, useContext } from "react";

import { createContext, useState } from "react";

// Here is your application state
const [games, setGames] = useState([
    // { id: nanoid(), name: "5 Crowns", players: [{ id: nanoid(), name: "Jovy", score: "0" }, { id: nanoid(), name: "Simmigon", score: "100" }] },
    // { id: nanoid(), name: "Scrabble", players: [{ id: nanoid(), name: "Jonah", score: "0" }, { id: nanoid(), name: "Tim", score: "100" }] },
    // { id: nanoid(), name: "Uno", players: [{ id: nanoid(), name: "Amanda", score: "0" }, { id: nanoid(), name: "Opin", score: "100" }] },
    // { id: nanoid(), name: "Tekken", players: [{ id: nanoid(), name: "Denzel", score: "0" }, { id: nanoid(), name: "Isaiah", score: "100" }] },
    // { id: nanoid(), name: "Dominion", players: [{ id: nanoid(), name: "Joselle", score: "0" }, { id: nanoid(), name: "Alan", score: "100" }] },
]);
export const GameContext = createContext({
    games: [
        { id: nanoid(), name: "5 Crowns", players: [{ id: nanoid(), name: "Jovy", score: 0 }, { id: nanoid(), name: "Simmigon", score: 100 }] },
        { id: nanoid(), name: "Scrabble", players: [{ id: nanoid(), name: "Jonah", score: 0 }, { id: nanoid(), name: "Tim", score: 100 }] },
        { id: nanoid(), name: "Uno", players: [{ id: nanoid(), name: "Amanda", score: 0 }, { id: nanoid(), name: "Opin", score: 100 }] },
        { id: nanoid(), name: "Tekken", players: [{ id: nanoid(), name: "Denzel", score: 0 }, { id: nanoid(), name: "Isaiah", score: 100 }] },
        { id: nanoid(), name: "Dominion", players: [{ id: nanoid(), name: "Joselle", score: 0 }, { id: nanoid(), name: "Alan", score: 100 }] },]
    ,
    getProductQuantity: () => { },
    addNewPlayer: () => { },
    removePlayer: () => { },
    updateScore: () => { },
    updateName: () => { },
    addNewgame: () => { }
});
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "This is my todo message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    
});

export const useTodo = () => {
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider


export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id, product) {

        const quantity = getProductQuantity(id);
        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id,
                        name: product.name,
                        application_price: product.price,
                        price: product.default_price,
                        quantity: 1,
                    }
                ]
            )
        } else { // product is in cart

            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity + 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity - 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {

        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost() {

        let totalCost = 0;


        cartProducts.map((product) => {
            return totalCost += product.application_price * product.quantity;
        });
        return totalCost;
    }

    // Tomorrow at 7pm 
    // 
    const contextValue = {
        games: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default GameContext;