import { Component } from "react";
import cart from "../assets/cart.svg";
/** 
* @jsxRuntime classic
 */
/**
 * @jsx jsx
 */

// ! #5ECE7B;

import { css, jsx } from "@emotion/react";

class Card extends Component {
    render() {
        return (
            <div css={css`
                position: relative;
                display: inline-block;
                width: 30%;
                overflow: hidden;
                transition: all .5s ease-in-out;
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
                }
                &:hover .cart-button {
                    box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.5);
                    transform: translateY(0);
                    opacity: 1;
                }
                & * {
                    transition: all .3s ease-in-out;
                    padding: 5px;
                }
            `}>
                <img css={css`width: 100%;`} src={this.props.gallery[0]}></img>
                <div css={css`
                    width: 85%;
                `}>
                    <p>{this.props.name}</p>
                    <p css={css`
                        font-weight: bold;
                    `}>{`${this.props.prices[0].amount} ${this.props.prices[0].currency.symbol}`}</p>
                </div>
                <div css={css`
                    width: 45px;
                    height: 45px;
                    text-align: center;
                    line-height: 50px;
                    border-radius: 50%;
                    background-color: #5ECE7B;
                    display: inline-block;
                    position: absolute;
                    top: 75%;
                    left: 80%;
                    transform: translateY(100%);
                    opacity: 0;
                `}
                    className="cart-button">
                    <img src={cart} />
                </div>
            </div >
        )
    }
}

export default Card;