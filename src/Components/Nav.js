import { Component } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import Category from "./Category";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

/**import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
  @jsxRuntime classic
 */
/**
 * @jsx jsx
 */
import { css, jsx } from "@emotion/react";

const getCategoriesQuery = gql`
  {
      categories {
        name
      }
  }
`

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    }
  }
  displayCategories() {
    const data = this.props.data;
    const active = e => {
      e.target.classList.toggle("active");

      this.setState({
        category: e.target.attributes.name.value
      })
    }
    if (data.loading) {
      return (<li>Loading...</li>)
    } else {
      return data.categories.map(category => {
        return (
          <li onClick={active} name={category.name} key={category.name}>{category.name}</li>
        )
      })
    }
  }
  render() {
    return (
      <div>
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
              & .active {
                color: #5ece7b;
                border-bottom: 1px solid #5ece7b;
              }
            `}
            >

              {
                this.displayCategories()
              }
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
        <Category cat={this.state.category} />
      </div>
    );
  }
}

export default graphql(getCategoriesQuery)(Nav);
