import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import './Checkout.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



export default function Checkout() {

    const [orderId, setOrderId] = useState("");

    const { cart, totalPrice, cleanCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const order = {
            client: data,
            productos: cart,
            total: totalPrice()
        }
        console.log(order);

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                cleanCart();
            })

        let timerInterval;
        Swal.fire({
            title: "Procesando compra...",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
        });

    }

    if (orderId) {
        return (
            <div className="num-order">
                <div className="mensaje-final">
                    <h1>¡Muchas gracias por su compra!</h1>
                    <p>Tu número de orden es: {orderId}</p>
                    <Link to={"/"}>
                        <button className="btn-seguir-comprando">Seguir Comprando</button>
                    </Link>
                </div>
            </div>
        )

    }




    return (
        <>
            <div className="chekout-contenedor">

                <form className="form" onSubmit={handleSubmit(comprar)}>
                    <h1 className="titulo-checkout">Checkout</h1>

                    <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                    <input type="text" placeholder="Ingresá tu apellido" {...register("apellido")} />
                    <input type="email" placeholder="Ingresá tu e-mail"  {...register("e-mail")} />
                    <input type="text" placeholder="Ingresá tu domicilio" {...register("domicilio")} />
                    <input type="phone" placeholder="Ingresá tu teléfono"  {...register("teléfono")} />

                    <button className="btn-comprar" type="submit">Confirmar compra</button>

                </form>

            </div>

        </>
    )
}