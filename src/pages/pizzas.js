import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/Pizza';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data: { pizzas }, pageContext }) {
  return (
    <>
      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={pizzas.nodes} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
