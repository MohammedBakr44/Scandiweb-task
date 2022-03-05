import { Component } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
/**
  @jsxRuntime classic
 */
/**
 * @jsx jsx
 */
import { css, jsx } from "@emotion/react";

class Nav extends Component {
  render() {
    return (
      <nav
        css={css`
          display: flex;
          margin-top: 30px;
        `}
      >
        <div
          css={css`
            flex-grow: 1;
          `}
        >
          <ul
            css={css`
              list-style-type: none;
              text-align: center;
              & li {
                display: inline-block;
                padding: 20px;
                margin: 5px;
                text-transform: uppercase;
                border-bottom: 1px soild transparent;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                  color: #5ece7b;
                  border-bottom: 1px solid #5ece7b;
                }
              }
            `}
          >
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </div>
        <div
          css={css`
            flex-grow: 3;
            align-self: center;
            text-align: center;
          `}
        >
          <img src={logo} alt="logo: shopping bag" />
        </div>
        <div
          css={css`
            flex-grow: 1;
          `}
        >
          <ul
            css={css`
              text-align: center;
              & li {
                display: inline-block;
                margin: 10px;
              }
            `}
          >
            <li>
              <select
                css={css`
                  border: none;
                  background: transparent;
                  padding: 10px;
                  outline: 0;
                `}
              >
                <option>$ USD</option>
                <option>€ EUR</option>
                <option>¥ JPY</option>
              </select>
            </li>
            <li
              css={css`
                padding: 10px;
              `}
            >
              <img src={cart} alt="cart" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
