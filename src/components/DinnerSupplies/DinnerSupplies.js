import SilverWare from "../SilverWare/SilverWare";

function DinnerSupplies({count}) {
  return (
    <>
      <h2>Dinner Supplies</h2>
      <SilverWare name="Spoons" count={count} />
      <SilverWare name="Forks" count={count} />
      <SilverWare name="Knives" count={count} />  
    </>
  ) // End return
} // End DinnerSupplies()

export default DinnerSupplies;