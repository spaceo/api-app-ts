import { gql } from "graphql-request";
import { useCatQuery, CatQuery } from "./graphql/generated";


// const endpoint = "http://localhost:3000/graphql";


// function useCat() {
//   return useQuery("cat", async () => {
//     const {
//       cat
//     } = await request(
//       endpoint,
      // gql`
      // query cat {
      //   cat(id: 3) {
      //     type,
      //     name,
      //     img
      //   }
      // }`
//     );
//     return cat;
//   });
// }

gql`
  query cat {
    cat(id: 3) {
      type,
      name,
      img
    }
  }`

function Cats() {
  const { status, isFetching, data } = useCatQuery();
  let output = null;

  if(isFetching) {
    output = <img src={require('./loader.gif')} />;
  }

  if(status === 'success' && data) {
    const { cat: result } = data as CatQuery;

    output = (
      <>
        <p>
          You have loaded a cat of the type: <strong>{result.type}</strong>
        </p>
        <p><img src={result.img} width="300px"/></p>
      </>
    );
  }

  return output;
}

export default Cats;
