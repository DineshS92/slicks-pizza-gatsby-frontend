import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/Pizza';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data: { pizzas } }) {
  return (
    <>
      <ToppingsFilter />
      <PizzaList pizzas={pizzas.nodes} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
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
