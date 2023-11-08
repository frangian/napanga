import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  return <div>
    <ItemList greetings={props.greetings}/>
    </div>;
};

export default ItemListContainer;
