import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import constants from '@/utils/constants';
import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {

    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <div>
            {JSON.stringify(product.name, null, 2)}            
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                {product.name}
                </div>
                <p href={`/posts/${product.id}`}>
                    <h1>{product.title}</h1>
                </p>
                {/* <p className={styles.desc}>{product.desc.substring(0, 60)}</p> */}
                {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: product?.desc.substring(0, 60) }} /> */}
                <p href={`/posts/${product.id}`} className={styles.link}>
                    {constants.application.readmore}
                </p>
            </div>
        
        </div>

        // <div className={styles.container} key={product.id}>
        //     <div className={styles.imageContainer}>
        //         {product.images[0] ? 
        //         <img src={product.images[0]} alt={`${product.name}`}  className={styles.image} /> :
        //         <img src="https://placehold.co/150x120/orange/white" alt={`${product.name}`}  className={styles.image} />}
        //     </div>


        //     <div className={styles.textContainer}>
        //         <div className={styles.detail}>
        //             <span className={styles.date}>
        //                 {/* {product.createdAt.substring(0, 10)} -{" "} */}
        //             </span>
        //             <span className={styles.category}>{"product.catSlug"}</span>
        //         </div>
        //         <p href={`/posts/${product.id}`}>
        //             <h1>{product.title}</h1>
        //         </p>
        //         {/* <p className={styles.desc}>{product.desc.substring(0, 60)}</p> */}
        //         {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: product?.desc.substring(0, 60) }} /> */}
        //         <p href={`/posts/${product.id}`} className={styles.link}>
        //             {constants.application.readmore}
        //         </p>
        //     </div>
        // </div>


        // <Card>
        //     <Card.Body>
        //         <Card.Title>{product.name}</Card.Title>
        //         {product.images[0] ?
        //             <Card.Img src={product.images[0]} alt={`${product.name}`} />
        //             :
        //             <Card.Img src="https://placehold.co/150x120/orange/white" alt="" />}
        //         <Card.Text >${(product.price.toFixed(2))}</Card.Text>



        //         {productQuantity > 0 ?
        //             <>
        //                 <Form as={Row} >
        //                     <Form.Label column="true" sm="6" >{constants.application.product.incart}{productQuantity}</Form.Label>
        //                     <Col sm="6">
        //                         <Button className="add-button" sm="6" onClick={() => cart.addOneToCart(product.id, product)} >{constants.application.product.plus}</Button>
        //                         <Button className="remove-button" sm="6" onClick={() => cart.removeOneFromCart(product.id)}>{constants.application.product.minus}</Button>
        //                     </Col>
        //                 </Form>
        //                 <Button className="delete-button" variant="danger" onClick={() => cart.deleteFromCart(product.id)}>{constants.application.product.remove}</Button>
        //             </>
        //             :

        //             <Button className="add-to-cart-button" variant="primary" onClick={() => cart.addOneToCart(product.id, product)}>{constants.application.product.add}</Button>
        //         }
        //     </Card.Body>
        // </Card>

    )
}

export default ProductCard;
