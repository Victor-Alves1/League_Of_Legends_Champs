import ContainerChampions from "./variables/champions/ContainerChampions"
import AsideLeftChampions from "./variables/champions/AsideLeftChampions"

import ItemsNav from "./inventory_fixed/ItemsNav"

import { useState } from "react"

const InventoryBody = () => {
    const [abaSelected, setAbaSelected] = useState(
        <>
          < AsideLeftChampions />
          < ContainerChampions />
        </>
      )
    return (
        <div className="items">
            <ItemsNav setAbaSelected={setAbaSelected}/>
          
            <div className="items-body">
            {
              abaSelected
            }
          </div>
        </div>
    );
}
 
export default InventoryBody;