import { Component } from "react";
/**import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
  @jsxRuntime classic
 */
/**
 * @jsx jsx
 */


import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { css, jsx } from "@emotion/react";
import Card from './Card';

const getProductsQuery = gql`
  {
  categories {
    name
		products {
      name
      id
      inStock
      gallery
      description
      brand
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      }
    }
}
`
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productNames: [],
            products: [],
            loading: props.data.loading
        }
    }
    displayProducts() {
        const data = this.props.data;
        if (data.loading) {
            console.log(data.loading);
            return (<h1>Loading...</h1>)
        } else {
            // console.log(this.props.data.categories.filter(category => category.name === this.props.cat)[0].products.map(product => product))
            // this.setState({
            //     productNames: this.props.data.categories.filter(category => category.name === this.props.cat).map(category => category.products)[0].map(product => product.name),
            //     products: this.props.data.categories.filter(category => category.name === this.props.cat)[0].products.map(product => product),
            //     loading: false
            // })
            // return
            return (data.categories.filter(category => category.name === this.props.cat)[0].products.map(product => <Card {...product} />));
        }
    }
    // TODO this.props.data.categories.filter(category => category.name == this.props.cat)
    render() {
        // console.log(this.props.data.categories.filter(category => category.name === this.props.cat).map(product => product).map(product => product.name));

        return (
            <div css={css`
                margin: 50px;
                padding: 10px;
            `}>
                <h1>{this.props.cat}</h1>
                {
                    //this.state.products.map(product => <Card {...product} />)
                }
                {this.displayProducts()}
            </div>
        )
    }
}

export default graphql(getProductsQuery)(Category);
