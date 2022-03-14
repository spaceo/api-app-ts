import { gql } from "graphql-request";
import { useCatQuery, CatQuery } from "./graphql/generated";

gql`
  query cat($id: Int!) {
    cat(id: $id) {
      type,
      name,
      img
    }
  }`

function Cats() {
  const { status, isFetching, data } = useCatQuery({id: 3 });
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
        <p><img src={`${process.env.REACT_IMAGES_DOMAIN}/${result.img}`} width="300px"/></p>
      </>
    );
  }

  return output;
}

export default Cats;
